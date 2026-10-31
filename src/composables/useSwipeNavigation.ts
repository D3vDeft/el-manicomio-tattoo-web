import { computed, onUnmounted, ref } from 'vue'

const MIN_SWIPE_DISTANCE = 50
const CLOSE_DISTANCE = 110
const MAX_ZOOM = 4
const CLOSE_ANIMATION_MS = 280
const animationDuration = () =>
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
        ? 1
        : CLOSE_ANIMATION_MS

type Point = { x: number; y: number }

export function useSwipeNavigation(
    onNavigate: (direction: -1 | 1) => void,
    onClose: () => void,
) {
    const transitionName = ref('viewer-slide-next')
    const scale = ref(1)
    const offsetX = ref(0)
    const offsetY = ref(0)
    const rotation = ref(0)
    const opacity = ref(1)
    const isDragging = ref(false)
    const isClosing = ref(false)
    let touchStart: Point | null = null
    let previousTouch: Point | null = null
    let pinchStartDistance = 0
    let pinchStartScale = 1
    let closeTimeout: ReturnType<typeof setTimeout> | undefined

    const imageStyle = computed(() => ({
        transform: `translate3d(${offsetX.value}px, ${offsetY.value}px, 0) rotate(${rotation.value}deg) scale(${scale.value})`,
        opacity: opacity.value,
        transition: isDragging.value
            ? 'none'
            : `transform ${animationDuration()}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${animationDuration()}ms ease`,
    }))

    const resetTransform = () => {
        if (closeTimeout) {
            clearTimeout(closeTimeout)
            closeTimeout = undefined
        }
        isClosing.value = false
        scale.value = 1
        offsetX.value = 0
        offsetY.value = 0
        rotation.value = 0
        opacity.value = 1
        isDragging.value = false
    }

    const navigate = (direction: -1 | 1) => {
        if (isClosing.value) return
        transitionName.value = direction === 1 ? 'viewer-slide-next' : 'viewer-slide-previous'
        resetTransform()
        onNavigate(direction)
    }

    const closeWithAnimation = () => {
        if (isClosing.value) return
        isClosing.value = true
        isDragging.value = false
        offsetY.value = Math.max(window.innerHeight, offsetY.value + 100)
        rotation.value = Math.max(16, rotation.value + 8)
        scale.value = Math.min(scale.value, 0.85)
        opacity.value = 0
        closeTimeout = setTimeout(onClose, animationDuration())
    }

    const handleTouchStart = (event: TouchEvent) => {
        if (isClosing.value) return

        if (event.touches.length >= 2) {
            const first = event.touches[0]
            const second = event.touches[1]
            if (!first || !second) return

            touchStart = null
            previousTouch = null
            pinchStartDistance = Math.hypot(first.clientX - second.clientX, first.clientY - second.clientY)
            pinchStartScale = scale.value
            isDragging.value = true
            return
        }

        const touch = event.changedTouches[0]
        if (!touch) return

        touchStart = { x: touch.clientX, y: touch.clientY }
        previousTouch = touchStart
        isDragging.value = scale.value === 1
    }

    const handleTouchMove = (event: TouchEvent) => {
        if (isClosing.value) return

        if (event.touches.length >= 2) {
            const first = event.touches[0]
            const second = event.touches[1]
            if (!first || !second || pinchStartDistance === 0) return

            event.preventDefault()
            const distance = Math.hypot(first.clientX - second.clientX, first.clientY - second.clientY)
            scale.value = Math.min(MAX_ZOOM, Math.max(1, pinchStartScale * (distance / pinchStartDistance)))
            return
        }

        const touch = event.touches[0]
        if (!touch || !previousTouch || !touchStart) return

        if (scale.value > 1) {
            event.preventDefault()
            const maxOffset = (scale.value - 1) * Math.min(window.innerWidth, window.innerHeight) / 2
            offsetX.value = Math.max(-maxOffset, Math.min(maxOffset, offsetX.value + touch.clientX - previousTouch.x))
            offsetY.value = Math.max(-maxOffset, Math.min(maxOffset, offsetY.value + touch.clientY - previousTouch.y))
            previousTouch = { x: touch.clientX, y: touch.clientY }
            return
        }

        const deltaX = touch.clientX - touchStart.x
        const deltaY = touch.clientY - touchStart.y
        if (deltaY > 0 && deltaY > Math.abs(deltaX)) {
            event.preventDefault()
            isDragging.value = true
            offsetY.value = deltaY
            rotation.value = Math.min(18, deltaY * 0.055)
            opacity.value = Math.max(0.35, 1 - deltaY / (window.innerHeight * 1.4))
        }
    }

    const handleTouchEnd = (event: TouchEvent) => {
        if (isClosing.value) return

        if (event.touches.length === 1) {
            const remainingTouch = event.touches[0]
            if (remainingTouch) {
                touchStart = { x: remainingTouch.clientX, y: remainingTouch.clientY }
                previousTouch = touchStart
                pinchStartDistance = 0
                isDragging.value = scale.value === 1
            }
            return
        }

        const start = touchStart
        const touch = event.changedTouches[0]
        touchStart = null
        previousTouch = null
        pinchStartDistance = 0
        if (!start || !touch) {
            isDragging.value = false
            return
        }

        const deltaX = touch.clientX - start.x
        const deltaY = touch.clientY - start.y

        if (scale.value === 1 && deltaY >= CLOSE_DISTANCE && deltaY > Math.abs(deltaX) * 1.25) {
            closeWithAnimation()
            return
        }

        isDragging.value = false

        if (scale.value === 1) {
            offsetX.value = 0
            offsetY.value = 0
            rotation.value = 0
            opacity.value = 1
        }

        if (scale.value === 1 && Math.abs(deltaX) >= MIN_SWIPE_DISTANCE && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
            navigate(deltaX < 0 ? 1 : -1)
            return
        }

    }

    const handleTouchCancel = () => {
        touchStart = null
        previousTouch = null
        pinchStartDistance = 0
        isDragging.value = false
        if (scale.value === 1) {
            offsetY.value = 0
            rotation.value = 0
            opacity.value = 1
        }
    }

    onUnmounted(() => {
        if (closeTimeout) clearTimeout(closeTimeout)
        if (isClosing.value) onClose()
    })

    return {
        transitionName,
        imageStyle,
        isClosing,
        navigate,
        closeWithAnimation,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handleTouchCancel,
        resetTransform,
    }
}

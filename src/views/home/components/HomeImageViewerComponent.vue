<template>
    <Teleport to="body">
        <div v-if="selectedImage !== null" class="lightbox" :class="{ 'lightbox--closing': isClosing }" role="dialog" aria-modal="true"
            aria-label="Visor de imágenes del portfolio" @click.self="closeImage">
            <button type="button" class="lightbox-close z-10" aria-label="Cerrar imagen" @click="closeImage">
                &times;
            </button>

            <button type="button" class="lightbox-nav lightbox-prev z-10" aria-label="Imagen anterior"
                @click="changeImage(-1)">
                &#10094;
            </button>

            <div
                class="lightbox-media"
                :style="imageStyle"
                @touchstart.passive="handleTouchStart"
                @touchmove="handleTouchMove"
                @touchend="handleTouchEnd"
                @touchcancel="handleTouchCancel"
            >
                <Transition :name="transitionName" mode="out-in">
                    <img
                        v-if="currentImage"
                        :key="currentImage.src"
                        :src="currentImage.src"
                        :alt="currentImage.alt"
                        class="lightbox-image"
                    />
                </Transition>
            </div>

            <button type="button" class="lightbox-nav lightbox-next z-10" aria-label="Imagen siguiente"
                @click="changeImage(1)">
                &#10095;
            </button>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '@/stores/portfolio'
import { useSwipeNavigation } from '@/composables/useSwipeNavigation'

const portfolioStore = usePortfolioStore()

const { selectedImage, currentImage } = storeToRefs(portfolioStore)

let previousOverflow = ''

const closeImage = () => {
    closeWithAnimation()
}

const {
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
} = useSwipeNavigation((direction) => portfolioStore.changeImage(direction), () => portfolioStore.closeImage())

const changeImage = (direction: -1 | 1) => navigate(direction)

const handleKeydown = (event: KeyboardEvent) => {
    if (selectedImage.value === null) return

    if (event.key === 'Escape') {
        closeImage()
    }

    if (event.key === 'ArrowLeft') {
        changeImage(-1)
    }

    if (event.key === 'ArrowRight') {
        changeImage(1)
    }
}

// Bloquear el scroll mientras el visor está abierto.
watch(selectedImage, (newValue, oldValue) => {
    if (oldValue === null && newValue !== null) {
        resetTransform()
        previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
    } else if (oldValue !== null && newValue === null) {
        document.body.style.overflow = previousOverflow
    }
})

onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = previousOverflow
})
</script>

<style scoped>
.lightbox {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px;
    background: rgb(0 0 0 / 92%);
    transition: background-color 280ms ease;
}

.lightbox--closing {
    background: rgb(0 0 0 / 0%);
}

.lightbox-media {
    touch-action: none;
    transform-origin: center;
    will-change: transform, opacity;
}

.lightbox-image {
    max-width: 90vw;
    max-height: 85vh;
    object-fit: contain;
    pointer-events: none;
}

.viewer-slide-next-enter-active,
.viewer-slide-next-leave-active,
.viewer-slide-previous-enter-active,
.viewer-slide-previous-leave-active {
    transition:
        opacity 240ms ease,
        transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
}

.viewer-slide-next-enter-from {
    opacity: 0;
    transform: translateX(48px) scale(0.97);
}

.viewer-slide-next-leave-to {
    opacity: 0;
    transform: translateX(-48px) scale(0.97);
}

.viewer-slide-previous-enter-from {
    opacity: 0;
    transform: translateX(-48px) scale(0.97);
}

.viewer-slide-previous-leave-to {
    opacity: 0;
    transform: translateX(48px) scale(0.97);
}

@media (prefers-reduced-motion: reduce) {
    .viewer-slide-next-enter-active,
    .viewer-slide-next-leave-active,
    .viewer-slide-previous-enter-active,
    .viewer-slide-previous-leave-active {
        transition-duration: 1ms;
    }
}

.lightbox-close,
.lightbox-nav {
    position: absolute;
    color: white;
    background: rgb(0 0 0 / 45%);
    border: 1px solid rgb(255 255 255 / 35%);
    cursor: pointer;
    line-height: 1;
}

.lightbox-close {
    top: 20px;
    right: 25px;
    padding: 8px 14px;
    font-size: 32px;
}

.lightbox-nav {
    top: 50%;
    transform: translateY(-50%);
    padding: 14px;
    font-size: 24px;
}

.lightbox-prev {
    left: 18px;
}

.lightbox-next {
    right: 18px;
}

.lightbox-close:focus-visible,
.lightbox-nav:focus-visible {
    outline: 2px solid white;
    outline-offset: 4px;
}

@media (max-width: 640px) {
    .lightbox {
        padding: 45px 12px;
    }

    .lightbox-image {
        max-width: 100%;
        max-height: 80vh;
    }

    .lightbox-nav {
        padding: 10px;
        font-size: 18px;
    }

    .lightbox-prev {
        left: 6px;
    }

    .lightbox-next {
        right: 6px;
    }
}
</style>
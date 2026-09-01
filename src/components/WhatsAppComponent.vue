<template>
    <div>
        <a href="https://wa.me/34674444826?text=Hola%20quiero%20agendar%20una%20cita" target="_blank"
            rel="noopener noreferrer" aria-label="Contactar por WhatsApp para agendar una cita"
            title="Agendar una cita por WhatsApp" class="group flex items-center justify-center w-14 h-14
                   text-white bg-green-500 rounded-full
                   shadow-xl shadow-black/40
                   hover:bg-green-400 hover:scale-110 hover:shadow-green-500/30
                   active:scale-95
                   focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300/50
                   transition-all duration-300 ease-out">
            <MessageCirclePlus :size="28" :stroke-width="2"
                class="transition-transform duration-300 group-hover:rotate-6" />
        </a>
    </div>
</template>

<script setup lang="ts">
import { MessageCirclePlus } from '@lucide/vue'
</script>

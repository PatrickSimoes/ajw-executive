<template>
  <a :href="whatsappLink()" target="_blank" rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600">
    <img src="@/assets/social-media/WhatsApp.svg.png" alt="WhatsApp" class="w-6 h-6" />
  </a>
</template>

<script setup lang="ts">
import { generateWhatsAppLink } from '@/utils/whatsapp'

function whatsappLink(): string {
  return generateWhatsAppLink('whatsapp.info')
}
</script>

<style scoped></style>

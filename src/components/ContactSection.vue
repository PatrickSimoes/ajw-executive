<template>
  <section id="contact" class="py-20 bg-black">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          {{ t('contactSection.title') }}
        </h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          {{ t('contactSection.subtitle') }}
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <a :href="whatsappLink()" target="_blank" rel="noopener noreferrer"
            class="block bg-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 text-center hover:border-amber-500/50 transition-all transform hover:scale-105">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <img src="@/assets/social-media/WhatsApp.svg.png" alt="WhatsApp" class="w-12 h-12" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">{{ t('contactSection.whatsapp') }}</h3>
          </a>

          <a href="https://instagram.com/agenciaajwexecutive" target="_blank" rel="noopener noreferrer"
            class="block bg-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 text-center hover:border-amber-500/50 transition-all transform hover:scale-105">
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <img src="@/assets/social-media/Instagram_icon.png" alt="Instagram" class="w-12 h-12" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">{{ t('contactSection.instagram') }}</h3>
          </a>

          <a href="https://t.me/agenciaajwexecutive" target="_blank" rel="noopener noreferrer"
            class="block bg-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 text-center hover:border-amber-500/50 transition-all transform hover:scale-105">
            <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <img src="@/assets/social-media/Telegram_logo.svg.png" alt="Telegram" class="w-12 h-12" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">{{ t('contactSection.telegram') }}</h3>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { generateWhatsAppLink } from '@/utils/whatsapp'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function whatsappLink(): string {
  return generateWhatsAppLink('whatsapp.info')
}
</script>

<style scoped></style>

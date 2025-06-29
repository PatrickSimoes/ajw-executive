<template>
  <section id="home"
    class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-500 blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-300 blur-3xl"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <div class="mb-8">
          <img
            src="../assets/MainLogo-sem-fundo.png"
            alt="AJW Executive"
            class="h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56 mx-auto mb-6 filter drop-shadow-2xl object-contain"
          />
        </div>

        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span class="text-amber-400">{{ t('hero.transport') }}</span><br />
          {{ t('hero.executive') }}
        </h1>

        <p class="text-xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto">
          {{ t('hero.subtitle') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#services"
            class="bg-amber-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all transform hover:scale-105 shadow-lg">
            {{ t('hero.ctaServices') }}
          </a>
          <a :href="whatsappLink()"
            class="border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-500 hover:text-black transition-all">
            {{ t('hero.ctaQuote') }}
          </a>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-amber-500 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-amber-500 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { generateWhatsAppLink } from '@/utils/whatsapp'

const { t } = useI18n()

function whatsappLink(): string {
  return generateWhatsAppLink('whatsapp.info')
}
</script>

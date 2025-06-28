<template>
  <footer class="bg-black border-t border-amber-500/20 py-12">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-8">
        <div class="md:col-span-2">
          <div class="flex items-center space-x-1 sm:space-x-2 md:space-x-3 mb-4">
            <img
              src="../assets/MainLogo-sem-fundo.png"
              alt="AJW Executive"
              class="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0 object-contain"
            />
            <div class="text-white">
              <h3 class="text-base sm:text-lg md:text-xl font-bold">AJW</h3>
              <p class="text-xs sm:text-sm text-amber-400">EXECUTIVE</p>
            </div>
          </div>
          <p class="text-gray-300 mb-4 max-w-md">
            {{ t('footerSection.about') }}
          </p>
        </div>

        <div>
          <h4 class="text-white font-bold mb-4">{{ t('footerSection.servicesTitle') }}</h4>
          <ul class="space-y-2 text-gray-300">
            <li><a href="#services" class="hover:text-amber-400 transition-colors">{{
              t('footerSection.services.airport') }}</a></li>
            <li><a href="#services" class="hover:text-amber-400 transition-colors">{{
              t('footerSection.services.cityTour') }}</a></li>
            <li><a href="#services" class="hover:text-amber-400 transition-colors">{{
              t('footerSection.services.corporate') }}</a></li>
            <li><a href="#services" class="hover:text-amber-400 transition-colors">{{ t('footerSection.services.events')
                }}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-4">{{ t('footerSection.contactTitle') }}</h4>
          <ul class="space-y-2 text-gray-300">
            <li>{{ defaultWhatsAppNumber }}</li>
            <li> <a href="mailto:ajwexecutivedrivers@outlook.com"
                class="hover:underline">ajwexecutivedrivers@outlook.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-amber-500/20 mt-8 pt-8 text-center">
        <p class="text-gray-400" v-html="t('footerSection.rights', { year: currentYear })"></p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { defaultWhatsAppNumber } from '@/utils/whatsapp';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentYear = new Date().getFullYear();
</script>

<style scoped></style>

<template>
  <header class="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-amber-500/20">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2 sm:space-x-3">
          <img
            src="../assets/MainLogo-sem-fundo.png"
            alt="AJW Executive"
            class="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 object-contain"
          />
          <div class="text-white">
            <h1 class="text-lg sm:text-xl font-bold">AJW</h1>
            <p class="text-xs sm:text-sm text-amber-400">EXECUTIVE</p>
          </div>
        </div>

        <nav class="hidden md:flex items-center space-x-8">
          <a href="#home" class="text-white hover:text-amber-400 transition-colors">{{ t('nav.home') }}</a>
          <a href="#services" class="text-white hover:text-amber-400 transition-colors">{{ t('nav.services') }}</a>
          <a href="#fleet" class="text-white hover:text-amber-400 transition-colors">{{ t('nav.fleet') }}</a>
          <a href="#about" class="text-white hover:text-amber-400 transition-colors">{{ t('nav.about') }}</a>
          <a href="#contact"
            class="bg-amber-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors">
            {{ t('nav.contact') }}
          </a>
          <select v-model="locale" class="bg-black text-white border border-amber-500 rounded px-2 py-1 text-sm">
            <option value="pt">PT</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </nav>

        <div class="flex items-center space-x-4">
          <select v-model="locale" class="md:hidden bg-black text-white border border-amber-500 rounded px-2 py-1 text-sm">
            <option value="pt">PT</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
          <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white">
            <component :is="isMenuOpen ? X : Menu" :size="24" />
          </button>
        </div>
      </div>

      <nav v-if="isMenuOpen" class="md:hidden mt-4 pb-4 border-t border-amber-500/20">
        <div class="flex flex-col space-y-4 pt-4">
          <a href="#home" class="text-white hover:text-amber-400 transition-colors"
            @click="isMenuOpen = false">{{ t('nav.home') }}</a>
          <a href="#services" class="text-white hover:text-amber-400 transition-colors"
            @click="isMenuOpen = false">{{ t('nav.services') }}</a>
          <a href="#fleet" class="text-white hover:text-amber-400 transition-colors"
            @click="isMenuOpen = false">{{ t('nav.fleet') }}</a>
          <a href="#about" class="text-white hover:text-amber-400 transition-colors"
            @click="isMenuOpen = false">{{ t('nav.about') }}</a>
          <a href="#contact"
            class="bg-amber-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors text-center"
            @click="isMenuOpen = false">
            {{ t('nav.contact') }}
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const isMenuOpen = ref(false)
</script>

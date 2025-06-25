<template>
  <header class="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-amber-500/20">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <img src="../assets/MainLogo-sem-fundo.png" alt="AJW Executive" class="h-12 w-12" />
          <div class="text-white">
            <h1 class="text-xl font-bold">AJW</h1>
            <p class="text-sm text-amber-400">EXECUTIVE</p>
          </div>
        </div>

        <nav class="hidden md:flex items-center space-x-8">
          <a href="#home" class="text-white hover:text-amber-400 transition-colors">Início</a>
          <a href="#services" class="text-white hover:text-amber-400 transition-colors">Serviços</a>
          <a href="#fleet" class="text-white hover:text-amber-400 transition-colors">Frota</a>
          <a href="#about" class="text-white hover:text-amber-400 transition-colors">Sobre</a>
          <a href="#contact"
            class="bg-amber-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors">
            Contato
          </a>
        </nav>

        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white">
          <component :is="isMenuOpen ? X : Menu" :size="24" />
        </button>
      </div>

      <nav v-if="isMenuOpen" class="md:hidden mt-4 pb-4 border-t border-amber-500/20">
        <div class="flex flex-col space-y-4 pt-4">
          <a href="#home" class="text-white hover:text-amber-400 transition-colors"
            @click="isMenuOpen = false">Início</a>
          <a href="#services" class="text-white hover:text-amber-400 transition-colors"
            @click="isMenuOpen = false">Serviços</a>
          <a href="#fleet" class="text-white hover:text-amber-400 transition-colors"
            @click="isMenuOpen = false">Frota</a>
          <a href="#about" class="text-white hover:text-amber-400 transition-colors"
            @click="isMenuOpen = false">Sobre</a>
          <a href="#contact"
            class="bg-amber-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors text-center"
            @click="isMenuOpen = false">
            Contato
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)
</script>

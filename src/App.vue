<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderSection from '@/components/HeaderSection.vue'
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton.vue'
</script>

<template>
  <HeaderSection />
  <RouterView />
  <WhatsAppFloatingButton />
</template>

<style scoped></style>

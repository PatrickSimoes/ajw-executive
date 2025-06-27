<template>
  <section id="services" class="py-10 scroll-mt-12 bg-gray-900 min-h-screen flex flex-col justify-between">
    <div class="container mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          {{ t('servicesSection.title') }}
        </h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          {{ t('servicesSection.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        <div v-for="(service, idx) in services" :key="idx"
          class="bg-black/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 hover:border-amber-500/50 transition-all transform hover:scale-105 flex flex-col">
          <div class="flex items-center mb-4">
            <component :is="service.icon" class="w-8 h-8 text-amber-400 flex-shrink-0" />
            <h3 class="text-2xl font-bold text-white ml-3">
              {{ t(service.title) }}
            </h3>
          </div>

          <p class="text-gray-300 mb-6 leading-relaxed">
            {{ t(service.description) }}
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
            <div v-for="(feat, i) in service.features" :key="i" class="flex items-center">
              <div class="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
              <span class="text-gray-300 text-sm">{{ t(feat) }}</span>
            </div>
          </div>

          <!-- CTA dentro do card -->
          <a href="#contact"
            class="mt-6 inline-block bg-amber-500 text-black text-center w-full py-3 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all transform hover:scale-105">
            {{ t('servicesSection.cta') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Car, MapPin, Music, Globe } from 'lucide-vue-next'
import type { Service } from './interfaces/services.interface'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const services: Service[] = [
  {
    icon: Car,
    title: 'servicesSection.items.transfer.title',
    description: 'servicesSection.items.transfer.description',
    features: [
      'servicesSection.items.transfer.features.0',
      'servicesSection.items.transfer.features.1',
      'servicesSection.items.transfer.features.2',
      'servicesSection.items.transfer.features.3'
    ],
  },
  {
    icon: MapPin,
    title: 'servicesSection.items.cityTour.title',
    description: 'servicesSection.items.cityTour.description',
    features: [
      'servicesSection.items.cityTour.features.0',
      'servicesSection.items.cityTour.features.1',
      'servicesSection.items.cityTour.features.2'
    ],
  },
  {
    icon: Music,
    title: 'servicesSection.items.shows.title',
    description: 'servicesSection.items.shows.description',
    features: [
      'servicesSection.items.shows.features.0',
      'servicesSection.items.shows.features.1',
      'servicesSection.items.shows.features.2',
      'servicesSection.items.shows.features.3'
    ],
  },
  {
    icon: Globe,
    title: 'servicesSection.items.tours.title',
    description: 'servicesSection.items.tours.description',
    features: [
      'servicesSection.items.tours.features.0',
      'servicesSection.items.tours.features.1',
      'servicesSection.items.tours.features.2'
    ],
  },
]
</script>

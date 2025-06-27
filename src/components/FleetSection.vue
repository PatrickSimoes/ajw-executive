<template>
  <section id="fleet" class="py-20 bg-black">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          {{ t('fleetSection.title') }}
        </h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          {{ t('fleetSection.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(vehicle, index) in vehicles" :key="index"
          class="bg-gray-900/80 backdrop-blur-sm border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all transform hover:scale-105 flex flex-col">
          <div class="relative overflow-hidden">
            <img :src="vehicle.image" :alt="vehicle.name"
              class="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          <div class="p-6 flex-1 flex flex-col">
            <h3 class="font-semibold mb-4 text-xl text-amber-400">{{ vehicle.name }}</h3>

            <div class="space-y-2 mb-6 flex-1">
              <div v-for="(feature, idx) in vehicle.features" :key="idx" class="flex items-center">
                <div class="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3"></div>
                <span class="text-gray-300 text-sm">{{ t(feature) }}</span>
              </div>
            </div>

            <a :href="whatsappLink(vehicle.name)" target="_blank" rel="noopener"
              class="mt-auto inline-block bg-amber-500 text-black text-center w-full py-3 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all">
              {{ t('buttons.reserveVehicle') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import bydKing1 from '@/assets/fleet/byd-king/byd-king-1.jpeg'
import sentra from '@/assets/fleet/sentra/sentra-1.jpeg'
import tcross from '@/assets/fleet/t-cros/Tcross-1.jpeg'
import corolla from '@/assets/fleet/corolla-hybrido-altis/corolla-hybrido.jpeg'
import type { Vehicle } from './interfaces/fleet.interface'
import { generateWhatsAppLink } from '@/utils/whatsapp'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const vehicles: Vehicle[] = [
  {
    name: 'BYD King',
    image: bydKing1,
    features: [
      'fleetSection.vehicles.bydKing.features.0',
      'fleetSection.vehicles.bydKing.features.1',
      'fleetSection.vehicles.bydKing.features.2',
      'fleetSection.vehicles.bydKing.features.3'
    ]
  },
  {
    name: 'Nissan Sentra',
    image: sentra,
    features: [
      'fleetSection.vehicles.sentra.features.0',
      'fleetSection.vehicles.sentra.features.1',
      'fleetSection.vehicles.sentra.features.2',
      'fleetSection.vehicles.sentra.features.3'
    ]
  },
  {
    name: 'Volkswagen T-Cross',
    image: tcross,
    features: [
      'fleetSection.vehicles.tcross.features.0',
      'fleetSection.vehicles.tcross.features.1',
      'fleetSection.vehicles.tcross.features.2',
      'fleetSection.vehicles.tcross.features.3'
    ]
  },
  {
    name: 'Toyota Corolla Hybrid',
    image: corolla,
    features: [
      'fleetSection.vehicles.corolla.features.0',
      'fleetSection.vehicles.corolla.features.1',
      'fleetSection.vehicles.corolla.features.2',
      'fleetSection.vehicles.corolla.features.3'
    ]
  }
]

function whatsappLink(vehicleName: string): string {
  return generateWhatsAppLink('whatsapp.reserve', { vehicle: vehicleName })
}
</script>

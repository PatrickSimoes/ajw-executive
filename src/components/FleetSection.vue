<template>
  <section id="fleet" class="py-20 bg-black">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Nossa <span class="text-amber-400">Frota</span>
        </h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Veículos modernos e bem conservados para garantir sua comodidade e segurança
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
                <span class="text-gray-300 text-sm">{{ feature }}</span>
              </div>
            </div>

            <a :href="whatsappLink(vehicle.name)" target="_blank" rel="noopener"
              class="mt-auto inline-block bg-amber-500 text-black text-center w-full py-3 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all">
              Reservar Veículo
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

const vehicles: Vehicle[] = [
  {
    name: 'BYD King',
    image: bydKing1,
    features: [
      'Interior silencioso que promove relaxamento',
      'Espaço amplo com conforto garantido',
      'Acabamento premium que envolve todos a bordo',
      'Conectividade avançada para manter você produtivo'
    ]
  },
  {
    name: 'Nissan Sentra',
    image: sentra,
    features: [
      'Assentos ergonômicos que evitam cansaço',
      'Climatização dual-zone para conforto individual',
      'Sistema de som envolvente para seu entretenimento',
      'Ambiente sofisticado que inspira foco e bem-estar'
    ]
  },
  {
    name: 'Volkswagen T-Cross',
    image: tcross,
    features: [
      'Cabine acolhedora que garante conforto urbano',
      'Iluminação ambiente personalizável para qualquer clima',
      'Espaço de bagagem otimizado para seus pertences',
      'Conectividade intuitiva para sua comodidade'
    ]
  },
  {
    name: 'Toyota Corolla Hybrid',
    image: corolla,
    features: [
      'Viagens suaves e silenciosas para total relaxamento',
      'Menos paradas, mais tempo de conforto contínuo',
      'Cabine climatizada para temperatura perfeita',
      'Acabamento refinado que impressiona seus convidados'
    ]
  }
]

const whatsappNumber = '554191922590'
function whatsappLink(vehicleName: string): string {
  const text = encodeURIComponent(`Olá, gostaria de reservar o ${vehicleName}.`)
  return `https://wa.me/${whatsappNumber}?text=${text}`
}
</script>

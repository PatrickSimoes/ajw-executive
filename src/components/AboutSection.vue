<template>
  <section id="about" class="py-20 bg-gray-900">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6" v-html="t('aboutSection.title', { company: '<span class=\'text-amber-400\'>AJW Executive</span>' })"></h2>
          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            {{ t('aboutSection.description') }}
          </p>
          <div class="grid sm:grid-cols-2 gap-6">
            <div v-for="(stat, i) in stats" :key="i" class="bg-black/30 p-6 rounded-xl border border-amber-500/20">
              <h3 class="text-2xl font-bold text-amber-400 mb-2">{{ stat.value }}</h3>
              <p class="text-gray-300">{{ t(stat.label) }}</p>
            </div>
          </div>
        </div>
        <div class="relative">
          <img src="../assets/motorista-elegante.jpg" :alt="t('aboutSection.imageAlt', { company: 'AJW Executive' })"
            class="rounded-2xl shadow-2xl" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
        </div>
      </div>

      <div class="mt-16">
        <h3 class="text-3xl font-bold text-white text-center mb-12">
          {{ t('aboutSection.valuesTitle') }}
        </h3>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(diff, i) in differentials" :key="i" class="text-center">
            <div class="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-black font-bold text-3xl">{{ diff.icon }}</span>
            </div>
            <h4 class="text-xl font-bold text-white mb-3">{{ t(diff.title) }}</h4>
            <p class="text-gray-300 leading-relaxed text-left px-4">{{ t(diff.desc) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Stat {
  value: string
  label: string
}
const stats: Stat[] = [
  { value: '100%', label: 'aboutSection.stats.punctuality' },
  { value: '24/7', label: 'aboutSection.stats.availability' },
  { value: '5★', label: 'aboutSection.stats.rating' },
  { value: '+20.000', label: 'aboutSection.stats.trips' }
]

interface Differential {
  icon: string
  title: string
  desc: string
}


const differentials: Differential[] = [
  {
    icon: '👁️',
    title: 'aboutSection.differentials.vision.title',
    desc: 'aboutSection.differentials.vision.desc'
  },
  {
    icon: '🎯',
    title: 'aboutSection.differentials.mission.title',
    desc: 'aboutSection.differentials.mission.desc'
  },
  {
    icon: '💎',
    title: 'aboutSection.differentials.values.title',
    desc: 'aboutSection.differentials.values.desc'
  }
]
</script>

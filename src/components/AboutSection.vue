<template>
  <section id="about" class="py-20 bg-gray-900">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Por que escolher a <span class="text-amber-400">AJW Executive?</span>
          </h2>
          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            {{ description }}
          </p>
          <div class="grid sm:grid-cols-2 gap-6">
            <div v-for="(stat, i) in stats" :key="i" class="bg-black/30 p-6 rounded-xl border border-amber-500/20">
              <h3 class="text-2xl font-bold text-amber-400 mb-2">{{ stat.value }}</h3>
              <p class="text-gray-300">{{ stat.label }}</p>
            </div>
          </div>
        </div>
        <div class="relative">
          <img src="../assets/motorista-elegante.jpg" alt="Profissionalismo AJW Executive"
            class="rounded-2xl shadow-2xl" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
        </div>
      </div>

      <div class="mt-16">
        <h3 class="text-3xl font-bold text-white text-center mb-12">
          Nossos <span class="text-amber-400">Valores</span>
        </h3>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(diff, i) in differentials" :key="i" class="text-center">
            <div class="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-black font-bold text-3xl">{{ diff.icon }}</span>
            </div>
            <h4 class="text-xl font-bold text-white mb-3">{{ diff.title }}</h4>
            <p class="text-gray-300 leading-relaxed text-left px-4">{{ diff.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Stat {
  value: string
  label: string
}
const stats: Stat[] = [
  { value: '100%', label: 'Pontualidade garantida' },
  { value: '24/7', label: 'Disponibilidade total' },
  { value: '5★', label: 'Avaliação dos clientes' },
  { value: '+20.000', label: 'Viagens realizadas' }
]

interface Differential {
  icon: string
  title: string
  desc: string
}

const description = 'A AJW Executive é uma empresa especializada em transporte executivo de alto padrão, oferecendo serviços personalizados com foco em pontualidade, conforto e segurança. Atuamos com veículos premium e motoristas altamente treinados, garantindo uma experiência exclusiva tanto para compromissos corporativos quanto para deslocamentos pessoais ou transfers aeroportuários.';

const differentials: Differential[] = [
  {
    icon: '👁️',
    title: 'Visão',
    desc: 'Ser reconhecida como referência em transporte executivo no Brasil, destacando-se pela excelência no atendimento, inovação contínua e compromisso com a experiência do cliente.'
  },
  {
    icon: '🎯',
    title: 'Missão',
    desc: 'Oferecer soluções de transporte executivo com excelência, segurança e sofisticação, proporcionando aos nossos clientes uma experiência confortável, pontual e personalizada.'
  },
  {
    icon: '💎',
    title: 'Valores',
    desc: 'Excelência no atendimento, pontualidade, segurança, discrição, conforto e inovação contínua em cada detalhe do nosso serviço.'
  }
]
</script>

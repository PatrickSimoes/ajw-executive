<template>
  <section id="reviews" class="py-20 bg-black">
    <div class="container mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          {{ t('reviewsSection.title') }}
        </h2>
        <p class="text-xl text-gray-300">
          {{ t('reviewsSection.subtitle') }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="review in displayedReviews"
          :key="review.name"
          class="bg-gray-900/80 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 flex flex-col h-full"
        >
          <header class="flex items-center mb-6">
            <div
              class="w-12 h-12 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center text-lg"
            >
              {{ getInitials(review.name) }}
            </div>
            <div class="ml-4">
              <h3 class="text-white font-semibold">{{ review.name }}</h3>
              <p class="text-sm text-gray-400">{{ review.meta }}</p>
            </div>
          </header>

          <p class="text-gray-300 leading-relaxed flex-1">
            “{{ review.comment }}”
          </p>

          <footer class="mt-6 flex items-center text-amber-400">
            <span v-for="n in 5" :key="n" class="mr-1">★</span>
            <span class="text-sm text-gray-400 ml-2">Google Reviews</span>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Review {
  name: string
  meta: string
  comment: string
}

const { t, tm } = useI18n()

const localizedReviews = computed<Review[]>(() => {
  const reviews = tm('reviewsSection.reviews') as Review[] | undefined
  if (!Array.isArray(reviews)) {
    return []
  }

  return reviews.filter((review) => Boolean(review.comment?.trim().length))
})

const displayedReviews = computed(() => {
  const available = localizedReviews.value
  const shuffled = [...available]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, 3)
})

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .slice(0, 2)
    .join('')
}
</script>

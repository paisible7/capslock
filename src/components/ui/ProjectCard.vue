
<template>
  <div
    class="relative rounded-xl overflow-hidden group opacity-0 animate-fade-in"
    :class="`delay-${delay * 100}`"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Image -->
    <div class="aspect-video overflow-hidden">
      <img
        :src="imageUrl"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <!-- Overlay -->
    <div
      :class="`absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent dark:from-gray-950/90 dark:via-gray-950/60 p-6 flex flex-col justify-end transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-90'
      }`"
    >
      <span class="text-capslock-navy dark:text-blue-300 text-sm font-medium mb-2">{{ category }}</span>
      <h3 class="text-white text-xl font-bold mb-2">{{ title }}</h3>
      <p :class="`text-white/80 dark:text-gray-300 text-sm mb-4 transition-all duration-300 ${
        isHovered ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0'
      } overflow-hidden`">
        {{ description }}
      </p>

      <!-- Technologies -->
      <div v-if="technologies && isHovered" class="flex flex-wrap gap-2 mb-4 transition-all duration-300">
        <span
          v-for="tech in technologies"
          :key="tech"
          class="px-2 py-1 bg-white/20 text-white text-xs rounded-full"
        >
          {{ tech }}
        </span>
      </div>

      <a
        :href="link"
        class="inline-flex items-center text-white hover:text-capslock-navy dark:hover:text-blue-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="mr-2">Voir le projet</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    technologies: {
      type: Array,
      default: () => []
    },
    delay: {
      type: Number,
      required: true
    }
  },
  setup() {
    const isHovered = ref(false)

    return {
      isHovered
    }
  }
}
</script>


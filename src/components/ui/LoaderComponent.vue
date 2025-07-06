
<template>
  <div v-if="isVisible" class="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex items-center justify-center transition-opacity duration-300">
    <div class="text-center space-y-8">
      <div class="flex items-center justify-center space-x-3">
        <div class="animate-bounce">
          <AnimatedLogo />
        </div>
        <h1 class="text-3xl font-bold text-capslock-navy dark:text-white animate-pulse">
          capslock
        </h1>
      </div>

      <div class="w-64 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
            class="h-full bg-gradient-to-r from-capslock-navy to-blue-600 rounded-full transition-all duration-300 ease-out"
            :style="{ width: `${Math.min(progress, 100)}%` }"
        />
      </div>

      <p class="text-gray-600 dark:text-gray-300 animate-pulse">
        Chargement de votre expérience digitale...
      </p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import AnimatedLogo from './AnimatedLogo.vue'

export default {
  name: 'LoaderComponent',
  components: {
    AnimatedLogo
  },
  emits: ['complete'],
  setup(props, { emit }) {
    const progress = ref(0)
    const isVisible = ref(true)

    onMounted(() => {
      const interval = setInterval(() => {
        progress.value += Math.random() * 30

        if (progress.value >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            isVisible.value = false
            setTimeout(() => emit('complete'), 300)
          }, 500)
        }
      }, 100)
    })

    return {
      progress,
      isVisible
    }
  }
}
</script>

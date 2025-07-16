
<template>
  <button
    @click="themeStore.toggleTheme"
    class="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
    aria-label="Basculer le thème"
  >
    <Sun v-if="themeStore.isDarkMode" class="w-5 h-5 text-yellow-500" />
    <Moon v-else class="w-5 h-5 text-gray-600" />
  </button>
</template>

<script>
import { Sun, Moon } from 'lucide-vue-next'
import { useThemeStore } from '@/stores/theme.js'

export default {
  name: 'ThemeToggle',
  components: {
    Sun,
    Moon
  },
  setup() {
    const themeStore = useThemeStore()

    return {
      themeStore
    }
  }
}
</script>

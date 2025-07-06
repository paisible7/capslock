
<template>
  <div id="app" :class="{ dark: isDarkMode }">
    <!-- Loader -->
    <LoaderComponent v-if="isLoading" @complete="handleLoadComplete" />

    <!-- App Content -->
    <div v-else>
      <ScrollIndicator />
      <FloatingElements />
      <router-view />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useThemeStore } from './stores/theme'
import LoaderComponent from './components/ui/LoaderComponent.vue'
import ScrollIndicator from './components/ui/ScrollIndicator.vue'
import FloatingElements from './components/ui/FloatingElements.vue'

export default {
  name: 'App',
  components: {
    LoaderComponent,
    ScrollIndicator,
    FloatingElements
  },
  setup() {
    const themeStore = useThemeStore()
    const isLoading = ref(true)

    const handleLoadComplete = () => {
      isLoading.value = false
    }

    onMounted(() => {
      themeStore.initTheme()
    })

    return {
      isDarkMode: themeStore.isDarkMode,
      isLoading,
      handleLoadComplete
    }
  }
}
</script>

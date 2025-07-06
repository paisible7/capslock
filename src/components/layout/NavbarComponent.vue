
<template>
  <nav class="fixed top-0 left-0 right-0 z-50 glass-card">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <AnimatedLogo />
          <span class="text-xl font-bold text-capslock-navy dark:text-white">capslock</span>
        </div>

        <!-- Menu Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#home" class="dark-text hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">Accueil</a>
          <a href="#services" class="dark-text hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">Services</a>
          <a href="#projects" class="dark-text hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">Projets</a>
          <a href="#contact" class="dark-text hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">Contact</a>
          <ThemeToggle />
        </div>

        <!-- Menu Mobile -->
        <div class="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6 dark-text" />
            <X v-else class="w-6 h-6 dark-text" />
          </button>
        </div>
      </div>

      <!-- Menu Mobile Déroulant -->
      <div v-if="isMobileMenuOpen" class="md:hidden py-4 border-t border-gray-200 dark:border-gray-600">
        <div class="flex flex-col space-y-4">
          <a href="#home" @click="isMobileMenuOpen = false" class="dark-text hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">Accueil</a>
          <a href="#services" @click="isMobileMenuOpen = false" class="dark-text hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">Services</a>
          <a href="#projects" @click="isMobileMenuOpen = false" class="dark-text hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">Projets</a>
          <a href="#contact" @click="isMobileMenuOpen = false" class="dark-text hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import AnimatedLogo from '../ui/AnimatedLogo.vue'
import ThemeToggle from '../ui/ThemeToggle.vue'

export default {
  name: 'NavbarComponent',
  components: {
    Menu,
    X,
    AnimatedLogo,
    ThemeToggle
  },
  setup() {
    const isMobileMenuOpen = ref(false)

    return {
      isMobileMenuOpen
    }
  }
}
</script>

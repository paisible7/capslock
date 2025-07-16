
<template>
  <nav
    :class="`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-3'
        : 'bg-transparent py-5'
    }`"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 hover-scale group">
          <div class="group-hover:rotate-12 transition-transform duration-500">
            <AnimatedLogo />
          </div>
          <span class="font-bold text-xl text-capslock-navy dark:text-blue-400 transition-colors duration-300">
            capslock
          </span>
        </router-link>

        <!-- Menu Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="(link, index) in navLinks"
            :key="link.name"
            :href="link.href.startsWith('#') ? link.href : undefined"
            :class="`font-medium text-gray-700 dark:text-gray-300 hover:text-capslock-navy dark:hover:text-blue-400 transition-all duration-300 relative group opacity-0 animate-fade-in`"
            :style="{ animationDelay: `${index * 100}ms` }"
            @click="link.href.startsWith('#') ? scrollToSection(link.href) : null"
          >
            <router-link v-if="!link.href.startsWith('#')" :to="link.href" class="block">
              {{ link.name }}
            </router-link>
            <span v-else>{{ link.name }}</span>
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-capslock-navy dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <ThemeToggle />
          <a
            href="/contact"
            class="px-6 py-3 bg-capslock-navy dark:bg-blue-600 text-white rounded-full hover:bg-opacity-90 transition-all duration-300 hover-lift shadow-md hover:shadow-lg opacity-0 animate-fade-in animation-delay-500"
          >
            Commencer un projet
          </a>
        </div>

        <!-- Menu Mobile -->
        <div class="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            class="text-gray-700 dark:text-gray-300 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300"
            @click="toggleMenu"
            aria-label="Toggle menu"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Menu Mobile Déroulant -->
      <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4 animate-slide-up">
        <div class="flex flex-col space-y-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl p-6 shadow-xl">
          <a
            v-for="(link, index) in navLinks"
            :key="link.name"
            :href="link.href.startsWith('#') ? link.href : undefined"
            :class="`font-medium text-gray-700 dark:text-gray-300 hover:text-capslock-navy dark:hover:text-blue-400 py-2 transition-all duration-300 opacity-0 animate-fade-in`"
            :style="{ animationDelay: `${index * 100}ms` }"
            @click="handleMobileClick(link.href)"
          >
            <router-link v-if="!link.href.startsWith('#')" :to="link.href" class="block">
              {{ link.name }}
            </router-link>
            <span v-else>{{ link.name }}</span>
          </a>
          <a
            href="#contact"
            class="px-6 py-3 bg-capslock-navy dark:bg-blue-600 text-white rounded-full hover:bg-opacity-90 transition-all duration-300 text-center opacity-0 animate-fade-in animation-delay-400"
            @click="handleMobileClick('#contact')"
          >
            Commencer un projet
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import AnimatedLogo from '../ui/AnimatedLogo.vue'
import ThemeToggle from '../ui/ThemeToggle.vue'

export default {
  name: 'NavbarComponent',
  components: {
    AnimatedLogo,
    ThemeToggle
  },
  setup() {
    const isScrolled = ref(false)
    const isMobileMenuOpen = ref(false)

    const navLinks = [
      { name: 'Accueil', href: '/' },
      { name: 'Services', href: '/services' },
      //{ name: 'Projets', href: '#projects' },
      { name: 'À propos', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ]

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 10
    }

    const toggleMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const scrollToSection = (href) => {
      if (href.startsWith('#')) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const handleMobileClick = (href) => {
      isMobileMenuOpen.value = false
      if (href.startsWith('#')) {
        scrollToSection(href)
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isScrolled,
      isMobileMenuOpen,
      navLinks,
      toggleMenu,
      scrollToSection,
      handleMobileClick
    }
  }
}
</script>

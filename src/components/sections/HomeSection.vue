
<template>
  <section id="home" class="relative min-h-screen flex items-center pt-20">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 z-0"></div>

    <!-- Decorative elements -->
    <div class="absolute top-20 right-10 w-64 h-64 rounded-full bg-capslock-navy/10 dark:bg-blue-400/20 blur-3xl z-0"></div>
    <div class="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-blue-700/10 dark:bg-blue-500/20 blur-3xl z-0"></div>

    <div class="container mx-auto px-4 z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8 max-w-xl">
          <div class="space-y-2">
            <p class="text-capslock-navy dark:text-blue-300 font-medium animate-fade-in">
              Solutions Digitales Innovantes
            </p>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold dark-text leading-tight animate-slide-up">
              Transformez vos <span class="text-capslock-navy dark:text-blue-300">idées</span> en réalité digitale
            </h1>
          </div>

          <p class="dark-text-muted text-lg animate-fade-in animation-delay-100">
            Capslock est une équipe de développeurs, designers et managers passionnés qui conçoit et développe des applications web et mobiles de qualité exceptionnelle.
          </p>

          <div class="flex flex-wrap gap-4 animate-fade-in animation-delay-200">
            <a
              href="#services"
              @click="scrollToSection('#services')"
              class="px-6 py-3 bg-capslock-navy dark:bg-blue-600 text-white rounded-lg hover:bg-opacity-90 dark:hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-capslock-navy/20 dark:hover:shadow-blue-500/20"
            >
              Découvrir nos services
            </a>
            <a
              href="#contact"
              @click="scrollToSection('#contact')"
              class="px-6 py-3 bg-white dark:bg-gray-800 text-capslock-navy dark:text-blue-300 border border-capslock-navy dark:border-blue-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              Contactez-nous
            </a>
          </div>

          <div class="pt-8 animate-fade-in animation-delay-300 hidden">
            <p class="dark-text-muted text-sm">Nos clients de confiance</p>
            <div class="flex flex-wrap items-center gap-8 mt-4">
              <div class="dark-text-muted font-medium">COMPANY A</div>
              <div class="dark-text-muted font-medium">COMPANY B</div>
              <div class="dark-text-muted font-medium">COMPANY C</div>
            </div>
          </div>
        </div>

        <div class="relative animate-scale-in">
          <div class="absolute inset-0 bg-capslock-navy/10 dark:bg-blue-400/20 rounded-2xl transform rotate-3"></div>
          <div class="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
            <img src="@/assets/images/IMG-20250329-WA0008.jpg" alt="LogoCapsLock" class="w-full h-auto object-cover aspect-video">
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" @click="scrollToSection('#services')" aria-label="Scroll down">
          <svg class="text-capslock-navy dark:text-blue-400 w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="8,12 12,16 16,12"/>
            <line x1="12" y1="8" x2="12" y2="16"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeSection',
  setup() {
    const scrollToSection = (href) => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    return {
      scrollToSection
    }
  }
}
</script>

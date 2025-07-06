
<template>
  <footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <div class="flex items-center">
            <span class="text-capslock-navy dark:text-blue-300 text-2xl font-bold">capslock</span>
          </div>
          <p class="dark-text-muted max-w-xs">
            Nous créons des applications web et mobiles exceptionnelles pour propulser votre entreprise vers l'avenir.
          </p>
          <div class="flex space-x-4 pt-2">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              class="text-gray-500 dark:text-gray-400 hover:text-capslock-navy dark:hover:text-blue-300 transition-colors"
              :aria-label="social.name"
            >
              <svg v-if="social.icon === 'github'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <svg v-else-if="social.icon === 'twitter'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <svg v-else-if="social.icon === 'linkedin'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 class="font-semibold mb-4 dark-text">Services</h3>
          <ul class="space-y-2">
            <li><a href="#services" @click="scrollToSection('#services')" class="dark-text-muted hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">Développement Web</a></li>
            <li><a href="#services" @click="scrollToSection('#services')" class="dark-text-muted hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">Applications Mobiles</a></li>
            <li><a href="#services" @click="scrollToSection('#services')" class="dark-text-muted hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">Maintenance</a></li>
            <li><a href="#services" @click="scrollToSection('#services')" class="dark-text-muted hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">UI/UX Design</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4 dark-text">Entreprise</h3>
          <ul class="space-y-2">
            <li><router-link to="/about" class="dark-text-muted hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">À propos</router-link></li>
            <li><router-link to="/projects" class="dark-text-muted hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">Projets</router-link></li>
            <li><a href="#" class="dark-text-muted hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">Blog</a></li>
            <li><a href="#" class="dark-text-muted hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">Carrières</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4 dark-text">Contact</h3>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-capslock-navy dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:contact@capslock.site" class="dark-text-muted hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">contact@capslock.site</a>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-capslock-navy dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <a href="tel:+243992142932" class="dark-text-muted hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">+243 992 142 932</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-200 dark:border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="dark-text-muted text-sm">
          &copy; {{ currentYear }} capslock. Tous droits réservés.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="dark-text-muted text-sm hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">Politique de confidentialité</a>
          <a href="#" class="dark-text-muted text-sm hover:text-capslock-navy dark:hover:text-blue-300 transition-colors">Conditions d'utilisation</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  setup() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
      {
        name: 'GitHub',
        href: 'https://github.com',
        icon: 'github'
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com',
        icon: 'twitter'
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: 'linkedin'
      }
    ]

    const scrollToSection = (href) => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    return {
      currentYear,
      socialLinks,
      scrollToSection
    }
  }
}
</script>



<template>
  <div class="min-h-screen">
    <NavbarComponent />
    <main class="pt-20">
      <section class="section-spacing bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
              <p class="text-capslock-navy dark:text-blue-300 font-medium mb-3 opacity-0 animate-fade-in">À propos de nous</p>
              <h1 class="text-4xl md:text-5xl font-bold mb-6 dark-text opacity-0 animate-fade-in animation-delay-100">
                Nous sommes <span class="text-capslock-navy dark:text-blue-300">Capslock</span>
              </h1>
              <p class="text-xl dark-text-muted opacity-0 animate-fade-in animation-delay-200">
                Une équipe de développeurs passionnés dédiée à créer des solutions digitales exceptionnelles
              </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div class="space-y-6 opacity-0 animate-fade-in animation-delay-300">
                <h2 class="text-2xl font-bold dark-text">Notre Mission</h2>
                <p class="dark-text-muted">
                  Chez Capslock, nous croyons que chaque idée mérite d'être transformée en une réalité digitale exceptionnelle.
                  Notre mission est d'accompagner nos clients dans leur transformation numérique en créant des applications
                  web et mobiles qui dépassent leurs attentes.
                </p>
                <p class="dark-text-muted">
                  Nous combinons créativité, expertise technique et approche centrée utilisateur pour livrer des solutions
                  qui non seulement fonctionnent parfaitement, mais qui inspirent et engagent.
                </p>
              </div>
              <div class="opacity-0 animate-fade-in animation-delay-400">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Notre équipe"
                  class="rounded-xl shadow-xl w-full"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div class="text-center bg-gray-50 dark:bg-gray-800 p-8 rounded-xl opacity-0 animate-fade-in animation-delay-500">
                <div class="w-16 h-16 bg-capslock-navy/10 dark:bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-capslock-navy dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2 dark-text">Performance</h3>
                <p class="dark-text-muted">Applications rapides et optimisées pour une expérience utilisateur fluide</p>
              </div>

              <div class="text-center bg-gray-50 dark:bg-gray-800 p-8 rounded-xl opacity-0 animate-fade-in animation-delay-600">
                <div class="w-16 h-16 bg-capslock-navy/10 dark:bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-capslock-navy dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2 dark-text">Qualité</h3>
                <p class="dark-text-muted">Code propre, testé et maintenu selon les meilleures pratiques</p>
              </div>

              <div class="text-center bg-gray-50 dark:bg-gray-800 p-8 rounded-xl opacity-0 animate-fade-in animation-delay-700">
                <div class="w-16 h-16 bg-capslock-navy/10 dark:bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-capslock-navy dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2 dark-text">Collaboration</h3>
                <p class="dark-text-muted">Partenariat étroit avec nos clients pour des résultats exceptionnels</p>
              </div>
            </div>

            <div class="text-center opacity-0 animate-fade-in animation-delay-800">
              <h2 class="text-2xl font-bold mb-6 dark-text">Prêt à commencer votre projet ?</h2>
              <router-link
                to="/#contact"
                class="px-8 py-4 bg-capslock-navy dark:bg-blue-600 text-white rounded-lg hover:bg-opacity-90 dark:hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg inline-block"
              >
                Contactez-nous
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from '../components/layout/NavbarComponent.vue'
import FooterComponent from '../components/layout/FooterComponent.vue'

export default {
  name: 'AboutView',
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>

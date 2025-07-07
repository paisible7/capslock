<template>
  <section id="services" class="section-spacing bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="text-capslock-navy dark:text-blue-300 font-medium mb-3 opacity-0 animate-fade-in">Nos Services</p>
        <h2 class="text-3xl md:text-4xl font-bold mb-6 dark-text opacity-0 animate-fade-in delay-100">
          Solutions digitales complètes pour votre entreprise
        </h2>
        <p class="dark-text-muted opacity-0 animate-fade-in delay-200">
          Nous proposons une gamme complète de services de développement pour répondre à tous vos besoins digitaux.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
          :delay="service.delay"
        />
      </div>

      <div class="mt-16 text-center opacity-0 animate-fade-in delay-500">
        <a
          href="#contact"
          @click="scrollToSection('#contact')"
          class="px-6 py-3 bg-capslock-navy dark:bg-blue-600 text-white rounded-lg hover:bg-opacity-90 dark:hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg inline-block"
        >
          Discuter de votre projet
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceCard from '../ui/ServiceCard.vue'

export default {
  name: 'ServicesSection',
  components: {
    ServiceCard
  },
  setup() {
    const services = [
      {
        icon: 'code',
        title: "Développement Web",
        description: "Nous créons des sites web et des applications web sur mesure, optimisés pour tous les appareils et navigateurs.",
        delay: 1
      },
      {
        icon: 'smartphone',
        title: "Applications Mobiles",
        description: "Des applications mobiles natives et cross-platform performantes pour iOS et Android avec une UX exceptionnelle.",
        delay: 2
      },
      {
        icon: 'wrench',
        title: "Maintenance & Support",
        description: "Services de maintenance continus pour assurer que vos applications restent à jour, sécurisées et performantes.",
        delay: 3
      },
      {
        icon: 'palette',
        title: "UI/UX Design",
        description: "Conception d'interfaces utilisateur intuitives et d'expériences utilisateur engageantes qui convertissent.",
        delay: 4
      }
    ]

    const scrollToSection = (href) => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    return {
      services,
      scrollToSection
    }
  }
}
</script>

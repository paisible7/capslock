<template>
  <div class="min-h-screen">
    <main class="pt-20">
      <section class="section-spacing bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <p
              class="text-capslock-navy dark:text-blue-300 font-medium mb-3 opacity-0 animate-fade-in"
            >
              Portfolio
            </p>
            <h1
              class="text-4xl md:text-5xl font-bold mb-6 dark-text opacity-0 animate-fade-in animation-delay-100"
            >
              Nos Projets Réalisés
            </h1>
            <p class="text-xl dark-text-muted opacity-0 animate-fade-in animation-delay-200">
              Découvrez notre portfolio de projets qui ont aidé nos clients à atteindre leurs
              objectifs
            </p>
          </div>

          <!-- Filtres -->
          <div
            class="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fade-in animation-delay-300"
          >
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              :class="`px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-capslock-navy dark:bg-capslock-navy text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`"
            >
              {{ category }}
            </button>
          </div>

          <!-- Grille de projets -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              v-for="(project, index) in filteredProjects"
              :key="project.id"
              :title="project.title"
              :category="project.category"
              :description="project.description"
              :imageUrl="project.imageUrl"
              :link="project.link"
              :technologies="project.technologies"
              :delay="index + 1"
            />
          </div>

          <!-- CTA -->
          <div class="mt-16 text-center opacity-0 animate-fade-in animation-delay-500">
            <h2 class="text-2xl font-bold mb-6 dark-text">Vous avez un projet en tête ?</h2>
            <router-link
              to="/#contact"
              class="px-8 py-4 bg-capslock-navy dark:bg-capslock-navy text-white rounded-lg hover:bg-opacity-90 dark:hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg inline-block"
            >
              Discutons de votre projet
            </router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import NavbarComponent from '../components/layout/NavbarComponent.vue'
import FooterComponent from '../components/layout/FooterComponent.vue'
import ProjectCard from '../components/ui/ProjectCard.vue'

export default {
  name: 'ProjectsView',
  components: {
    NavbarComponent,
    FooterComponent,
    ProjectCard,
  },
  setup() {
    const selectedCategory = ref('Tous')

    const categories = ['Tous', 'Web', 'Mobile', 'E-commerce', 'SaaS']

    const projects = [
      {
        id: 1,
        title: 'E-commerce Fashion',
        category: 'E-commerce',
        description:
          "Plateforme e-commerce complète avec système de paiement sécurisé, gestion des stocks et interface d'administration avancée.",
        imageUrl:
          'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
        link: '#',
        technologies: ['Vue.js', 'Node.js', 'Stripe', 'MongoDB'],
      },
      {
        id: 2,
        title: 'Application Fitness',
        category: 'Mobile',
        description:
          'App mobile permettant de suivre les activités sportives, créer des programmes personnalisés et suivre les progrès en temps réel.',
        imageUrl:
          'https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
        link: '#',
        technologies: ['React Native', 'Firebase', 'HealthKit'],
      },
      {
        id: 3,
        title: 'Dashboard Analytics',
        category: 'SaaS',
        description:
          'Interface de tableau de bord avec visualisations de données en temps réel, rapports automatisés et intégrations API multiples.',
        imageUrl:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
        link: '#',
        technologies: ['React', 'D3.js', 'PostgreSQL', 'Redis'],
      },
      {
        id: 4,
        title: 'Système de Réservation',
        category: 'Web',
        description:
          "Plateforme de réservation en ligne pour chaîne d'hôtels avec gestion des disponibilités et paiements intégrés.",
        imageUrl:
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80',
        link: '#',
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'PayPal'],
      },
      {
        id: 5,
        title: 'App de Livraison',
        category: 'Mobile',
        description:
          'Application mobile de livraison avec géolocalisation, suivi en temps réel et système de notation.',
        imageUrl:
          'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
        link: '#',
        technologies: ['Flutter', 'Google Maps', 'Firebase', 'Stripe'],
      },
      {
        id: 6,
        title: 'Plateforme E-learning',
        category: 'Web',
        description:
          "Plateforme d'apprentissage en ligne avec cours vidéo, quiz interactifs et suivi des progrès des étudiants.",
        imageUrl:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
        link: '#',
        technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
      },
    ]

    const filteredProjects = computed(() => {
      if (selectedCategory.value === 'Tous') {
        return projects
      }
      return projects.filter((project) => project.category === selectedCategory.value)
    })

    return {
      selectedCategory,
      categories,
      projects,
      filteredProjects,
    }
  },
}
</script>

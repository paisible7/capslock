<template>
  <section id="projects" class="section-spacing bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="text-capslock-navy dark:text-blue-300 font-medium mb-3 opacity-0 animate-fade-in">Nos Réalisations</p>
        <h2 class="text-3xl md:text-4xl font-bold mb-6 dark-text opacity-0 animate-fade-in delay-100">
          Projets qui font la différence
        </h2>
        <p class="dark-text-muted opacity-0 animate-fade-in delay-200">
          Découvrez notre portfolio de projets réussis qui ont aidé nos clients à atteindre leurs objectifs commerciaux.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :category="project.category"
          :description="project.description"
          :imageUrl="project.imageUrl"
          :link="project.link"
          :delay="project.delay"
        />
      </div>

      <div class="mt-16 text-center opacity-0 animate-fade-in delay-500">
        <router-link
          to="/projects"
          class="px-6 py-3 bg-white dark:bg-gray-800 text-capslock-navy dark:text-blue-300 border border-capslock-navy dark:border-blue-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 inline-block"
        >
          Voir plus de projets
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from '../ui/ProjectCard.vue'

export default {
  name: 'ProjectsSection',
  components: {
    ProjectCard
  },
  setup() {
    const projects = [
      {
        title: "E-commerce Responsive",
        category: "Développement Web",
        description: "Plateforme e-commerce complète avec système de paiement sécurisé et gestion des stocks en temps réel.",
        imageUrl: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
        link: "#",
        delay: 1
      },
      {
        title: "Application de Fitness",
        category: "Application Mobile",
        description: "Application permettant aux utilisateurs de suivre leurs activités sportives, régimes alimentaires, et de créer des programmes personnalisés.",
        imageUrl: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
        link: "#",
        delay: 2
      },
      {
        title: "Tableau de Bord SaaS",
        category: "Web Application",
        description: "Interface de tableau de bord analytique pour une entreprise SaaS avec visualisations de données en temps réel.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
        link: "#",
        delay: 3
      },
      {
        title: "Réservation d'Hôtel",
        category: "Application Web",
        description: "Système de réservation en ligne pour une chaîne d'hôtels avec intégration de paiement et gestion des réservations.",
        imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80",
        link: "#",
        delay: 4
      }
    ]

    return {
      projects
    }
  }
}
</script>

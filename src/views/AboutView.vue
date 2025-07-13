
<template>
  <div class="min-h-screen flex flex-col">
    <NavbarComponent />

    <main class="flex-1 pt-20">
      <!-- Header -->
      <section class="bg-gradient-to-br from-capslock-navy via-blue-700 to-blue-800 dark:from-blue-600 dark:via-blue-700 dark:to-blue-900 text-white section-spacing">
        <div class="container mx-auto px-4">


          <div class="max-w-4xl">
            <h1 class="text-5xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in">
              À propos de <span class="text-blue-300">Capslock</span>
            </h1>
            <p class="text-xl text-blue-100 leading-relaxed opacity-0 animate-fade-in delay-200">
              Une équipe passionnée de développeurs et designers dédiée à transformer vos idées en solutions digitales exceptionnelles.
            </p>
          </div>
        </div>
      </section>

      <!-- Notre Histoire -->
      <section class="section-spacing bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100 opacity-0 animate-fade-in">
              Notre Histoire
            </h2>
            <div class="prose prose-lg mx-auto text-gray-600 dark:text-gray-300 opacity-0 animate-fade-in delay-200">
              <p class="text-lg leading-relaxed mb-6">
                Fondée en 2025, Capslock est née de la passion commune de deux développeurs pour l'innovation technologique.
                Notre mission est simple : créer des applications web et mobiles qui font la différence.
              </p>
              <p class="text-lg leading-relaxed mb-6">
                Depuis nos débuts, nous avons accompagné plusieurs entreprises dans leur transformation digitale,
                des startups innovantes aux grandes entreprises établies. Notre approche collaborative et notre
                expertise technique nous permettent de livrer des solutions sur mesure qui répondent aux besoins spécifiques de chaque client.
              </p>
              <p class="text-lg leading-relaxed">
                Aujourd'hui, nous continuons d'évoluer et d'innover, en restant toujours fidèles à nos valeurs
                d'excellence, de qualité et de collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Nos Valeurs -->
      <section class="section-spacing bg-gray-50 dark:bg-gray-800">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100 opacity-0 animate-fade-in">
            Nos Valeurs
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(value, index) in values"
              :key="value.title"
              :class="`text-center p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg hover-scale opacity-0 animate-fade-in delay-${index + 1}`"
            >
              <div class="w-16 h-16 bg-capslock-navy/10 dark:bg-blue-500/20 text-capslock-navy dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <component :is="value.icon" :size="32" />
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{{ value.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Notre Équipe -->
      <section class="section-spacing bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100 opacity-0 animate-fade-in">
            Notre Équipe
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(member, index) in teamMembers"
              :key="member.name"
              :class="`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover-scale opacity-0 animate-fade-in group delay-${index + 1}`"
            >
              <div class="aspect-square bg-gradient-to-br from-capslock-navy to-blue-600 dark:from-blue-500 dark:to-blue-700 flex items-center justify-center">
                <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{{ member.name }}</h3>
                <p class="text-capslock-navy dark:text-blue-400 font-medium mb-3">{{ member.role }}</p>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{{ member.bio }}</p>

                <div class="flex flex-wrap gap-1 mb-4">
                  <span
                    v-for="skill in member.skills"
                    :key="skill"
                    class="px-2 py-1 bg-capslock-navy/10 dark:bg-blue-500/20 text-capslock-navy dark:text-blue-400 text-xs rounded-full"
                  >
                    {{ skill }}
                  </span>
                </div>

                <div class="flex space-x-3">
                  <a
                    :href="member.social.github"
                    class="text-gray-400 hover:text-capslock-navy dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    :href="member.social.linkedin"
                    class="text-gray-400 hover:text-capslock-navy dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    :href="`mailto:${member.social.email}`"
                    class="text-gray-400 hover:text-capslock-navy dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="section-spacing bg-gradient-to-r from-capslock-navy to-blue-600 dark:from-blue-600 dark:to-blue-800 text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-bold mb-6 opacity-0 animate-fade-in">
            Prêt à travailler avec nous ?
          </h2>
          <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in delay-200">
            Discutons de votre projet et découvrons comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <router-link
            to="/#contact"
            class="inline-block px-8 py-4 bg-white text-capslock-navy font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover-scale opacity-0 animate-fade-in delay-400"
          >
            Démarrer un projet
          </router-link>
        </div>
      </section>
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from '../components/layout/NavbarComponent.vue'
import FooterComponent from '../components/layout/FooterComponent.vue'
import { Target, Lightbulb, Users, Award } from 'lucide-vue-next';

export default {
  name: 'AboutView',
  components: {
    NavbarComponent,
    FooterComponent
  },
  data() {
    return {
      values: [
        {
          icon: Target,
          title: "Excellence",
          description: "Nous nous engageons à livrer des solutions de la plus haute qualité qui dépassent les attentes de nos clients."
        },
        {
          icon: Lightbulb,
          title: "Innovation",
          description: "Nous restons à la pointe de la technologie pour offrir des solutions innovantes et performantes."
        },
        {
          icon: Users,
          title: "Collaboration",
          description: "Nous travaillons en étroite collaboration avec nos clients pour comprendre et réaliser leur vision."
        },
        {
          icon: Award,
          title: "Qualité",
          description: "Chaque projet est traité avec le plus grand soin et selon les meilleures pratiques de l'industrie."
        }
      ],
      teamMembers: [
        {
          name: "Rooney KALUMBA",
          role: "Développeur web backend",
          bio: "",
          skills: ["Php", "Symfony", "React native"],
          social: {
            github: "#",
            linkedin: "#",
            email: "#"
          }
        },
        {
          name: "Augustin KALONJI",
          role: "Développeur web & mobile frontend",
          bio: "Expert en développement mobile native avec Kotlin et cross-platform avec Flutter.",
          skills: ["Vue.js", "Django", "Flutter"],
          social: {
            github: "#",
            linkedin: "#",
            email: "#"
          }
        },
        {
          name: "Armel KAMEKO",
          role: "Designer UX/UI",
          bio: "Designer créatif avec une approche centrée utilisateur pour créer des expériences exceptionnelles.",
          skills: ["Figma", "Adobe Suite"],
          social: {
            github: "#",
            linkedin: "#",
            email: "tom@capslock.dev"
          }
        },
        {
          name: "Benita MALOBA",
          role: "Développeuse Mobile",
          bio: "",
          skills: [],
          social: {
            github: "#",
            linkedin: "#",
            email: "emma@capslock.dev"
          }
        },
        {
          name: "Gloria KANGAJ",
          role: "",
          bio: "",
          skills: [],
          social: {
            github: "#",
            linkedin: "#",
            email: "#"
          }
        },
        {
          name: "Deborah TSHIMBALANGA",
          role: "",
          bio: "",
          skills: [],
          social: {
            github: "#",
            linkedin: "#",
            email: "#"
          }
        },
        {
          name: "Gladis LUKELE",
          role: "",
          bio: "",
          skills: [],
          social: {
            github: "#",
            linkedin: "#",
            email: "#"
          }
        },/*
        {
          name: "",
          role: "",
          bio: "",
          skills: [],
          social: {
            github: "#",
            linkedin: "#",
            email: "#"
          }
        },*/
      ]
    }
  }
}
</script>

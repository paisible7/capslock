
<template>
  <section id="contact" class="section-spacing bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="text-capslock-navy dark:text-blue-300 font-medium mb-3 opacity-0 animate-fade-in">Contactez-nous</p>
        <h2 class="text-3xl md:text-4xl font-bold mb-6 dark-text opacity-0 animate-fade-in animation-delay-100">
          Commençons votre projet ensemble
        </h2>
        <p class="dark-text-muted opacity-0 animate-fade-in animation-delay-200">
          Parlez-nous de votre projet et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-1 space-y-6 opacity-0 animate-fade-in animation-delay-300">
          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 class="text-xl font-bold mb-6 dark-text">Informations de contact</h3>

            <div class="space-y-8">
              <a
                v-for="(item, index) in contactInfo"
                :key="index"
                :href="item.link"
                class="flex items-start hover:text-capslock-navy dark:hover:text-blue-300 transition-colors"
                :target="item.title === 'Adresse' ? '_blank' : undefined"
                :rel="item.title === 'Adresse' ? 'noopener noreferrer' : undefined"
              >
                <div class="mt-1 mr-4 w-10 h-10 bg-capslock-navy/10 dark:bg-blue-300/10 rounded-full flex items-center justify-center">
                  <svg v-if="item.icon === 'mail'" class="w-5 h-5 text-capslock-navy dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <svg v-else-if="item.icon === 'phone'" class="w-5 h-5 text-capslock-navy dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <svg v-else-if="item.icon === 'map-pin'" class="w-5 h-5 text-capslock-navy dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-medium dark-text">{{ item.title }}</p>
                  <p class="dark-text-muted">{{ item.value }}</p>
                </div>
              </a>
            </div>

            <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
              <h4 class="font-medium mb-4 dark-text">Suivez-nous</h4>
              <div class="flex space-x-4">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.href"
                  class="w-10 h-10 bg-capslock-navy/10 dark:bg-blue-300/10 rounded-full flex items-center justify-center text-capslock-navy dark:text-blue-300 hover:bg-capslock-navy dark:hover:bg-blue-600 hover:text-white transition-all"
                >
                  <svg v-if="social.icon === 'facebook'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <svg v-else-if="social.icon === 'instagram'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.435-3.396-1.179-.948-.744-1.494-1.744-1.494-2.897 0-1.153.546-2.153 1.494-2.897.948-.744 2.099-1.179 3.396-1.179 1.297 0 2.448.435 3.396 1.179.948.744 1.494 1.744 1.494 2.897 0 1.153-.546 2.153-1.494 2.897-.948.744-2.099 1.179-3.396 1.179zm7.622-9.094h-1.297c-.324 0-.648-.108-.891-.324-.243-.216-.378-.513-.378-.837 0-.324.135-.621.378-.837.243-.216.567-.324.891-.324h1.297c.324 0 .648.108.891.324.243.216.378.513.378.837 0 .324-.135.621-.378.837-.243.216-.567.324-.891.324z"/>
                  </svg>
                  <svg v-else-if="social.icon === 'linkedin'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2">
          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl opacity-0 animate-fade-in animation-delay-400 shadow-lg">
            <h3 class="text-xl font-bold mb-6 dark-text">Envoyez-nous un message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import ContactForm from '../ui/ContactForm.vue'
import NavbarComponent from "@/components/layout/NavbarComponent.vue";
import FooterComponent from "@/components/layout/FooterComponent.vue";

export default {
  name: 'ContactSection',
  components: {
    FooterComponent,
    NavbarComponent,
    ContactForm
  },
  setup() {
    const contactInfo = [
      {
        icon: 'mail',
        title: "Email",
        value: "contact@capslock.site",
        link: "mailto:contact@capslock.site"
      },
      {
        icon: 'phone',
        title: "Téléphone",
        value: "+243 992 142 932, +243 994 644 422",
        link: "tel:+33123456789"
      },
      {
        icon: 'map-pin',
        title: "Adresse",
        value: "Lubumbashi",
        link: "https://maps.google.com"
      }
    ]

    const socialLinks = [
      {
        name: 'Facebook',
        href: '#',
        icon: 'facebook'
      },
      {
        name: 'Instagram',
        href: '#',
        icon: 'instagram'
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: 'linkedin'
      }
    ]

    return {
      contactInfo,
      socialLinks
    }
  }
}
</script>


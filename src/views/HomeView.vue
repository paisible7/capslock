<template>
  <div class="min-h-screen">
    <NavbarComponent />
    <main>
      <HomeSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "@/components/layout/NavbarComponent.vue"
import FooterComponent from '@/components/layout/FooterComponent.vue'
import HomeSection from '@/components/sections/HomeSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarComponent,
    FooterComponent,
    HomeSection: HomeSection,
    ServicesSection,
    ProjectsSection,
    ContactSection
  }
}
</script>

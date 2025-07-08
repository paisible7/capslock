
<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="name" class="block text-sm font-medium dark-text mb-2">Nom complet *</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-capslock-navy dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 dark-text transition-colors"
          placeholder="Votre nom complet"
        >
      </div>
      <div>
        <label for="email" class="block text-sm font-medium dark-text mb-2">Email *</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-capslock-navy dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 dark-text transition-colors"
          placeholder="votre@email.com"
        >
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="phone" class="block text-sm font-medium dark-text mb-2">Téléphone</label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-capslock-navy dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 dark-text transition-colors"
          placeholder="+243 XXX XXX XXX"
        >
      </div>
      <div>
        <label for="service" class="block text-sm font-medium dark-text mb-2">Service souhaité</label>
        <select
          id="service"
          v-model="form.service"
          class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-capslock-navy dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 dark-text transition-colors"
        >
          <option value="">Sélectionner un service</option>
          <option value="web">Développement Web</option>
          <option value="mobile">Application Mobile</option>
          <option value="design">UI/UX Design</option>
          <option value="maintenance">Maintenance & Support</option>
          <option value="autre">Autre</option>
        </select>
      </div>
    </div>

    <div>
      <label for="message" class="block text-sm font-medium dark-text mb-2">Message *</label>
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="5"
        class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-capslock-navy dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 dark-text transition-colors resize-vertical"
        placeholder="Décrivez votre projet..."
      ></textarea>
    </div>

    <div class="flex items-center">
      <input
        id="consent"
        v-model="form.consent"
        type="checkbox"
        required
        class="h-4 w-4 text-capslock-navy dark:text-blue-400 focus:ring-capslock-navy dark:focus:ring-blue-400 border-gray-300 dark:border-gray-600 rounded"
      >
      <label for="consent" class="ml-2 text-sm dark-text-muted">
        J'accepte d'être contacté par Capslock concernant ma demande *
      </label>
    </div>

    <!-- Status Messages -->
    <div v-if="contactStore.status === 'success'" class="p-4 bg-green-50 dark:bg-green-900/50 border border-green-200 dark:border-green-800 rounded-lg">
      <p class="text-green-800 dark:text-green-300">✅ Message envoyé avec succès !</p>
    </div>

    <div v-if="contactStore.status === 'error'" class="p-4 bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 rounded-lg">
      <p class="text-red-800 dark:text-red-300">❌ Erreur lors de l'envoi du message.</p>
    </div>

    <button
      type="submit"
      :disabled="contactStore.isLoading"
      class="w-full px-6 py-3 bg-capslock-navy dark:bg-blue-600 text-white rounded-lg hover:bg-opacity-90 dark:hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
    >
      <svg v-if="contactStore.isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      {{ contactStore.isLoading ? 'Envoi en cours...' : 'Envoyer le message' }}
    </button>
  </form>
</template>

<script>
import { reactive } from 'vue'
import { useContactStore } from '../../stores/contact'

export default {
  name: 'ContactForm',
  setup() {
    const contactStore = useContactStore()

    const form = reactive({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      consent: false
    })

    const handleSubmit = async () => {
      try {
        const result = await contactStore.sendEmail(form)

        if (result.success) {
          // Reset form
          Object.keys(form).forEach(key => {
            if (key === 'consent') {
              form[key] = false
            } else {
              form[key] = ''
            }
          })
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi:', error)
      }
    }

    return {
      form,
      contactStore,
      handleSubmit
    }
  }
}
</script>

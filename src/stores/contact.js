import { defineStore } from 'pinia'
import { ref } from 'vue'
import emailjs from 'emailjs-com'

export const useContactStore = defineStore('contact', () => {
  const isLoading = ref(false)
  const message = ref('')

  // Configuration EmailJS - À MODIFIER avec vos identifiants
  const emailjsConfig = {
    serviceId: '',
    templateId: '',
    userId: ''
  }

  const sendEmail = async (formData) => {
    isLoading.value = true
    message.value = ''

    try {
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        },
        emailjsConfig.userId
      )

      if (result.status === 200) {
        message.value = 'Message envoyé avec succès !'
        return { success: true }
      }
    } catch (error) {
      console.error('Erreur EmailJS:', error)
      message.value = 'Erreur lors de l\'envoi. Veuillez réessayer.'
      return { success: false }
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    message,
    sendEmail
  }
})

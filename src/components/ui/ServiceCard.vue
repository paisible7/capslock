
<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in"
       :class="`delay-${delay * 100}`">
    <div class="w-12 h-12 bg-capslock-navy/10 dark:bg-blue-400/20 rounded-lg flex items-center justify-center mb-4">
      <!-- Icône Code -->
      <svg v-if="icon === 'code'" class="w-6 h-6 text-capslock-navy dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polyline points="16,18 22,12 16,6"/>
        <polyline points="8,6 2,12 8,18"/>
      </svg>
      <!-- Icône Smartphone -->
      <svg v-else-if="icon === 'smartphone'" class="w-6 h-6 text-capslock-navy dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
      <!-- Icône Wrench -->
      <svg v-else-if="icon === 'wrench'" class="w-6 h-6 text-capslock-navy dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
      <!-- Icône Palette -->
      <svg v-else-if="icon === 'palette'" class="w-6 h-6 text-capslock-navy dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="13.5" cy="6.5" r=".5"/>
        <circle cx="17.5" cy="10.5" r=".5"/>
        <circle cx="8.5" cy="7.5" r=".5"/>
        <circle cx="6.5" cy="12.5" r=".5"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      </svg>
      <!-- Icône par défaut -->
      <div v-else class="w-6 h-6 bg-capslock-navy dark:bg-blue-400 rounded"></div>
    </div>
    <h3 class="text-xl font-semibold mb-3 dark-text">{{ title }}</h3>
    <p class="dark-text-muted">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    delay: {
      type: Number,
      required: true
    }
  }
}
</script>

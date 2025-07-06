<template>
  <div class="relative w-8 h-8">
   <!-- <img
      src="@/assets/capslocklogo.png"
      alt="Mon logo"
      :class="`w-full h-full object-contain ${isAnimating ? 'animate-pulse' : ''}`"
    /> --> </div>
</template>

<script>
import {ref, onMounted, onUnmounted} from 'vue'

export default {
  name: 'AnimatedLogo',
  setup() {
    const isAnimating = ref(false)
    let interval = null

    const startAnimation = () => {
      isAnimating.value = true
      setTimeout(() => {
        isAnimating.value = false
      }, 2000)
    }

    onMounted(() => {
      startAnimation()
      interval = setInterval(startAnimation, 10000)
    })

    onUnmounted(() => {
      if (interval) {
        clearInterval(interval)
      }
    })

    return {
      isAnimating
    }
  }
}
</script>


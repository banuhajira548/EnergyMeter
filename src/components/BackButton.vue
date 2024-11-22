<!-- BackButton.vue -->
<template>
  <button
    id="backButton"
    class="fixed top-2 left-2 sm:top-2.5 sm:left-6 flex items-center text-white bg-gradient-to-r from-blue-500 to-cyan-400 font-bold py-1 px-4 sm:px-4 rounded neumorphic-effect"
    @click="goBack"
  >
    <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
    </svg>
    Back
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  router.back();
}
</script>

<style scoped>
#backButton {
  transition: box-shadow 0.3s;
}

.neumorphic-effect {
  transition: box-shadow 0.3s ease;
}

.neumorphic-effect:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1), 0px 0px 40px rgba(0, 0, 0, 0.2);
}

#backButton:focus {
  outline: none; /* Remove focus outline */
}
</style>

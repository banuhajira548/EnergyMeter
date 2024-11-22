<template>
  <nav :class="navClass">
    <button @click="toggleSidebar" class="text-white">☰</button>
    
    <div class="flex-grow text-center">
      <h1 class="text-white text-lg">{{ companyName }}</h1>
    </div>

    <div class="flex items-center space-x-4 mr-4">
      <router-link to="/" class="text-white mx-2">Home</router-link>
      <!-- <a href="#" class="text-white mx-2">Report</a> -->
    </div>

    <img src="../assets/CMTI_Logo.png" alt="company-logo" class="h-10 w-24 ml-1" />
  </nav>
</template>

<script>
export default {
  data() {
    return {
      companyName: 'Industry Assets Monitoring                                               ',
      companyLogoSrc: 'src/assets/CMTI_Logo.png', // Sample URL, replace with actual image URL
      navClass: 'nav-style p-2 flex justify-between items-center'
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar'); // Emit event to parent component (App.vue)
    }
  }
};
</script>

<style scoped>
.nav-style {
  background: linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);
}
.text-white {
  color: white;
}
</style>

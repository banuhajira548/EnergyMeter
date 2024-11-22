<template>
  <div id="app">
    <NavBar @toggle-sidebar="toggleSidebar" />
    <SideBar :isOpen="isSidebarOpen" @close-sidebar="closeSidebar" />
    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';

export default {
  components: {
    NavBar,
    SideBar
  },
  data() {
    return {
      isSidebarOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    }
  }
};
</script>

<style>
/* Your existing styles here */
</style>

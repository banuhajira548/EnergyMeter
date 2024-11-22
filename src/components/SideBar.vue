<template>
  <div class="sidenav" :class="{ open: isOpen }">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeNav() {
      this.$emit('close-sidebar');
    }
  }
};
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #242B41;
  overflow-x: hidden;
  padding-top: 60px;
  transition: width 0.5s;
}

.sidenav.open {
  width: 250px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  color: #f1f1f1;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #818181;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Media Queries */
@media screen and (max-width: 768px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

@media screen and (max-width: 576px) {
  .sidenav {
    width: 200px;
  }
  .sidenav a {
    font-size: 16px;
    padding: 8px 8px 8px 20px;
  }
  .sidenav .closebtn {
    font-size: 30px;
    right: 15px;
  }
}

@media screen and (max-width: 400px) {
  .sidenav {
    width: 150px;
  }
  .sidenav a {
    font-size: 14px;
    padding: 8px 8px 8px 15px;
  }
  .sidenav .closebtn {
    font-size: 26px;
    right: 10px;
  }
}
</style>

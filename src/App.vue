<template>
  <div class="container" id="app">
    <app-navbar></app-navbar>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'

  export default {
    components: {
      appNavbar: Navbar
    }
  }
</script>

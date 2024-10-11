<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import Navbar from './components/Navbar.vue';
  import HomeView from './views/HomeView.vue';
  import AlertInfo from './components/AlertInfo.vue';
</script>

<template>
  <header>
    <Navbar />
    <AlertInfo />
  </header>
  <br />
  <RouterView />
</template>

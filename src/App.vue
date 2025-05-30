<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header class="bg-white shadow-xl">
    <NavBar />
  </header>
  
  <main class="container mx-auto px-4 py-8">
    <RouterView />
  </main>
  
  <footer class="bg-dark text-white py-6">
    <Footer />
  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
</style>

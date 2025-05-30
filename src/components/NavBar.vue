<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container mx-auto px-4 py-4">
    <nav class="flex justify-between items-center">
      <div class="text-xl font-bold text-primary">Felipe Garcia</div>
      <div class="flex space-x-6">
        <RouterLink to="/" class="text-dark hover:text-primary transition-colors">Home</RouterLink>
        <RouterLink to="/about" class="text-dark hover:text-primary transition-colors">Sobre</RouterLink>
        <RouterLink to="/contact" class="text-dark hover:text-primary transition-colors">Contato</RouterLink>
      </div>
    </nav>
  </div>
</template>

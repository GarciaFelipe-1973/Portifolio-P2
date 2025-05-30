<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  links: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="flex space-x-4">
    <a 
      v-for="(link, index) in links" 
      :key="index" 
      :href="link.url" 
      target="_blank" 
      rel="noopener noreferrer"
      class="text-dark hover:text-primary transition-colors"
    >
      <div class="flex items-center">
        <span class="mr-1">{{ link.icon }}</span>
        <span>{{ link.name }}</span>
      </div>
    </a>
  </div>
</template>

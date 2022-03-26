<template>
  <header class="text-gray-600 body-font border-b">
    <div class="container mx-auto flex flex-wrap p-5 py-6 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span class="ml-3 text-xl text-slate-900 font-medium">
          Arduino
        </span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <mdi-icon
          v-for="item in 5"
          :key="item"
          icon="mdi-cards-heart-outline"
          class="mr-4"
          size="xl"
        />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const enabled = ref(false);
</script>



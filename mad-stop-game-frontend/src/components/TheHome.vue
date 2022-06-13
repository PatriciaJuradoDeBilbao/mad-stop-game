<script setup lang="ts">
import TheInstructions from './TheInstructions.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <TheInstructions />
  <nav>
    <RouterLink to="/game">Let's play!</RouterLink>
  </nav>
</template>
<style lang="css"></style>

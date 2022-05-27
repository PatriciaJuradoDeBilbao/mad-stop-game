<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>
<template>
  <div class="header">
    <h1 class="title">{{ msg }}</h1>
  </div>
</template>
<style lang="css">
.header {
  background-color: #00bd7e;
  padding: 15px;
}
.title {
  font-size: 40px;
  font-weight: 700px;
  display: flex;
  justify-content: center;
  color: #fff;
}
</style>

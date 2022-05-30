<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>
<template>
  <footer>
    <h1 class="footer__title">{{ msg }}</h1>
  </footer>
</template>
<style lang="css">
footer {
  background-color: #00bd7e;
  padding: 15px;
  bottom: 0;
  position: fixed;
  width: 100%;
}
.footer__title {
  font-size: 16px;
  font-weight: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
</style>

<script setup lang="ts">
import { ref } from "vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const getRandomLetter = () =>
  letters[Math.floor(Math.random() * letters.length)];

const randomLetter = ref(getRandomLetter());

const setRandomLetter = () => {
  randomLetter.value = getRandomLetter();
};
</script>

<template>
  <div class="button__container">
    <button @click="setRandomLetter" class="button">
      Choose random letter
    </button>
  </div>
  <p class="random-letter">The letter is: {{ randomLetter }}</p>
</template>

<style lang="css">
button {
  width: 70%;
  padding: 20px;
  font-size: 18px;
  font-weight: 700px;
  border: none;
  background-color: #00bd7e;
  color: #fff;
  border-radius: 8px;
}
.button__container {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}
.title {
  font-size: 40px;
  font-weight: 700px;
  display: flex;
  justify-content: center;
  color: #fff;
}
.instructions__container {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}
.instructions__title {
  font-size: 22px;
  font-weight: 700px;
  display: flex;
  justify-content: center;
}
.random-letter {
  display: flex;
  justify-content: center;
  font-size: 24px;
}
</style>

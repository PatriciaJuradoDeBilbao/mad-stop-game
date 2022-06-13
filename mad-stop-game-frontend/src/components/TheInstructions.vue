<script setup lang="ts">
import RandomLetter from '@/components/RandomLetter.vue'
</script>
<template>
  <div class="instructions__container">
    <h3 class="instructions__title">How to play</h3>
    <ul class="instructions__items-container">
      <li class="instructions__items">
        Click on the button to choose a random letter.
      </li>
      <li class="instructions__items">
        Fill all the categories with the chosen letter.
      </li>
      <li class="instructions__items">
        Press the STOP button when you're done.
      </li>
      <li class="instructions__items">
        Count your points:
        <ul>
          <li class="instructions__subitems">
            100pts If you are the only one with that word.
          </li>
          <li class="instructions__subitems">
            50pts If your word is repeated.
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <RandomLetter />
</template>
<style lang="css">
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
}
.instructions__title {
  font-size: 26px;
  font-weight: 700px;
  display: flex;
  justify-content: center;
  margin: 20px;
}
.instructions__items-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 25px 10px 45px;
  font-size: 16px;
}
.instructions__items {
  margin-bottom: 15px;
}
.instructions__subitems {
  margin-top: 10px;
}
</style>

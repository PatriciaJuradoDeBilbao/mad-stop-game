<script setup lang="ts">
import StopButton from './Stopbutton.vue'
</script>
<template>
  <div class="categories">
    <div class="category__container">
      <label>Food</label>
      <input />
    </div>
    <div class="category__container">
      <label>Animal</label>
      <input />
    </div>
    <div class="category__container">
      <label>Country/Place</label>
      <input />
    </div>
    <div class="category__container">
      <label>Color</label>
      <input />
    </div>
    <div class="category__container">
      <label>Metro station</label>
      <input />
    </div>
    <div class="category__container">
      <label>Music Band</label>
      <input />
    </div>
  </div>
  <StopButton />
</template>
<style lang="css">
.categories {
  padding: 0 25px;
}
.category__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
}
label {
  font-size: 18px;
  margin-bottom: 5px;
}
input {
  font-size: 20px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #00bd7e;
  padding: 8px 15px;
}
input:focus {
  outline: none;
  background-color: #b3e3d3;
}
</style>

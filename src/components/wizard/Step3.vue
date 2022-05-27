<script setup lang="ts">
import { formData, resetForm, computedPremium } from '../../stores/form'
import Button from '../common/Button.vue'
defineEmits<{
  (e: 'step', id: number): void
}>()

</script>

<template>
  <div class="main-pane">
    <h1>Summary</h1>
    <div>
      <h2 v-if="formData.name">{{formData.name}},</h2>
      <div>Name: {{formData.name}}</div>
      <div>Age: {{formData.age}}</div>
      <div>Where do you live: {{formData.city.text}}</div>
      <div>Package: {{formData.package.name}}</div>
      <div>Premium: {{computedPremium}}</div>
      <div class="btns">
        <Button light @click="$emit('step', 2)">Back</Button>
        <span class="sep1"></span>
        <Button @click="resetForm(); $emit('step', 1)">Buy</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../../assets/base.css';

.basic-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.premium {
  font-size: 1.5rem;
  padding: 40px 0;
  font-weight: 700;
}

.btns {
  margin-top: 8px;
  white-space: nowrap;
  text-align: center;
}

.sep1 {
  display: inline-block;
  width: 10px;
}

</style>

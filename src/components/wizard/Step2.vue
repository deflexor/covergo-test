<script setup lang="ts">
import { formData, cities, discounts } from '../../stores/form'
import Button from '../common/Button.vue'
defineEmits<{
  (e: 'step', id: number): void
}>()

</script>

<template>
  <div class="main-pane">
    <h1>Tell us about yourself</h1>
    <form class="basic-form">
      <label class="basic-input-label">
        <b>Name</b>
        <input type="text" class="basic-input" placeholder="Add text" maxlength="128" v-model="formData.name">
      </label>
      <label class="basic-input-label">
        <b class="">Age</b>
        <input type="number" class="basic-input" placeholder="50" maxlength="10" v-model="formData.age">
      </label>
      <label class="basic-input-label">
        <b>Where do you live</b>
        <select class="basic-input" v-model="formData.city">
          <option v-for="o of cities" :value="o">{{o.text}}</option>
        </select>
      </label>
      <label v-for="(d,i) of discounts" class="radio-input-label">
        <input type="radio" v-model="formData.discount" :value="i" /> {{d}}
      </label>
      <div class="premium">
        Your premium is: 500 HKD
      </div>
      <div class="btns">
        <Button light @click="$emit('step', 1)">Back</Button>
        <span class="sep1"></span>
        <Button @click="$emit('step', 3)">Next</Button>
      </div>
    </form>
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

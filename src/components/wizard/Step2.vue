<script setup lang="ts">
import {
  setAge,
  formData,
  formFilled,
  computedPremium,
  extraPremium,
  cities,
  premiumPackages,
} from "../../stores/form";
import Button from "../common/Button.vue";
defineEmits<{
  (e: "step", id: number): void;
}>();
</script>

<template>
  <div class="main-pane">
    <h1>Tell us about yourself</h1>
    <form class="basic-form">
      <label class="basic-input-label">
        <b>Name</b>
        <input
          type="text"
          class="basic-input"
          placeholder="Add text"
          maxlength="128"
          v-model="formData.name"
        />
      </label>
      <label class="basic-input-label">
        <b class="">Age</b>
        <input
          type="number"
          class="basic-input"
          placeholder="50"
          min="1"
          maxlength="4"
          v-model="formData.age"
          @input="setAge"
        />
      </label>
      <label class="basic-input-label">
        <b>Where do you live</b>
        <select class="basic-input" v-model="formData.city">
          <option v-for="o of cities" :key="o.text" :value="o">
            {{ o.text }}
          </option>
        </select>
      </label>
      <label
        v-for="d of premiumPackages"
        :key="d.name"
        class="radio-input-label"
      >
        <input type="radio" v-model="formData.package" :value="d" />
        {{ d.name }} (+{{ extraPremium(d.value) }} {{ formData.city.currency }},
        {{ d.value }}% )
      </label>
      <div class="premium" v-if="computedPremium">
        Your premium is: {{ computedPremium }}
      </div>
      <div class="premium0" v-else>
        Some form fields must be filled to calculate premium
      </div>
      <div class="btns">
        <Button light @click="$emit('step', 1)">Back</Button>
        <span class="sep1"></span>
        <Button @click="$emit('step', 3)" :disabled="!formFilled">Next</Button>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import "../../assets/base.css";

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

.premium0 {
  font-size: 1.3rem;
  padding: 40px 0;
  font-weight: normal;
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

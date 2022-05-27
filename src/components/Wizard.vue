<script setup lang="ts">
import Step1 from './wizard/Step1.vue'
import Step2 from './wizard/Step2.vue'
import Step3 from './wizard/Step3.vue'
import ErrorAge from './wizard/ErrorAge.vue'
import {ref} from 'vue'
import { formData } from '../stores/form'

const stepComponents = [null, Step1, Step2, Step3]

const currentStep = ref(1)
const hasError = ref(false)

function stepChanged(step : number) {
  if (currentStep.value === 2 && step === 3 && formData.age > 100) {
    hasError.value = true
  } else {
    currentStep.value = step
  }
}

</script>

<template>
  <ErrorAge @ok="hasError = false" v-if="hasError"></ErrorAge>
  <component @step="stepChanged" :is="stepComponents[currentStep]" v-else></component>
</template>

<script setup lang="ts">
import Step1 from './wizard/Step1.vue'
import Step2 from './wizard/Step2.vue'
import {ref} from 'vue'

const stepComponents = [null, Step1, Step2]

const currentStep = ref(1)

function stepChanged(step : number) {
  currentStep.value = step
}

</script>

<template>
  <component @step="stepChanged" :is="stepComponents[currentStep]"></component>
</template>

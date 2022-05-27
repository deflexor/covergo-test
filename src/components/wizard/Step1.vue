<script setup lang="ts">
import Button from "../common/Button.vue";
defineEmits<{
  (e: "step", id: number): void;
}>();
</script>
<template>
  <div class="main-pane">
    <h1>Hello there</h1>
    <p>Let's buy some insurance. It is going to take only a few steps</p>
    <Button @click="$emit('step', 2)">Start</Button>
  </div>
</template>

<style scoped>
@import "../../assets/base.css";

p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
</style>

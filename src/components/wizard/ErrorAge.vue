<script setup lang="ts">
import Button from "../common/Button.vue";
defineEmits<{
  (e: "ok"): void;
}>();
</script>
<template>
  <div class="main-pane">
    <h1>Ooops</h1>
    <p>
      The age is over our accepted limit. We are sorry but we cannot insure you
      now
    </p>
    <Button style="width: 80%" @click="$emit('ok')">Ok :(</Button>
  </div>
</template>

<style scoped>
@import "../../assets/base.css";

p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
</style>

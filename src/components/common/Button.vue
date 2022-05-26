<script setup lang="ts">
// import { ref } from 'vue'
defineProps<{
  light?: boolean
}>()
defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button :class="['btn', light ? 'light' : 'dark']" @click="$emit('click')"><slot></slot></button>
</template>

<style scoped>
@import '../../assets/base.css';

.btn {
  display: inline-flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  white-space: nowrap;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  border-radius: 3px;
  cursor: pointer;
  border: 2px solid var(--color-text);
  outline: none;
  user-select: none;
  padding: 6px 12px;
}

.light {
    color: var(--color-text);
    background-color: white;
}

.dark {
    background-color: var(--vt-c-black);
    color: white;
}
</style>
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

.btn.light::disabled {
  color: var(--vt-c-divider-light-2);
}

.dark {
    background-color: var(--vt-c-black);
    color: var(--vt-c-white);
}

.btn.dark[disabled] {
  color: var(--vt-c-gray);
  background-color: var(--vt-c-black-soft);
  cursor: default;
}

</style>
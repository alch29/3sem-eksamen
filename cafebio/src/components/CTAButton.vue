<template>
    <button
      :class="['custom-button', hoverStyle]"
      @click="handleClick"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    hoverStyle: {
      type: String,
      default: 'red-hover', // Standard hover-stil er red-hover"
    },
  });
  
  const emit = defineEmits(['click']);
  
  function handleClick() {
    emit('click');
  }
  </script>
  
  <style scoped>
  .custom-button {
    padding: 8px 20px;
    font-size: 1.2rem;
    border: solid 2px var(--wine);
    border-radius: 8px;
    cursor: pointer;
    font-family: "gill-sans-nova", sans-serif;
    font-weight: 600;
    font-style: normal;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
  
  .custom-button.red-hover {
    background-color: var(--wine);
    color: white;
  }
  
  .custom-button.sand-hover {
    background-color: var(--wine);
    color: white;
  }
  
  /* Hover-effekt til rød baggrund */
  .custom-button.red-hover:hover {
    background-color: var(--red);
    color: white;
    border: solid 2px white;
  }
  
  /* Hover-effekt til sand baggrund */
  .custom-button.sand-hover:hover {
    background-color: var(--sand);
    border: solid 2px var(--wine);
  }
  </style>
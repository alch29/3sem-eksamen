<template>
    <!-- <button
      :class="['custom-button', hoverStyle]"
      @click="handleClick"
    >
      <slot></slot>
    </button> -->
    <a 
      :href="href" 
      target="_blank" 
      rel="noopener noreferrer" 
      :class="['button', hoverStyle]"
    >
      <slot></slot>
    </a>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  // const props = defineProps({
  //   hoverStyle: {
  //     type: String,
  //     default: 'red-hover', // Standard hover-stil er red-hover"
  //   },
  // });
  
  // const emit = defineEmits(['click']);
  
  // function handleClick() {
  //   emit('click');
  // }
  const props = defineProps({
    href: {
      type: String,
      required: true
    },
    hoverStyle: {
      type: String,
      default: 'red-hover'
    }
  });
  </script>
  
  <style scoped>
  .button {
    padding: 6px 18px;
    font-size: 0.8rem;
    border: solid 2px var(--wine);
    border-radius: 8px;
    cursor: pointer;
    font-family: "gill-sans-nova", sans-serif;
    font-weight: 600;
    font-style: normal;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
    display: inline-block;
    text-decoration: none;
  }
  
  .button.red-hover {
    background-color: var(--wine);
    color: white;
  }
  
  .button.sand-hover {
    background-color: var(--wine);
    color: white;
  }
  
  /* Hover-effekt til rød baggrund */
  .button.red-hover:hover {
    background-color: transparent;
    color: white;
    border: solid 2px white;
  }
  
  /* Hover-effekt til sand baggrund */
  .button.sand-hover:hover {
    background-color: transparent;
    color: var(--wine);
    border: solid 2px var(--wine);
  }

  @media (min-width: 800px) {
    
    .button {
      font-size: 1rem;
    }
  }
  </style>
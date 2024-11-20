<script setup>
import BookTable from '@/components/BookTable.vue';
import Map from '@/components/Map.vue';
</script>

<template> 
<div class="hero">
    <video
      autoplay
      loop
      muted
    >
      <source src="../assets/images/stemningsvideo_1.mp4" type="video/mp4" />
    </video>
</div>
<BookTable></BookTable>
<Map></Map>
</template>

<style scoped>
    .hero video {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
    }

    .hero {
        position: relative;
        padding-top: 38%;
        height: fit-content;
        max-height: 400px;
        width: 100%;
        overflow: hidden;
    }

    @media (max-width: 700px) {
        .hero {
        padding-top: 50%;
    }
    }
    
</style>
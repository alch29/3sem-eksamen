<script setup>

</script>

<template>
    <GMapMap
      :center="{ lat: 55.3959325883423, lng: 10.380339373479972 }"
      :zoom="18" 
      map-type-id="terrain" 
      style="width: 100vw; height: 20rem"
      :options="{
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true
      }"
    />
</template>
 
<style scoped>

</style>
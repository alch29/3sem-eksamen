<script setup>
// import { ref } from 'vue';

// const markerDetails = ref({
//   id: 1,
//   position: { lat: 55.3959325883423, lng: 10.380339373479972 },
// });

// const locationDetails = ref({
//   address: 'Example Address',
// });

// const openedMarkerID = ref(null);

// const openMarker = (id) => {
//   openedMarkerID.value = id;
//   console.log(`Marker with ID: ${id} clicked.`);
// };
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

<!-- <template>
    <GMapMap
      :center="{ lat: 55.3959325883423, lng: 10.380339373479972 }"
      :zoom="18"
      map-type-id="terrain"
      style="width: 100vw; height: 20rem"
    >
      <GMapMarker
        v-if="markerDetails && markerDetails.position"
        :key="markerDetails.id"
        :position="markerDetails.position"
        :clickable="true"
        :draggable="false"
        @click="openMarker(markerDetails.id)"
      >
        <GMapInfoWindow
          v-if="locationDetails && locationDetails.address !== ''"
          :closeclick="true"
          @closeclick="openMarker(null)"
          :opened="openedMarkerID === markerDetails.id"
          :options="{
            pixelOffset: {
              width: 10,
              height: 0
            },
            maxWidth: 320,
            maxHeight: 320
          }"
        >
          <div class="location-details">
            <h4>Cafe Biografen</h4>
            <p>Amfipladsen 13, 5000 Odense</p>
          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapMap>
</template> -->
  
<style scoped>

</style>
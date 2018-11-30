<template>
  <div>
    <!-- <h1>Google Maps Demo</h1> -->
  
    <div class="google-maps-page col-md-12">
      <card header-text="Factory Map Location" class="row">
        <gmap-map v-bind:center="center" v-bind:zoom="6" v-bind:map-type-id="mapTypeId">
          <gmap-marker v-for="(item, index) in mapLocation" v-bind:key="index" v-bind:position="item.position" v-on:click="center=item.position" />
        </gmap-map>
      </card>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['locationArray'],
    data() {
      return {
        center: {
          lat: 23.8103,
          lng: 90.4125
        }, // Dhaka lat,long
        mapTypeId: "terrain",
        param: 'abc'
      };
    },
    computed: {
      mapLocation() {
        return this.$store.state.markers;
      }
    },
    mounted() {
  
    }
  };
</script>

<style lang="scss" scoped>
  .vue-map-container {
    height: 300px;
    width: 100%;
  }
</style>
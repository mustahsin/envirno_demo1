<template>
<div>
  <!-- <h1>Google Maps Demo</h1> -->

  <gmap-map
    v-bind:center="center"
    v-bind:zoom="8"
    v-bind:map-type-id="mapTypeId">
    <gmap-marker
      v-for="(item, index) in locationArray"
      v-bind:key="index"
      v-bind:position="item.position"
      v-on:click="center=item.position"/>
  </gmap-map>
  <p>{{param}}</p>
</div>
</template>

<script>
export default {
  props:['locationArray'],
  data() {
    return {
      center: { lat: 23.8103, lng: 90.4125 },  // Dhaka lat,long
      mapTypeId: "terrain",
      param:''
    };
  },
  mounted()
  {
    this.$store.state.isAuthCompleted = true;
    param = this.$store.state.test;
  }
};
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: 300px;
  width: 100%;
}
</style>
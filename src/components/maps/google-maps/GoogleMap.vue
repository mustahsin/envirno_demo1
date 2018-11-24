<template>
  <div class="google-map"></div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as GoogleMapsLoader from 'google-maps'


  export default {
    name: 'google-map',
    props:['locationArray'],
    computed: mapGetters({
      config: 'config'
    }),

    mounted () {
      GoogleMapsLoader.KEY = this.config.googleMaps.apiKey
      alert(this.config.googleMaps.apiKey)
      GoogleMapsLoader.load((google) => {
        for(var i in this.locationArray)
        {
          var item = this.locationArray[i];
          var lat = item['lat'];
          var long = item['long'];
         
          new google.maps.Map(this.$el, {
            center: new google.maps.LatLng(lat, long),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          })
        }
      })
    }
  }
</script>


<style lang="scss">
  .google-map {
    height: 100%;
  }
</style>

<template>
    <div class="row">
        <div v-for="(industry,index) in industryData" :key="index" class="col-md-4">
            <div class="card">
                <div class="card-header">
                    <i class="fa fa-user"></i><strong class="card-title pl-2">{{industry.Name}}</strong>
                </div>
                <div class="card-body">
                    <div class="mx-auto d-block">
                        <img class="rounded-circle mx-auto d-block" :src="'dist/'+ industry.imageName" alt="pic">
                        <!-- <img class="rounded-circle mx-auto d-block" v-bind:src="path(etp2.png)" alt="Industry picture"> -->
                        <div class="location text-sm-center"><i class="fa fa-map-marker"></i> {{industry.Address}}</div>
                        <h5 class="text-sm-center mt-2 mb-1">Status: {{industry.Status}}</h5>
                    </div>
                    <hr>

                </div>
            </div>
        </div>

    </div><!-- .row -->

</template>


<script>    
    import Vue from 'vue'

    export default {
        name: 'IndustryCard',
        props: ['industryData'],
        components: {
          
        },
        
        data () {
            return {
              
          }
          
        },
        methods:
        {
        },
        computed: {
            path (icon_name) {
                return require('../images/' + icon_name)
            }
        },
        created ()
        {
          

        },
    }
</script>

<style lang="scss">
</style>

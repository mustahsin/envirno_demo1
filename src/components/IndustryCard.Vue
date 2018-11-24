<template>
    <div class="row">
        <div v-for="(industry,index) in industryData" :key="index" class="col-md-4">
            <div class="card">
                <div class="card-header">
                    <i class="fa fa-user"></i><strong class="card-title pl-2">{{industry.Name}}</strong>
                </div>
                <div class="card-body">
                    <div class="mx-auto d-block">
                        <router-link :to="{ name: 'Industry', params:  {industry}  }">
                            <img class="rounded-circle mx-auto d-block" :src="'dist/'+ industry.imageName" alt="pic">
                        </router-link>
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
        props: ['industryData','tableData'],
        components: {
          
        },
        
        data () {
            return {
              
          }
          
        },
        methods:
        {
            // selectIndustry: function(event) 
            // {
            //     // /components/industry
            //     var targetId = event.currentTarget.id;
            //     alert(targetId);
            // }
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

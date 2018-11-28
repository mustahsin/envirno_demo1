<template>
    <div class="row">
        <div v-for="(industry,index) in industryData" :key="index" class="col-md-3">
            <div class="card">
                <div class="box">
                    <div class="img">
                        <!-- <img src="https://www.planwallpaper.com/static/images/cool-wallpaper-5_G6Qe1wU.jpg"> -->
                        <router-link :to="{ name: 'Industry', params:  {industry}  }">
                            <img class="mx-auto d-block" :src="'dist/'+ industry.imageName" alt="pic">
                        </router-link>
                    </div>
                    <h2>{{industry.Name}}</h2><br>
                    <span class="status">Web Graphic Designer</span></h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et.</p>
                </div>
            </div>
            <!-- <div class="card">
                <div class="card-header">
                    <!-- <i class="fa fa-user"></i> -->
                    <!-- <strong class="card-title">{{industry.Name}}</strong>
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
            </div> --> 
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

<style lang='scss' scoped>

.card{
    margin-top: 20px;
}

.card .box {
    height: 300px;
}
.status {
    font-size:10px;
    background:#e91e63;
    color:#fff;
    display:inline-block;
    padding:4px 10px;
    border-radius:15px;
    width: 10rem;
    align-content: center;
}

</style>

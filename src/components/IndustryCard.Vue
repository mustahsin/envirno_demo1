<template>
    <div class="row">
        <div v-for="(industry,index) in industryData" :key="index" class="col-md-3">
            <div class="card">
                <div class="box">
                    <div>
                        <!-- <img src="https://www.planwallpaper.com/static/images/cool-wallpaper-5_G6Qe1wU.jpg"> -->
                        <router-link :to="{ name: 'Industry', params:  {industry}  }">
                            <img class="factoryimage" :src="'dist/'+ industry.imageName" alt="pic">
                        </router-link>
                    </div>
                    <br>
                    <h5>Name: {{industry.Name}}</h5>
                    <h5>Location: {{industry.Address}}</h5>
                    <p>Currently Live: {{industry.Live}}</p>
                    <p v-bind:class="getFactoryStatus(industry.Status)">ETP Status: {{industry.Status}}</p>
                    <!-- <p class="statusActive">Status: {{industry.Status}}</p> -->
                    
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
            getFactoryStatus(status){
                if(status == 'Good' || status == 'Very Good' || status == 'Excellent')
                {
                    return "stausGood";
                }
                else if(status == 'Low')
                {
                    return "statusLow";
                }
                else if(status == 'Bad')
                {
                    return "statusBad";
                }
            }
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
    padding: 5px;
}

.card p{
    margin-bottom: 0px;
    color: black;
}

.factoryimage{
    width: 100%;
    height: 140px;
}


.statusActive{
    color: #12791a;
}

.statusDanger{
    color: #dd1324;
}

.statusClosed{
    color: #0e021d;
}

.stausGood,statusVeryGood,statusExcellent{
    color: #12791a !important;
}

.statusLow{
    color: orange !important;
}
.statusBad{
    color: red !important;
}

</style>

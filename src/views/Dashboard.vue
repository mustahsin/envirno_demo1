<template>
    <div class="row">
        <industry-card v-bind:industryData="industryList"></industry-card>
        
        <div class="google-maps-page col-md-12">
            <card header-text="Map Location" class="row">
                <google-map v-bind:locationArray="markers"></google-map>
            </card>
        </div>
        <!-- <Table v-bind:waterData="currentData" v-bind:referenceData="referenceData" /> -->
    </div>

    

</template>

<script>
import Info from './dashboard/InfoBox.vue';
import InfoChart from './dashboard/InfoBoxChart.vue';
import InfoChartTwo from './dashboard/InfoBoxChart2.vue';
import RealTime from './dashboard/RealTime.vue';
import Traffic from './dashboard/Traffic.vue';
import EarningStats from './dashboard/EarningStats.vue';
import Download from './dashboard/Download.vue';
import Revenue from './dashboard/Revenue.vue';
import Table from '../../src/components/tables/Tables.vue';
import BarChartJS from '../../src/components/charts/chartjs/scripts/BarChartJs.vue';
import IndustryCard from '../../src/components/IndustryCard.vue';
import GoogleMap from '../../src/components/maps/google-maps/GoogleMap.vue';

export default{
    name: 'dashboard',
    components: {
        Info,
        InfoChart,
        InfoChartTwo,
        RealTime,
        Traffic,
        EarningStats,
        Download,
        Revenue,
        BarChartJS,
        Table,
        GoogleMap,
        IndustryCard,
        
    },
    data () {
        return {
            currentData:{
            Temperature:25,
                PH:4.0,
                Humidity:77,
                Flow_speed:6
            },
            allFactoryData:[{
                    Temperature:25,
                    PH:4.0,
                    Humidity:77,
                    Flow_speed:6
                },
                {
                    Temperature:26,
                    PH:5.0,
                    Humidity:57,
                    Flow_speed:5
                },
                {
                    Temperature:35,
                    PH:9.0,
                    Humidity:99,
                    Flow_speed:2
                }
            ],
            referenceData:{
                Temperature:28,
                  PH:7.0,
                  Humidity:68,
                  Flow_speed:6
              },
            industryList:[],
            locationArray:[
                {
                    name:'Purbachal factory',
                    lat:23.83,
                    long:90.50
                }
            ],
            markers: [
        { position: { lat:23.838733, lng:  90.505829 } },
        { position: { lat: 24.043177, lng: 91.015026 } },
        { position: { lat: 23.890211, lng: 90.332650 } }
      ]
        }
          
    },
    computed:
    {
        addDummyFactory()
        {
            var factory1 =
            {
                Name:'Purbachal factory',
                imageName:'etp1.jpg',
                Status:'Very good',
                Address:'Purbachal express',
                Total_polution:12,
                sensorData:this.allFactoryData[0]
            }
            this.industryList.push(factory1);

            var factory2 =
            {
                Name:'Ashuganj factory',
                Status:'Good',
                imageName:'etp2.jpg',
                Address:'Ashuganj',
                Total_polution:19,
                sensorData:this.allFactoryData[1]
            }
            this.industryList.push(factory2);

            var factory3 =
            {
                Name:'Savar factory',
                imageName:'etp3.jpg',
                Status:'Low',
                Address:'Savar',
                Total_polution:28,
                sensorData:this.allFactoryData[2]
            }
            this.industryList.push(factory3);

            //alert(this.industryList[0].sensorData.Temperature); 
        }
    },
    mounted ()
    {
        this.addDummyFactory();
    }
}


</script>

<style lang="scss">
   .google-maps-page{
    .card-body{
      height: 400px;
      width: 100%;
      margin: 0;
    }
  }
</style>
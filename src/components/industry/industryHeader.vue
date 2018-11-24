<template>
    <header id="industry-header" class="header">
        
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <strong class="card-title">{{ industryName}}<small><span class="badge badge-success float-right mt-1">{{status}}</span></small></strong>
                </div>
                 
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                        <p class="card-text">Factory Description here.</p>
                        </div>
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-2 float-right">
                        <img class=".rounded-circle mx-auto d-block" :src="'dist/'+ industry.imageName" alt="pic">
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <Table v-bind:waterData="tableData" v-bind:referenceData="referenceData"/>
    </header>
</template>


<script>

import Table from '../../components/tables/Tables.vue';


    export default {
    props: ['industry'],
    name: 'industry-header',
     components: {
         Table
     },
    data (){
      return{
        industryName: '',
        status:'',
        tableData:{},
        referenceData:{
            Temperature:28,
                PH:7.0,
                Humidity:68,
                Flow_speed:6
        }
      }
    },
    methods: {
        
    },
    mounted() {
       
        if (this.industry) {
            this.industryName = this.industry.Name;    
            this.status = this.industry.Status;
            this.tableData = this.industry.sensorData;
        }
        
         //alert('temperature : ' + this.tableData.Temperature)
    }
}
</script>

<style>
   
</style>
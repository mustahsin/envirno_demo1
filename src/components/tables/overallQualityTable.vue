<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <card header-text="Status Table for all Factory">
          <div class="table-responsive">
            <table class="table table-sm color-icon-label-table table-hover table-bordered" >
              <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Factory</th>
                  <th scope="col"> <a href="#">Status (temp)</a></th>
                  <th scope="col"> <a href="#">Status (PH)</a></th>
                  <th scope="col"> <a href="#">Status (humidity)</a></th>
                  <th scope="col"> <a href="#">Status (Water flow)</a></th>
              </tr>
              </thead>
              <tbody>
                  <tr v-for="item in allFactoryList.length" :key="item">
                      <td>{{item}}</td>
                      <td> <a href="#">{{getFactoryName(item-1)}}</a> </td>
                      <td>{{getFactoryStatus(item-1,'temperature')}}</td>
                      <td>{{getFactoryStatus(item-1,'ph')}}</td>
                      <td>{{getFactoryStatus(item-1,'hum')}}</td>
                      <td>{{getFactoryStatus(item-1,'flow')}}</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'OverallQuality',
    //props: ['waterData','referenceData'],
    data (){
        return{
            factoryList :['Factory A','Factory B','Factory C','Factory D','Factory E','Factory F','Factory G'],
            allFactoryList:[],
            paramList:['Temprature','PH','Humidity','Water flow']
        }
        
        //factoryList:[]
    },
    computed: {
        testVuex(){
            return this.$store.state.test;
        }
    },
    methods : {
        addData() {
            var statusDict = [];

            var ab = this.$store.state.test;

            var factoryName = 'Factory A';
            var statusList = {
                'temperature':'Good',
                'ph':'Bad',
                'hum':'Bad',
                'flow':'Very Good'
            };

            var FactoryDict = {};
            FactoryDict['statusList'] = statusList;
            

            var FactoryInfo = {
                [factoryName]: FactoryDict
            };

            this.allFactoryList.push(FactoryInfo);
            //console.log(FactoryInfo);

            factoryName = 'Factory B';

            statusList = {
                'temperature':'Bad',
                'ph':'Bad',
                'hum':'Good',
                'flow':'Very Good'
            };
            
            FactoryDict = {};
            FactoryDict['statusList'] = statusList;

            FactoryInfo = {
                [factoryName]: FactoryDict
            };

            this.allFactoryList.push(FactoryInfo);

            factoryName = 'Factory C';
            statusList = {
                'temperature':'Bad',
                'ph':'Sensor not working',
                'hum':'Bad',
                'flow':'Bad'
            };
            
            FactoryDict = {};
            FactoryDict['statusList'] = statusList;

            FactoryInfo = {
                [factoryName]: FactoryDict
            };

            this.allFactoryList.push(FactoryInfo);

            factoryName = 'Factory D';
            statusList = {
                'temperature':'Sensor not working',
                'ph':'Good',
                'hum':'Good',
                'flow':'Sensor not working'
            };
            
            FactoryDict = {};
            FactoryDict['statusList'] = statusList;

            FactoryInfo = {
                [factoryName]: FactoryDict
            };

            this.allFactoryList.push(FactoryInfo);

            factoryName = 'Factory E';
            statusList = {
                'temperature':'Good',
                'ph':'Good',
                'hum':'Good',
                'flow':'Bad'
            };
            
            FactoryDict = {};
            FactoryDict['statusList'] = statusList;

            FactoryInfo = {
                [factoryName]: FactoryDict
            };

            this.allFactoryList.push(FactoryInfo);

            factoryName = 'Factory F';
            statusList = {
                'temperature':'Very Good',
                'ph':'Very Good',
                'hum':'Good',
                'flow':'Bad'
            };
            
            FactoryDict = {};
            FactoryDict['statusList'] = statusList;

            FactoryInfo = {
                [factoryName]: FactoryDict
            };

            this.allFactoryList.push(FactoryInfo);

            factoryName = 'Factory G';
            statusList = {
                'temperature':'Good',
                'ph':'Good',
                'hum':'Good',
                'flow':'Good'
            };
            
            FactoryDict = {};
            FactoryDict['statusList'] = statusList;

            FactoryInfo = {
                [factoryName]: FactoryDict
            };

            this.allFactoryList.push(FactoryInfo);

            factoryName = 'Factory H';
            statusList = {
                'temperature':'Sensor data missing',
                'ph':'Good',
                'hum':'Good',
                'flow':'Good'
            };
            
            FactoryDict = {};
            FactoryDict['statusList'] = statusList;

            FactoryInfo = {
                [factoryName]: FactoryDict
            };

            this.allFactoryList.push(FactoryInfo);

            factoryName = 'Factory I';
            statusList = {
                'temperature':'Very Bad',
                'ph':'Bad',
                'hum':'Sensor Data missing',
                'flow':'Bad'
            };
            
            FactoryDict = {};
            FactoryDict['statusList'] = statusList;

            FactoryInfo = {
                [factoryName]: FactoryDict
            };

            this.allFactoryList.push(FactoryInfo);

            factoryName = 'Factory J';
            statusList = {
                'temperature':'Good',
                'ph':'Good',
                'hum':'Very Good',
                'flow':'very Good'
            };
            
            FactoryDict = {};
            FactoryDict['statusList'] = statusList;

            FactoryInfo = {
                [factoryName]: FactoryDict
            };

            this.allFactoryList.push(FactoryInfo);
            
        },
        getFactoryName(index)
        {
            var factory = this.allFactoryList[index];
            var keys = Object.keys(factory);
            //console.log('here ' + keys);
            return keys[0];
        },
        getFactoryStatus(factID,key)
        {
            var factory = this.allFactoryList[factID];
            var keys = Object.keys(factory);
            var factName = keys[0];

            console.log('factory name = '+ factName);
            var factDict = factory[factName];

            var statusList = factDict['statusList'];
            
            console.log('status = '+ key + statusList[key]);
            return statusList[key];

        }
    },
    mounted(){
        this.addData();
    }
}
</script>

<style lang="scss" scoped>

.table thead tr{
    color: #007bff;
  }
.error-icon{
    color: #e34a4a;
  }
  .success-icon {
    display: inline-block;
    color: #4ae387;
  }
  .table-sm th, .table-sm td{
    padding: .7rem;
  }
  .color-icon-label-table {
    td:first-child {
      width: 1rem;
    }
  }  

</style>


<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <card header-text="Current Water Data Table">
          <div class="table-responsive">
            <table class="table table-sm color-icon-label-table table-hover table-bordered" >
              <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Parameters</th>
                  <th scope="col">Current value</th>
                  <th scope="col">High</th>
                  <th scope="col">Low</th>
                  <th scope="col">24 hour Avg</th>
                  <th scope="col">Reference</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in 4" :key="item">
                <td>{{item}}</td>
                <td>{{Object.keys(waterData)[item-1]}}</td>
                <td>{{waterData[Object.keys(waterData)[item-1]]}}</td>
                <td>{{maxData[item-1]}}</td>
                <td>{{minData[item-1]}}</td>
                <td>{{avgData[item-1]}}</td>
                <td>{{referenceData[Object.keys(referenceData)[item-1]]}}</td>
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
    import Vue from 'vue'

    import DataTable from './vuetable-2/DataTable.vue'
    import BadgeColumn from './BadgeColumn.vue'
    
    Vue.component('badge-column', BadgeColumn);

    import FieldsDef from './vuetable-2/data/fields-definition';
    import ItemsPerPageDef from './vuetable-2/data/items-per-page-definition';

    export default {
        name: 'Table',
        props: ['waterData','referenceData'],
        components: {
          DataTable
        },
        
        data () {
            return {
              apiUrl: 'https://vuetable.ratiw.net/api/users',
              apiMode: true,
              tableFields: FieldsDef.tableFields,
              itemsPerPage: ItemsPerPageDef.itemsPerPage,
              sortFunctions: FieldsDef.sortFunctions,
              paginationPath: '',
              allData:[],
              avgData:[],
              maxData:[],
              minData:[]
          }
          
        },
        methods:
        {
          addrealData()
          {
            for (var i=1;i<10;i++)
            {
              var temp = 24+(i+1)*1;
              var ph = 3.5 + (i*0.1);
              var hum = 50 + (i*0.5);
              var flow = 4.5 + (i*0.4);

              var dict = {};
              dict['Temperature'] = temp;
              dict['PH'] = ph;
              dict['Humidity'] = hum;
              dict['Flow_speed'] = flow;

              this.allData.push(dict);
            }
          },
          getAverageFor(index)
          {
            var sum = 0;
              var res=0;
              for(var i=0;i<this.allData.length;i++)
              {
                  var entity = this.allData[i];
                  var keyName = Object.keys(entity)[index];
                  var paramValue = this.allData[i][keyName];
                  
                  sum = sum+paramValue;
              }
              res = sum/this.allData.length;
              res = res.toFixed(2);
              //alert("res : " + res);
              return res;
          },
          getMaxFor()
          {

          },
          getMax()
          {
              var max_tmp,max_ph,max_hum,max_flow;
              max_tmp = 33;
              max_ph = 11.0;
              max_hum = 90;
              max_flow = 9.1;

              this.maxData.push(max_tmp);
              this.maxData.push(max_ph);
              this.maxData.push(max_hum);
              this.maxData.push(max_flow);

          },
          getMin()
          {
              // var dict ={};
              // var max_tmp,max_ph,max_hum,max_flow;
              // max_tmp = 33;
              // max_ph = 11.0;
              // max_hum = 90;
              // max_flow = 9.1;

              this.minData.push('20');
              this.minData.push(3.0);
              this.minData.push(34);
              this.minData.push(4);
          },
          assignAvg ()
          {
            var dict = {};
            var avg_temp,avg_ph,avg_hum,avg_flow;
            avg_temp = this.getAverageFor(0);
            avg_ph = this.getAverageFor(1);
            avg_hum = this.getAverageFor(2);
            avg_flow = this.getAverageFor(3);

            this.avgData.push(avg_temp);
            this.avgData.push(avg_ph);
            this.avgData.push(avg_hum);
            this.avgData.push(avg_flow);
          }
        },
        created ()
        {
          this.addrealData();
          this.assignAvg();
          this.getMax();
          this.getMin();
          //alert("Tablees.vue component created");
        },
    }
</script>

<style lang="scss">
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

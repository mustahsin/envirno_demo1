<template>
    <div class="Home">
        <div id="topmenu">
            <TopMenu/>
        </div>
    
        <div class="col-md-12">
            <v-container>
                <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
    
                <v-layout row wrap class="mt-2">
                    <v-flex xs12>
                        <v-carousel>
                            <v-carousel-item v-for="homePic in homePageList" v-bind:src="homePic.imageUrl" :key="homePic.id">
                            </v-carousel-item>
    
                        </v-carousel>
                    </v-flex>
                </v-layout>
    
            </v-container>
    
        </div>
    
        <div class="row" id="Content2">
            <div class="col-sm-6" id="homeDescription">
                <img id="" src="../../src/images/test_etp.jpg" alt="Logo">
            </div>
    
            <div class="col-sm-6">
                <div class="card border border-primary">
                    <div class="card-header">
                        <h2 class="card-title">Effluent Treatment Plant</h2>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Effluent Treatment Plant or ETP is one type of waste water treatment method which is particularly designed to purify industrial waste water for its reuse and it’s aim is to release safe water to environment from the harmful effect
                            caused by the effluent. Industrial effluents contain various materials, depending on the industry. Some effluents contain oils and grease, and some contain toxic materials (e.g., cyanide). Effluents from food and beverage factories
                            contain degradable organic pollutants. Since industrial waste water contains a diversity of impurities and therefore specific treatment technology called ETP is required. The ETP Plant works at various levels and involves various
                            physical, chemical, biological and membrane processes to treat waste water from different industrial sectors like chemicals, drugs, pharmaceutical, refineries, dairy, ready mix plants & textile etc.
                        </p>
                    </div>
                </div>
            </div>
    
            <div class="container" id="featureList">
                <h2 class="text-xs-center headline mb-5 grey--text">
                    <span>Basic Features of Envirotics</span>
                </h2>
                <div class="layout row wrap justify-center">
                    <div class="flex mx-3 shrink">
                        <div class="layout my-2 align-center">
                            <i aria-hidden="true" class="v-icon mr-3 material-icons theme--light green--text" style="font-size: 36px;">check</i>
                            <div><span class="subheading">GPRS based solution, no need of laying communication cables</span></div>
                        </div>
                        <div class="layout my-2 align-center">
                            <i aria-hidden="true" class="v-icon mr-3 material-icons theme--light green--text" style="font-size: 36px;">check</i>
                            <div><span class="subheading">Live video feeds from an IP camera</span></div>
                        </div>
                        <div class="layout my-2 align-center">
                            <i aria-hidden="true" class="v-icon mr-3 material-icons theme--light green--text" style="font-size: 36px;">check</i>
                            <div><span class="subheading">Various visual representations after automated data analysis</span></div>
                        </div>
                        <div class="layout my-2 align-center">
                            <i aria-hidden="true" class="v-icon mr-3 material-icons theme--light green--text" style="font-size: 36px;">check</i>
                            <div><span class="subheading">A Cloud-based solution, no requirements for software installation</span></div>
                        </div>
                        <div class="layout my-2 align-center">
                            <i aria-hidden="true" class="v-icon mr-3 material-icons theme--light green--text" style="font-size: 36px;">check</i>
                            <div><span class="subheading">Automatic process status monitoring</span></div>
                        </div>
                        <div class="layout my-2 align-center">
                            <i aria-hidden="true" class="v-icon mr-3 material-icons theme--light green--text" style="font-size: 36px;">check</i>
                            <div><span class="subheading">Alarm Over email and SMS and reset reports</span></div>
                        </div>
                    </div>
                    <div class="flex mx-3 shrink">
                        <div class="layout my-2 align-center">
                            <i aria-hidden="true" class="v-icon mr-3 material-icons theme--light green--text" style="font-size: 36px;">check</i>
                            <div><span class="subheading">24/7 live with a backup system</span></div>
                        </div>
                        <div class="layout my-2 align-center">
                            <i aria-hidden="true" class="v-icon mr-3 material-icons theme--light green--text" style="font-size: 36px;">check</i>
                            <div><span class="subheading">Hierarchical tree view of all active sites at a glance</span></div>
                        </div>
                        <div class="layout my-2 align-center">
                            <i aria-hidden="true" class="v-icon mr-3 material-icons theme--light green--text" style="font-size: 36px;">check</i>
                            <div><span class="subheading">System and device level dashboards with customized widgets</span></div>
                        </div>
                        <div class="layout my-2 align-center">
                            <i aria-hidden="true" class="v-icon mr-3 material-icons theme--light green--text" style="font-size: 36px;">check</i>
                            <div><span class="subheading">Geographical data report</span></div>
                        </div>
                        <div class="layout my-2 align-center">
                            <i aria-hidden="true" class="v-icon mr-3 material-icons theme--light green--text" style="font-size: 36px;">check</i>
                            <div><span class="subheading">Real-time display on digital display boards</span></div>
                        </div>
                        <div class="layout my-2 align-center">
                            <i aria-hidden="true" class="v-icon mr-3 material-icons theme--light green--text" style="font-size: 36px;">check</i>
                            <div><span class="subheading">Web-based data management with all the required functionalities</span></div>
                        </div>
                        <div class="layout my-2 align-center">
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
</template>

<script>
    import TopMenu from '../../src/a_mini_components/TopMenu.vue'
    
    export default {
        name: 'home',
        components: {
            TopMenu
        },
        data() {
            return {
                active: 'home',
                homePageList: [{
                        imageUrl: 'http://www.butec.com.lb/wp-content/uploads/2015/01/Tripoli-Wastewater-Treatment-Plant3-1140x555.jpg'
                    },
                    {
                        imageUrl: 'http://www.acroamawatertreatment.com/images/effluent-treatment-plant-manufacturer-in-chennai.jpg'
                    },
                    {
                        imageUrl: 'http://www.makesindiaclean.com/wp-content/uploads/2016/08/Effluent-TreatmentPlant.jpg'
                    },
                    {
                        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2I4vV2b4Ep4991JKMb9syzV5jZOvC_M76shHg2nD1ht9g4M4PJA'
                    },
                    {
                        imageUrl: 'http://4.imimg.com/data4/YE/SM/MY-995345/effluent-treatment-plant-for-paint-shop-500x500.jpg'
                    }
                ],
                meetups: [{
                        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
                        id: 'afajfjadfaadfa323',
                        title: 'Meetup in New York'
                    },
                    {
                        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
                        id: 'aadsfhbkhlk1241',
                        title: 'Meetup in Paris'
                    }
                ]
            }
    
        }
    
    }
</script>

<style lang="scss" scoped>
    #homeDescription {
        //margin-top: 80px;
    }
    
    #Content2 {
        margin-top: 75px;
    }
    
    #featureList {
        margin-top: 75px;
    }
    
    .Home {
        font-family: sans-serif;
    }
    
    .card-title {
        font-size: 30px;
    }
    
    #topmenu {
        // position: fixed;
        // z-index: 999;
        // margin-bottom: 100px;
    }
</style>
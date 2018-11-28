<template>
    <div id="topmenu">
        <div class="row">
            <div class="col-md-2">
                <img id="app-logo" src="../../src/images/envirotics_logo.png" alt="Logo">
            </div>
            <div class="col-md-5">
                <nav v-bind:class="active" v-on:click.prevent>
                    <a href="#" class="home" v-on:click="makeActive('home')">Home</a>
                <a href="#" class="projects" v-on:click="makeActive('projects')">Our Goal</a>
                <a href="#" class="services" v-on:click="makeActive('services')">About</a>
                <a href="#" class="contact" v-on:click="makeActive('contact')">Contact</a>
                </nav>
                
            </div>
            <div class="col-md-4">
                <p id="Register" align="right">
                    <router-link to="/auth/login">
                        <a href="#" class="home" v-on:click="">Login</a>
                    </router-link>
                    
                    <a href="#" class="home" v-on:click="makeActive('home')">Register</a>
                </p>
            </div>
            
            <!-- <div>
                
            </div> -->
        </div>
        

        
    </div>
</template>

<script>

export default {
  components:{
      
  },
  data () {
      return{
          active: 'home'
    }
  },
  methods: {
    makeActive: function(item){
        this.active = item;
    }
  }
  
}
</script>

<style lang="scss" scoped>

#app-logo{
    width: 140px;
    height: 80px;
}

*{
    margin:0;
    padding:0;
}

body{
    font:15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
    text-align:center;
}

// a, a:visited {
//     outline:none;
//     color:#28e276;
// }

a:hover{
    text-decoration:none;
}

section, footer, header, aside, nav{
    display: block;
}

nav{
    display:block;
    margin:auto;
    background-color:#292b35;
    box-shadow:0 1px 1px #ccc;
    border-radius:2px;
}

nav a{
    display:inline-block;
    padding: 18px 30px;
    color:#fff !important;
    font-weight:bold;
    font-size:10px;
    text-decoration:none !important;
    line-height:1;
    text-transform: uppercase;
    background-color:transparent;

    -webkit-transition:background-color 0.25s;
    -moz-transition:background-color 0.25s;
    transition:background-color 0.25s;
}

#Register{
    // padding-top: 25%;
    // padding-bottom: 25%;
}

a {
    font-weight:bold;
    font-size:12px;
    //-moz-box-sizing: border-box;
  //display:flex;/*CSS3*/
}

nav a:first-child{
    border-radius:2px 0 0 2px;
}

nav a:last-child{
    border-radius:0 2px 2px 0;
}

nav.home .home,
nav.projects .projects,
nav.services .services,
nav.contact .contact{
    background-color:#e35885;
}

p{
    font-size:22px;
    font-weight:bold;
    color:#7d9098;
    vertical-align: middle;
}

p b{
    color:#ffffff;
    display:inline-block;
    padding:5px 10px;
    background-color:#c4d7e0;
    border-radius:2px;
    text-transform:uppercase;
    font-size:18px;
}
.resource {
  margin: 20px 0;
}




</style>
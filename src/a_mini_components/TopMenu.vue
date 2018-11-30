<template>
    <div id="topmenu">
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
        <nav class="navbar navbar-expand-sm   navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
            <img class="app-logo" src="../../src/images/envirotics_logo.png" alt="Logo">
    
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Our Goal</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact us</a>
                    </li>
                </ul>

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/auth/login">
                            <a href="#" class="nav-link">Login</a>
                        </router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-default my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        <!-- <div class="row">
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
                
            </div> -->
    </div>
</template>

<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js">
    
</script>

<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
    
</script>

<script>
    export default {
        components: {
    
        },
        data() {
            return {
                active: 'home'
            }
        },
        methods: {
            makeActive: function(item) {
                this.active = item;
            }
        }
    
    }
</script>

<style lang="scss" scoped>
    .app-logo
    {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
    .navbar {
        background: #0ccc1c !important;
    }
    
    .navbar .nav-item .nav-link {
        color: #eee !important;
        font-weight: bold;
        width: 100px !important;
    }
    
    .navbar .nav-item .nav-link:hover .navbar .nav-item .nav-link {
        color: red !important;
    }
    .btn-outline-default{
        color: white;
    }
</style>
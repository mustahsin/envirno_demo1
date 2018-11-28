<template>
  <div class="login">

    <card header-text="Welcome !">
      <div class="card-body card-block">
        <form @submit.prevent="onLogin" name="login">
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-envelope"></i></div>
              <input type="email" id="email" name="email" placeholder="Email" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-asterisk"></i></div>
              <input type="password" id="password" name="password" placeholder="Password" class="form-control">
            </div>
          </div>
          <div class="form-actions form-group">
              <button type="submit" class="btn btn-success btn-md">Log In</button>
              <button type="submit" class="btn btn-primary btn-md float-right">
                <router-link class='link text-light float-right' :to="{name: 'Register'}">Create Account</router-link>
              </button>
          </div>
        </form>
      </div>
    </card>

  </div>
</template>

<script>
export default {
  name: 'Login',
  methods:{
    onLogin () {
      this.$store.state.isAuthCompleted = true;
      this.$router.replace({ path : '/dashboard' });
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-title{
    padding-left: 20px;
  }
</style>
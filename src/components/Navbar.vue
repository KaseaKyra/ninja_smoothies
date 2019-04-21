<template>
  <div class="row">
    <div class="col-12">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="nav-brand font-weight-bold text-white" to="/">Ninja Smoothies</router-link>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <!--<router-link tag="li" to="/" class="nav-item" active-class="active">-->
            <!--<a class="nav-link">Link</a>-->
            <!--</router-link>-->
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data () {
      return {}
    }
  }
</script>

<style scoped>

</style>

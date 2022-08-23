<template>
  <!-- navbar -->
  <NavBar />
  <router-view></router-view>
  <!-- <HomeApp/> -->

  <!-- navbar -->
</template>



<script>
import NavBar from './components/NavBar.vue';
export default {
  components: {
    NavBar,
  },
  data: function () {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    login: function () {
      this.isLoggedIn = true
    },
    logout: function () {
      this.isLoggedIn = false
    }
  }
}

</script>

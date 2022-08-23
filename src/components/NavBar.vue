<template>
<nav id="navbar_top" class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container">
    <a class="navbar-brand" href="#">Vue Router</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link class="nav-link px-3 active" to="/">Home</router-link>
        </li>
      </ul>
      <!-- <ul class="navbar-nav d-flex" v-if='!isLogged'>
        <li class="nav-item">
          <router-link class="nav-link px-3" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link px-3" to="/">Register</router-link>
        </li>
      </ul> -->
      <ul class="navbar-nav d-flex" v-if='!isLogged'>
      <li class="nav-item dropdown">
        <ul id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <li>
            <router-link class=dropdown-item to="/">
              <img src="https://imgs.search.brave.com/A9SCLr8EOfiGfpwV8Es0v8RmgGrLlBBdfXXD4XOF5Rs/rs:fit:452:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/dWRNWDRaR2J2VDJf/R0pUeDJjNEdnSGFI/dyZwaWQ9QXBp" alt="" width="100%">
            </router-link>
          </li>
        </ul>
      </li>
      </ul>

    </div>
  </div>
</nav>
</template>

<script>
  export default {
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
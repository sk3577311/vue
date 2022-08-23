<template>
<h1>dfsb</h1>
</template>
 
<script>
export default {
    data: function () {
        return {
            isLoggedIn: false,
            user: {
                email: '',
                password: '',
            },
        }
    },
    methods: {
        login: function () {
            this.isLoggedIn = true
        },
        logout: function () {
            this.isLoggedIn = false
        },
        register: function () {
            this.isLoggedIn = true
            console.log(this.user);
        }
    }
}
</script>

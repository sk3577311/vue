<template>
<div class="container">
    <div class="row">
        <div class="col">
            <pre>{{user}}</pre>
        </div>
    </div>
</div>
</template>

<script>
import { UserService } from '../services/UserService';

export default {
    data : function(){
        return {
            loading : false,
            user : {},
            errorMessage : null,
        }
    },
    created : async function() {
        let userID = this.$route.params.userID;
        try {
            this.loading = true;
            let response = await UserService.getUser(userID);
            this.loading = false;
            this.user = response.data;
        } catch(error) {
            this.loading = false;
            this.errorMessage = error;
        }
    }
}
</script>
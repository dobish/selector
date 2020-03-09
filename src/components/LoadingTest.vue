<template>
    <div class="post">
        <p id="img" v-show="loading" >Loaded!</p>
        <p v-if="!loading">Loading.........</p>
    </div>
</template>

<script>
    export default {
        name: "LoadingTest",
        data () {
            return {
                loading: false,
                post: null,
                error: null,

            }
        },
        mounted(){

        },

        methods: {

        }
    }
</script>

<style scoped>

</style>

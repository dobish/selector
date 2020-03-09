<template>
    <div class="parameter-values">
        <!--<div v-for="(sensor, index) in sensors" :key="index">
        </div>-->

        <div class="sensor-image">
            <img alt="Vue logo" src="@/assets/DOL26.png">
        </div>
        <div v-for="(sensor) in sensors" :key="sensor._id">
            <Parameter  :sensor="sensor"></Parameter>
        </div>
        <router-link :to="{path: '/final'}">
            <button class="parameter-button">SHOW SENSORS</button>
        </router-link>
    </div>
</template>

<script>
    const API_URL = "http://localhost:4000/sensors";
    import Parameter from "@/components/Parameter";
    export default {
        props: {
            sensor: {type: Object}
            },
        components: {Parameter},
        name: "parametersTest",
        data: function(){
            return {
                title: 'parameter',
                sensors: [],
                selected: [],

            }
        },
        methods: {

        },
        mounted() {
            fetch(API_URL)
                .then(response => response.json())
                .then(result => {
                    this.sensors = result;
                });

            //this.sensor = this.sensors
        },
    }
</script>

<style scoped>
.parameter-values {

}

img {
    width: 100%;
    position: relative;
    margin-bottom: 8%;
}


</style>

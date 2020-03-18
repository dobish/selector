<template>
    <div class="parameter-values">
        <!--<div v-for="(sensor, index) in sensors" :key="index">
        </div>-->

    <!--  <div class="sensor-image">
            <img alt="Vue logo" src="@/assets/DOL26.png">
        </div>-->




        <div class="value-card" v-for="(sensor) in sensors" :key="sensor._id">
            <Parameter  :sensor="sensor"></Parameter>
        </div>
        <router-link :to="{path: '/final'}">
            <button class="submit-button">SHOW SENSORS</button>
        </router-link>
    </div>
</template>

<script>
    const API_URL = "api/sensors";
    import Parameter from "@/components/Parameter";
    export default {
        props: {
            sensor: {type: Object}
        },
        components: {Parameter},
        name: "parametersTest",
        data: function(){
            return {
                title: 'parameters',
                sensors: [],
                selected: [],
                images: ['DOL27_M30.jpg', '../assets/Sensors/DOL26.jpg', '../assets/Sensors/DOL26_18.jpg']

            }
        },
        methods: {

        },
        mounted() {
            fetch(API_URL)
                //.then(response => response.json())
                .then(response => response.text())
                .then(text => console.log(text))
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

    .value-card {
        background-color: white;
        width: 90%;
        margin-left: 5%;
        margin-bottom: 2%;
        border-radius: 10px;
        -webkit-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
        -moz-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
        box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
    }

    .image-card{
        background-color: white;
        width: 100%;
        height: 200px;
    }

    .submit-button {
        border: 1px solid #004077;
        border-radius: 20px;
        display: inline-block;
        color: white;
        margin-bottom: 5%;
        background-color: #004077;
        margin-top: 5%;
        padding: 1% 4%;
    }
</style>

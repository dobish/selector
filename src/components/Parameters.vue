<template>
    <div class="parameter-values">
        <!--<div v-for="(sensor, index) in sensors" :key="index">
        </div>-->

    <!--  <div class="sensor-image">
            <img alt="Vue logo" src="@/assets/DOL26.png">
        </div>-->


        <Name :toggled="toggleNames" @closeNameModal="nameModal"></Name>
        <main>
            <div class="values">
                <div class="value-card">
                    <button @click="nameModal">Sensor name</button>
                </div>
                <div class="value-card" v-for="(sensor) in sensors" :key="sensor._id">
                    <Parameter :sensor="sensor"></Parameter>
                </div>
            </div>
            <div class="final">
                <finalscreen v-if="$mq === 'desktop' || $mq=== 'tablet'"></finalscreen>
            </div>
        </main>
        <router-link :to="{path: '/final'}" v-if="$mq === 'mobile'">
            <button class="submit-button">SHOW SENSORS</button>
        </router-link>
    </div>
</template>

<script>
    import finalscreen from "@/components/FinalScreen";
    const API_URL = "api/parameters";
    import Parameter from "@/components/Parameter";
    import Name from "@/components/Name"

    export default {
        props: {
            sensor: {type: Object}
        },
        components: {finalscreen, Parameter, Name},
        name: "Parameters",
        data: function(){
            return {
                title: 'parameters',
                sensors: [],
                selected: [],
                images: ['DOL27_M30.jpg', '../assets/Sensors/DOL26.jpg', '../assets/Sensors/DOL26_18.jpg'],
                sensorNames: [
                    {name: 'DOL 26', img: 'http://maciekwozniak.dk/dol-images/dol26.png'},
                    {name: 'DOL 27', img: 'http://maciekwozniak.dk/dol-images/dol27.png'},
                    {name: 'DOL 28', img: 'http://maciekwozniak.dk/dol-images/dol28.png'}
                ],
                toggleNames: false

            }
        },
        methods: {
            nameModal: function () {
                this.toggleNames = !this.toggleNames
            }
        },
        mounted() {
            fetch(API_URL)
                .then(response => response.json())
                //.then(response => response.text())
                //.then(text => console.log(text))
                .then(result => {
                    this.sensors = result;
                    console.log(result)
                });

            //this.sensor = this.sensors
        },
    }
</script>

<style scoped>
.sensor-img {
    width: 100%;
}

    /*----------MOBILE SECTION-----------*/
    @media only screen and (max-width: 600px){
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
    }

    /*----------TABLET SECTION-----------*/
    @media only screen and (min-width: 601px) and (max-width: 999px){
        body, html{
            overflow: hidden;
        }
        .value-card {
            width: 90%;
            margin-bottom: 30%;
            margin-right: 0;
            margin-left: 5%;
            color: #004077;
        }
        .parameter-values {
            background-color: rgba(0, 64, 119, 0.05);
            align-items: flex-start;
            border-radius: 0;
            overflow: visible;

        }
        .values {
            float: left;
            background-color: white;
            width: 12%;
            padding-left: 0;
            padding-top: 3%;
            position: fixed;
            left: 0;
            height: 100vh;
            -webkit-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
            -moz-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
            box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
        }
        .final {
            width: 80%;
            overscroll-behavior-y: contain;
            margin-left: 15% ;
        }
        main {
            display: flex;
            width: 100%;
            justify-content: space-around;
            overflow: visible;
        }
    }

    /*----------DESKTOP SECTION-----------*/
    @media only screen and (min-width: 1000px){
        body, html{
            overflow: hidden;
        }
        .value-card {
            width: 90%;
            margin-bottom: 30%;
            margin-right: 0;
            margin-left: 5%;
            color: #004077;
        }
        .parameter-values {
            background-color: rgba(0, 64, 119, 0.05);
            align-items: flex-start;
            border-radius: 0;
            overflow: visible;

        }
        .values {
            float: left;
            background-color: white;
            width: 12%;
            padding-left: 0;
            padding-top: 3%;
            position: fixed;
            left: 0;
            height: 100vh;
            -webkit-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
            -moz-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
            box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
        }
        .final {
            width: 80%;
            overscroll-behavior-y: contain;
            margin-left: 15% ;
        }
        main {
            display: flex;
            width: 100%;
            justify-content: space-around;
            overflow: visible;
        }
    }
</style>

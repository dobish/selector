<template>
    <div class="modal" v-if="toggle">
        <div class="modal-content" v-on-clickaway="closeModal"  v-for="(help, index) in filteredContent" :key="index + 123">
            <button @click.prevent="closeModal()" ref="button" class="closeButton">X</button>
            <div class="image"><img v-bind:src="help.img" alt=""></div>
            <div>
                <h2> {{ help.title }}</h2>
                    <p class="mainText" v-html="help.text"></p>
            </div>
        </div>
    </div>
</template>

<script>

    import { mixin as clickaway } from 'vue-clickaway';

    export default {
        mixins: [clickaway],
        name: "Guide",
        props: {
            toggle: {
                required: true
            },
            value: {
                required: true
            }
        },
        data: function(){
            return {
                title: 'modal-popup',
                content:[
                    {title: 'Sensor types', text: '<b>PNP:</b> Output is connected to positive supply voltage when detecting material, and floating otherwise. \n' +
                            'PNP sensors has both NC and NO output.</br></br> <b>NPN:</b> Output is connected to negative supply voltage when detecting material, and floating otherwise.\n' +
                            'NPN sensors has both NC and NO output.</br></br><b>SCR:</b> A SCR is a two wire sensor, and is to be connected in series with the load. ' +
                            'SCR sensors come as either Make, Break or programmable.</br>Make sensors activates the load when the sensor is detecting material, Break sensors activates the load when not detecting material, ' +
                            'Programmable sensors can be set either Make or Break by trimmer (DOL versions) or by the SmartAdjust app (iDOL versions)</br></br><b>Relay: </b> Relay sensors has an internal relay with COM, NO and NC electrically isolated from the sensor supply voltage. ' +
                            'Relay sensors can switch higher currents than PNP, NPN and SCR </br></br>' +
                            'Check datasheet for voltage and current rating for the specific sensor.', img: 'http://maciekwozniak.dk/dol-images/sensor_types_guide-02.jpg'},
                    {title: 'Diameter', text: 'The capacitive sensors can be supplied in three different diameters, 18mm, 30mm and 33mm.\n' +
                            'The 33mm sensors are conical, with a diameter of 31mm at the sensing end and 33mm at the cable end.\n', img: ''},
                    {title: 'Thread', text: 'A smooth sensor is good for mounting in e.g. a PG cable gland.\n' +
                            'A sensor with threads are easy to mount using nuts or in a threaded hole. The sensor is supplied with two plastic nuts.\n', img: 'http://maciekwozniak.dk/dol-images/Guide_Thread.jpg'},
                    {title: 'Delay', text: 'Delay text', img: 'http://maciekwozniak.dk/dol-images/Sensor_delay.jpg'},
                ],
                image: ''
            }
        },
        methods: {
            closeModal: function () {
                this.$emit("closeModal", !this.toggle);
            }
        },
        computed: {
          filteredContent: function () {
                return this.content.filter((content) => {
                     return content.title.toLowerCase().includes(this.value);
                })

          },

        },
        watch: {
            toggle: function () {
                console.log(this.toggle);
            }
        },

    }
</script>

<style scoped>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1; /* Sit on top */
        width: 100vw; /* Full width */
        height: 100vh; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        margin-right: 50%;
        border-radius: 0;
    }

    .modal-content {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        border: 1px solid #888;
        width: 60%; /* Could be more or less, depending on screen size */
        z-index: 11;
        border-radius: 10px;
        position: relative;
    }
    .closeButton {
        float: right;
        font-size: large;
        border: 1px solid #004077;
        margin-right: 4%;
        border-radius: 100%;
        display: inline-block;
        color: #004077;
        background-color: white;
        cursor: pointer;
        position: absolute;
        left: 85%;
        top: 10px;
    }
    .closeButton:hover {
        background-color: #004077;
        color: white;
    }
    .image {
        width: 100%;
        z-index: 11111;

    }
    img {
        width: 100%;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        z-index: 11111;

    }

    .mainText {
        padding: 0 3% 0;
        text-align: left;
    }
    /*----------MOBILE SECTION-----------*/
    @media only screen and (max-width: 600px){
        .contactText {
            padding: 0 2% 0 0;
        }
    }

    /*----------TABLET SECTION-----------*/
    @media only screen and (max-width: 768px){}

    /*----------DESKTOP SECTION-----------*/
    @media only screen and (min-width: 1000px){}
</style>

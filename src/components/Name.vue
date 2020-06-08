<template>
    <div class="modal" v-if="toggled">
        <div class="modal-content" v-on-clickaway="closeNameModal">
            <button @click.prevent="closeNameModal()" ref="button" class="closeButton">X</button>
            <div v-for="(sensor, index) in sensorNames" :key="index" class="sensor-name-list" @click="setSensorName(sensor.name)">
                <img v-bind:src="sensor.img" alt="">
                <div>{{sensor.name}}</div>
            </div>

        </div>
    </div>
</template>

<script>
    import { mixin as clickaway } from 'vue-clickaway';
    export default {
        name: "Name",
        mixins: [clickaway],
        props: {
            toggled: {
                required: true
            }
        },
        data: function () {
            return {
                sensorNames: [
                    {name: 'DOL 26', img: 'http://maciekwozniak.dk/dol-images/dol26.png'},
                    {name: 'DOL 27', img: 'http://maciekwozniak.dk/dol-images/dol27.png'},
                    {name: 'DOL 28', img: 'http://maciekwozniak.dk/dol-images/dol28.png'}
                ],

            }
        },
        methods: {
            closeNameModal: function () {
                this.$emit("closeNameModal", !this.toggled);
            },
            setSensorName: function (name) {
                this.$store.commit('SET_NAME', name);
                console.log(name);
                this.closeNameModal();
            }
        }
    }
</script>

<style scoped>

    .sensor-name-list {
        display: inline-block;
        border: 1px solid rgba(0,64,119,0.19);
        border-radius: 20px;
        margin-right: 1%;
        margin-bottom: 1%;
        width: 20%;
        cursor: pointer;
    }
    img {
        width: 100%;
    }
    .sensor-name-list:hover {
        background-color: rgba(0,64,119,0.19);
    }
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
    }

    .modal-content {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 60%; /* Could be more or less, depending on screen size */
        z-index: 11;
        border-radius: 10px;
    }
    .closeButton {
        float: right;
        font-size: large;
        border: 1px solid #004077;
        margin-right: 4%;
        border-radius: 100%;
        display: inline-block;
        color: #004077;
        margin-bottom: 10%;
        background-color: white;
        cursor: pointer;
    }
    .closeButton:hover {
        background-color: #004077;
        color: white;
    }
    @media only screen and (max-width: 600px){
        .sensor-name-list {
            display: block;
            border: 1px solid rgba(0,64,119,0.19);
            border-radius: 20px;
            margin-right: 1%;
            margin-bottom: 1%;
            width: 70%;
            cursor: pointer;
        }
    }
</style>

<template>
    <div class="modal" v-if="toggle">
        <div class="modal-content" v-on-clickaway="closeModal">
            <button @click.prevent="closeModal()" ref="button" class="closeButton">X</button>
            <div class="image"><img src="@/assets/Card_test.jpg" alt=""></div>
            <h2>Sensor Types</h2>
            <p class="mainText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
</template>

<script>

    import { mixin as clickaway } from 'vue-clickaway';

    export default {
        mixins: [clickaway],
        name: "Modal",
        props: {
            toggle: {
                required: true
            }
        },
        data: function(){
            return {
                title: 'modal-popup',
            }
        },
        methods: {
            closeModal: function () {
                this.$emit("input", !this.toggle);
            }
        }
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
        margin: 8% auto; /* 15% from the top and centered */
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
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

    }
    img {
        width: 100%;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    .mainText {
        padding: 0 3% 0;
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

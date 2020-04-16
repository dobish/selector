<template>
    <div class="modal" v-if="value">
        <div class="modal-content" v-on-clickaway="closeModal">
            <button @click.prevent="closeModal()" ref="button" class="closeButton">X</button>
            <ContactForm></ContactForm>
        </div>
    </div>
</template>

<script>
    import ContactForm from "@/components/ContactForm";
    import { mixin as clickaway } from 'vue-clickaway';

    export default {
        components: {ContactForm},
        mixins: [clickaway],
        name: "Modal",
        props: {
            value: {
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
                this.$emit("input", !this.value);
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
</style>

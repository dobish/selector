<template>
    <div>
        <p class="front-text">Choose sensor type:</p>
        <div class="buttons">
                <div><router-link to="/">Climate</router-link></div>
                <div><router-link to="/">Capacitive</router-link></div>

        </div>
        <div class="guidance">
            <p class="">If you need guidance <button>Contact Us</button></p>
        </div>
        <hr>
        <Dealer></Dealer>
        <div class="dealer">
            <p class="title">Your closest dealer</p>
                <div class="details">
                    <p class="country">Denmark</p>
                    <p class="">dol-sensors A/S</p>
                    <p class="">Agro Food Park 15</p>
                    <p class="">8200 Aarhus N</p>
                </div>
        </div>
        <hr>
    </div>
</template>

<script>
    import Dealer from "@/components/Dealer";
    export default {
        name: "MainScreen",
        components: {
            Dealer
        }
    }
</script>

<style scoped>
html {
    font-family: "Work Sans";
}

    .front-text {
        margin-top: 45%;
        font-size: x-large;
    }
    button {
        border: 1.5px solid #004077;
        margin-right: 4%;
        border-radius: 20px;
        padding: 1% 3% 0;
        display: inline-block;
        background-color: white;
        color: #004077;
        font-size: medium;
        margin-top: 6%;
        text-transform: uppercase;
    }
    .guidance {
        margin-top: 60%;
    }
    hr {
        width: 80%;
    }

    .dealer {
        text-align: left;
        color: #292f33;
    }

    .title {
        margin: 10%;
    }

    .details {
        margin-left: 10%;
        margin-bottom: 10%;
    }
    .country {
        color: #004077;
        text-transform: uppercase;
        font-size: medium;
    }
</style>

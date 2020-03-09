<template>
    <div>
        <p class="front-text">Choose sensor type:</p>
        <div class="buttons">
                <div><router-link to="/">
                    <button class="button">Climate</button>
                </router-link></div>
                <div><router-link to="/">
                    <button class="button">Capacitive</button>
                </router-link></div>

        </div>
        <div class="guidance">
                <ContactForm ></ContactForm>
        </div>
        <hr>
        <Dealer></Dealer>
    </div>
</template>

<script>
    import Dealer from "@/components/Dealer";
    import ContactForm from "@/components/ContactForm";
    export default {
        name: "MainScreen",
        components: {
            Dealer,
            ContactForm
        },
        data: () => ({
           contact: false

        }),
        methods: {
            showContact: function () {
                this.contact = !this.contact
            }
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
    .button {
        border: 1px solid #004077;
        margin-right: 4%;
        border-radius: 20px;
        padding: 0 15px 0;
        display: inline-block;
        color: #004077;
        padding-top: 0.5%;
        margin-bottom: 10%;
        background-color: white;
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

.contactAnim-enter-active {
    transition: all .3s;
}

.contactAnim-enter {
    opacity: 0%;
}
</style>

<template>
    <div class="index-container">
        <p class="front-text">Choose sensor type:</p>
        <div class="buttons">
                <div class="card-container">
                    <router-link to="/">
                    <div class="card">
                        <section class="card-text">
                            <h3 class="sensor-type">Capacitive</h3>
                            <p class="sensor-description">Feed sensors</p>
                        </section>
                    </div>
                </router-link>
                </div>
                <div class="card-container">
                    <router-link to="/">
                        <div class="card">
                            <section class="card-text">
                                <h3 class="sensor-type">Climate</h3>
                                <p class="sensor-description">Sensors for Climate</p>
                            </section>
                        </div>
                </router-link>
                </div>

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

router-link {
    text-decoration: none;
}

h1, h2, h3 {
    margin: 0;
    padding: 0;
}

p {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

.index-container {
    padding-top: 20%;
}

.card-container {
    margin-bottom: 5%;
}

    .front-text {

        font-size: x-large;
    }

    .card {
        position: relative;
        background: linear-gradient(
                rgba(0, 64, 119, 0.7),
                rgba(0, 64, 119, 0.7)
        ),url("../assets/capacitive_main_pic.jpg");
        height: 20%;
        width: 78%;
        margin-left: 11%;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 20px;
        text-decoration: none;
        padding-top: 10%;
        padding-bottom: 10%;
        text-align: left;
        padding-left: 5%;
        color:  ;
    }

    .sensor-type {
        text-transform: uppercase;
        color: white;


    }

    .sensor-description {
        color: white;
        text-decoration: none !important;
        margin-top: 2%;

    }

    .card-img {
        width: 90%;
        border-radius: 20px;
        position: relative;

    }

    .card-text {
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
        margin-top: 40%;
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

<template>
    <div class="index-container">
        <p class="front-text">Choose sensor type:</p>
<!--        <div class="buttons">
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
        </div>-->
            <ul class="cards-container">
                <router-link to="/">
                    <li class="card">
                        <img src="@/assets/Dol sensors ikon samling_3.png" alt="">
                        Capacitive
                    </li>
                </router-link>
                <router-link to="/">
                    <li class="card">
                        <img src="@/assets/Dol sensors ikon samling_1.png" alt="">
                        Climate
                    </li>
                </router-link>
            </ul>


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
img {
    width: 100%;
}

.cards-container {
    list-style: none;
    width: 100vw;
    margin: 0;
    padding: 0;
}
.card {
    background-color: white;
    width: 30%;
    display: inline-block;
    color: #004077;
    border-radius: 10%;
    margin-right: 5%;
    margin-left: 5%;
    padding-right: 2%;
    padding-left: 2%;
    -webkit-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
    -moz-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
    box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
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



    .front-text {

        font-size: x-large;
        margin-bottom: 10%;
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

    .guidance {
        margin-top: 40%;
    }
    hr {
        width: 80%;
    }


.contactAnim-enter-active {
    transition: all .3s;
}

.contactAnim-enter {
    opacity: 0%;
}
</style>

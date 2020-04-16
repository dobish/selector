<template>
    <div class="index-container">
        <h1 class="front-text">Choose sensor type:</h1>
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
            <p v-if="!contact">If you need guidance</p><br>
            <button class="contactButton" @click="showContact" v-if="!contact">Contact us</button>
            <transition name="contactAnim">
                <ContactForm v-if="contact"></ContactForm>
            </transition>
        </div>
        <hr v-if="$mq === 'mobile'">
        <div class="map" v-if="$mq === 'mobile'">
            <Dealer></Dealer>
        </div>
        <footer class="footer">
            <div class="map" v-if="$mq === 'desktop'">
                <Dealer></Dealer>
            </div>
            <div class="row">
                <div class="column address">
                    <p class="footerAddress">
                        dol-sensors A/S <br>
                        Agro Food Park 15<br>
                        8200 Aarhus N<br>
                    </p>

                    T: +45 7217 5888<br>
                    F: +45 7217 5959<br>
                    E: mail@dol-sensors.com<br>
                    CVR: 87457117<br>
                </div>
                <div class="column">
                    <ul class="footerLinks">
                        <li><a href="www.dol-sensors.com">dol-sensors.com</a></li>
                        <li><a href="/">Guide</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                    </ul>
                    <div class="socialMedia">
                        <a class="someIcon" href="https://www.facebook.com/Dol-sensors-222125605221414/"><svg width="8" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M.168 6.288h1.657V4.674c0-.712.017-1.81.534-2.49.543-.719 1.29-1.209 2.574-1.209 2.09 0 2.972.3 2.972.3l-.414 2.46s-.692-.2-1.336-.2c-.645 0-1.222.23-1.222.877v1.876h2.644L7.392 8.69H4.933v8.35H1.825V8.69H.168V6.288z" fill="#FEFEFE" fill-rule="evenodd"></path></svg></a>
                        <a class="someIcon" href="https://www.linkedin.com/company/dol-sensors-a-s/"><svg width="17" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16.054 14.726h-3.545V9.54c0-1.358-.553-2.284-1.773-2.284-.933 0-1.451.625-1.693 1.228-.09.216-.076.516-.076.819v5.422H5.456s.046-9.185 0-10.02h3.511v1.572c.207-.687 1.33-1.668 3.12-1.668 2.221 0 3.967 1.44 3.967 4.544v5.572zM1.905 3.452h-.022C.752 3.452.017 2.686.017 1.716c0-.99.757-1.74 1.91-1.74S3.79.724 3.813 1.713c0 .97-.732 1.739-1.907 1.739zM.422 14.726h3.126V4.706H.422v10.02z" fill="#FEFEFE" fill-rule="evenodd"></path></svg></a>
                    </div>
                </div>
            </div>
<!--            <ul class="footerLinks">
                <li></li>
                <li><a href="www.dol-sensors.com">dol-sensors.com</a></li>
                <li><a href="/">Guide</a></li>
                <li><a href="/">Privacy Policy</a></li>
            </ul>-->
        </footer>
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
           contact: false,

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

.contactButton {
    border: 1px solid #004077;
    border-radius: 20px;
    padding: 4px 15px 4px;
    display: inline-block;
    color: #004077;
    margin-bottom: 10%;
    background-color: white;
    cursor: pointer;
}

.contactButton:hover {
    background-color: #004077;
    color: white;
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

.footerLinks {
    color: white;
    text-decoration: none;
    list-style-type: none;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-top: 0;
}

.footerLinks > li {
    margin-bottom: 10%;
}

.someIcon {
    width: 32px;
    height: 32px;
    display: flex;
    margin-right: 10px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(155, 180, 200);
    border-radius: 32px;
}

.socialMedia {
    display: flex;
    margin-left: 20%;
}

a{
    color: white;
}

.footerAddress{
    margin-bottom: 10%;
}

.address {
    line-height: 20pt;
}

.row {
    width: 40%;
    padding-top: 3%;
    padding-left: 10%;
}

.column {
    float: left;
    width: 50%;
    text-align: left;

}



    .front-text {
        font-size: x-large;
        margin-bottom: 5%;
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
/*----------MOBILE SECTION-----------*/
@media only screen and (max-width: 600px){
    .map {
        border-radius: 20px;
        padding: 2%;
    }
    .footer {
        background-color: #004077;
        color: white;
        display: flex;
        height: 70vh;
    }
    .row {
        width: 100%;
        padding: 5%;
    }
}
/*----------DESKTOP SECTION-----------*/
@media only screen and (min-width: 1000px){
    .index-container {
        padding-top: 5%;
    }
    .card {
        background-color: white;
        width: 10%;
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
    .card:hover{
        transform: scale(1.03);
    }
    .guidance {
        margin-top: 10%;
    }
    .footer {
        background-color: #004077;
        color: white;
        display: flex;
    }
    .map {
        width: 50%;
    }
}
</style>

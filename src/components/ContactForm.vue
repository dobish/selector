<template>
    <section id="contact">
        <transition name="ease">
    <div class="container">
        <transition name="formTransition">
            <form @submit.prevent v-if="!messageSent">
                <input type="email" placeholder="EMAIL" v-model="email" :class="{error: errorClass}">
                <input type="name" placeholder="NAME" v-model="name" >
                <select v-model="selectedCountry" name="" id="" placeholder="COUNTRY">
                    <option value="" hidden selected>COUNTRY</option>
                    <option :value="country.name" v-for="country in countries" :key="country.code" >
                        {{ country.name }}
                    </option>
                </select>
                <textarea type="text" v-model="textMessage" ></textarea>
                <input class="button" type="submit" value="Submit" @click="postValues()">
            </form>
        </transition>
        <transition name="msgThanks">
        <div v-if="messageSent" class="thanks" style="transition-delay: .48s">
            <h2>Thank you for your message {{ name }}, we will get to you as soon as possible!</h2>
        </div>
        </transition>
    </div>
        </transition>
    </section>
</template>

<script>
    import axios from 'axios'
    import countries from '../data/countries'


    export default {
        name: "ContactForm",
        data: function () {
            return {
                textMessage: "Hi I am interested in dol 53",
                errors: [],
                name: null,
                email: null,
                company: null,
                countries: countries,
                selectedCountry: '',
                errorClass: false,
                messageSent: false,
                stateParameters: []

            }
        },
        methods: {
            checkForm: function () {
                this.errors = [];

                if (!this.name) {
                    this.errors.push("Name required.");
                }
                if (!this.email) {
                    this.errors.push('Email required.');
                    this.errorClass = !this.errorClass

                } else if (!this.validEmail(this.email)) {
                    this.errors.push('Valid email required.');
                }

                if (!this.errors.length) {
                    return true;
                }

                //e.preventDefault();

            },

            postValues: function() {
                let vm = this;
                //------Loops through the getter object from the state and assigns it to data
                    let obj = vm.$store.getters.PARAMETERS_GET
                    let result = []
                    for ( let i in obj) {
                        result += '<b>' + i + '</b>' + ': ' + obj[i] + '<br>';
                    }
                    result += '<hr>'
                    this.stateParameters = result;
                //-----Post to the API (Sending email)
                    console.log(result)
                axios.post('http://localhost:4000/sendmail', {
                    from: this.email,
                    name: this.name,
                    message: this.textMessage,
                    country: this.selectedCountry,
                    parameters: this.stateParameters
                })
                    .then(function (response) {
                        vm.output = response.data;
                    })
                    .catch(function (error) {
                        vm.output = error;
                    })
                this.messageSent = !this.messageSent
            },



            validEmail: function (email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    }
</script>

<style scoped>
    .container {
        margin-top: 10%;
        position: relative;
    }

    hr {
        width: 90%
    }

    form {
        height: 100%;
    }

    #contact {
        width: 100vw;
        background-color: #fafafa;
        padding-top: 5%;
        padding-bottom: 5%;
    }
    form input, textarea {
        width: 80%;
        margin-bottom: 4%;
        padding: 3%;
        border:1px solid #ebebeb;

    }

    .thanks > h2 {
        font-size: medium;
        font-weight: lighter;
        padding: 0 5% 2% 5%;
        margin: 0;

    }

    select {
        width: 86%;
        margin-bottom: 4%;
        padding: 3%;
        border:1px solid #ebebeb;
    }

    .msgThanks-enter-active {
        transition: all .3s;
    }
    .msgThanks-enter-to {

    }

    .msgThanks-enter {
        opacity: 0;
        transform: translateX(-30px);
    }

    .formTransition-enter-active, .formTransition-leave-active {
        transition: all .3s;

    }

    .formTransition-enter, .formTransition-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }




    input:focus {
        border: 1.5px solid cornflowerblue;
    }

    textarea:focus {
        padding-bottom: 30%;

    }


    textarea {
        transition: padding-bottom .35s ease-in-out;
        font-family: "Work Sans";
    }


    .button {
        border: 1.5px solid #004077;
        border-radius: 20px;
        padding: 1% 2% 1%;
        display: block;
        background-color: #004077;
        color: #FFF;
        font-size: medium;
        margin-top: 6%;
        text-transform: uppercase;
        margin-left: 10%;
        width: 80%;
    }

    .error {
        transition: border .2s ease-in-out;
        border: 2px solid #ff8080;
    }

</style>

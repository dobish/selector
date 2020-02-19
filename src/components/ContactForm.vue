<template>
    <section id="contact">
        <hr>
    <div class="container">
        <form action="/" @submit="checkForm" method="post" >
            <input type="email" placeholder="EMAIL" v-model="email" :class="{error: errorClass}">
            <input type="name" placeholder="NAME" v-model="name">
            <textarea type="text" :value="textMessage" ></textarea>
            <input class="button" type="submit" value="Submit">
        </form>
    </div>
    </section>
</template>

<script>
    export default {
        name: "ContactForm",
        data: function () {
            return {
                textMessage: "Hi I am interested in dol 53",
                errors: [],
                name: null,
                email: null,
                errorClass: false

            }
        },
        methods: {
            checkForm: function (e) {
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

                e.preventDefault();
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
    }

    hr {
        width: 90%
    }

    #contact {
        width: 100vw;
    }
    form input, textarea {
        width: 80%;
        margin-bottom: 4%;
        padding: 3%;
        border:1px solid #ebebeb;

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
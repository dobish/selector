<template>
    <div >
<!--        <ul v-for="(sensor, index) in sensors" v-bind:key="index">
            <li>{{sensor.name}},</li>


                <div v-for="(type, index) in sensor.types" :key="index" :class="{highlight:selected.includes(type)}"
                @click="selected.includes(type) ? selected.splice(selected.indexOf(type), 1) : selected.push(type)"
                >{{ type }}</div>

            <template></template>

        </ul>-->
        <form v-on:submit.prevent="onSubmit()">
            <div id="parametersForm" action="" v-for="(sensor, index) in sensors" v-bind:key="index" >
            <div>{{sensor.name}}</div>
            <input type="button" v-for="(type, index) in sensor.types" :key="index" class="parameter-button" :value="type" :class="{highlight:selected.includes(type)}"
                   @click="selected.includes(type) ? selected.splice(selected.indexOf(type), 1) : selected.push(type)">
            </div>


            <button type="submit">Show Sensors</button>
        </form>


        <p>{{$data.selected }}</p>
        <ChosenSensor @params-submitted="displayParams"></ChosenSensor>
        <ul>
            <li v-for="(param, index) in params" v-bind:key="index"> {{ param}}</li>
        </ul>
        <ContactForm></ContactForm>
    </div>
</template>

<script>
    const API_URL = "http://localhost:4000/sensors";
    import ContactForm from "@/components/ContactForm";
    import ChosenSensor from "@/components/ChosenSensor";
    export default {
        components: {ContactForm, ChosenSensor},
        name: "apiTest",
        data: () => ({
            error: "",
            sensors: [],
            selected: [],
            clicked: false,
            isToggled: null,
            params: []
        }),

        mounted() {
            fetch(API_URL)
                .then(response => response.json())
                .then(result => {
                    this.sensors = result;
                    //this.filteredProduct = result.filter(this.sensors = this.sensors.includes('a') )
                });
        },
        methods: {
            log(message){
                console.log(message);
            },
            selectItem: function(i){
                this.isSelected = i;
            },
            toggleParameter: function (index) {
                this.isToggled = index;
            },
            onSubmit: function () {
                let chosenParam = {
                    params: this.selected
                }

                this.log(chosenParam)
                this.$emit('params-submitted', chosenParam)
                let chosenParameters = this.selected
                localStorage.setItem("Parameters", JSON.stringify(chosenParameters))


            },
            displayParams: function (chosenParams) {
                this.params.push(chosenParams)
            }
        },
        computed: {
            filteredSensors: function () {
                let result = this.selected
                return result
            }
        }
    }
</script>

<style scoped>
.highlight {
    background-color: #004077 !important;
    color: white !important;
}

.parameter-button {
    border: 1px solid #004077;
    margin-right: 4%;
    border-radius: 20px;
    padding: 0 15px 0;
    display: inline-block;
    color: #004077;
    padding-top: 0.5%;
    margin-bottom: 10%;
    background-color: white;
}
</style>
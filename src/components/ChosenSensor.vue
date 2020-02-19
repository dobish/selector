<template>
    <div>
        <form v-on:submit.prevent="onSubmit()">
            <div id="parametersForm" action="" v-for="(sensor, index) in sensors" v-bind:key="index" >
                <div>{{sensor.name}}</div>
                <input type="button" v-for="(type, index) in sensor.types" :key="index" class="parameter-button" :value="type" :class="{highlight:selected.includes(type)}"
                       @click="selected.includes(type) ? selected.splice(selected.indexOf(type), 1) : selected.push(type)">
                <input type="text">
            </div>


            <button type="submit">Show Sensors</button>
        </form>
    </div>
</template>

<script>
    const API_URL = "http://localhost:4000/sensors";
    export default {
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
            onSubmit: function () {
                let chosenParam = {
                    params: this.selected
                }
                console.log(this.params)
                this.$emit('params-submitted', chosenParam)
                //this.$router.push("/search?"+this.params);
            }
        }

    }
</script>

<style scoped>

</style>
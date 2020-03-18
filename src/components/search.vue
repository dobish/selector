<template>
    <div class="container">
        <input type="text" v-model="findSensor" placeholder="Findsensor">
        <div>{{filterSearch.length}} sensors found</div>
        <ul v-for="(sensor, index) in filterSearch" :key="index">
            <router-link to="/final">
                <li @click="sensorAssign(sensor.all)">{{ sensor.name }}</li>
            </router-link>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "search",
        data: function(){
            return {
                sensors: [
                    {name: "DOL 26 with SCR 16", type: "SCR", diameter:"16mm", all:"DOL 26 SCR 16mm" },
                    {name: "DOL 26 with NPN 16", type: "NPN", diameter:"16mm", all:"DOL 26 NPN 16mm" },
                    {name: "DOL 26 with PNP 23", type: "PNP", diameter:"23mm", all:"DOL 26 PNP 23mm" },
                    {name: "DOL 27 with PNP 18", type: "PNP", diameter:"18mm", all:"DOL 27 PNP 18mm" }
                ],
                findSensor: '',
            }
        },
        computed: {
            filterSearch() {
                return this.sensors.filter( sensor => {
                    return !this.findSensor ||
                        sensor.all.toLowerCase().indexOf(this.findSensor.toLowerCase()) > -1
                })
            },
        },
        methods: {
            sensorAssign: function (search) {
                this.$store.commit('SET_SEARCH', search);
                console.log(search)
            }
        }
    }
</script>

<style scoped>
.container {
    padding-top: 10vh;
    background-color: #fcfcfc;
    height: 100vh;
}
</style>

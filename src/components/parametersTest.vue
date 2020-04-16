<template>
    <div class="parameter-values">
        <!--<div v-for="(sensor, index) in sensors" :key="index">
        </div>-->

        <div class="sensor-image">
            <img v-if="$mq === 'laptop'" alt="Vue logo" src="@/assets/DOL26.png">
        </div>
        <h1 class="titlee">{{$mq}}</h1>
        <h2>{{stateParam}}</h2>
        <ul v-for="(item, index) in filterByAll" :key="index+'Wahooo'">
            <li>
                {{ item.name }}
                <ul class="sub-list">
                    <li><span>Type: </span> {{ item.type }}</li>
                    <li><span>Diameter: </span>{{ item.diameter }}</li>
                </ul>
            </li>
        </ul>
        <div v-for="(sensor) in sensors" :key="sensor._id">
            <Parameter  :sensor="sensor"></Parameter>
        </div>
        <router-link :to="{path: '/final'}">
            <button class="parameter-button">SHOW SENSORS</button>
        </router-link>
    </div>
</template>

<script>
    const API_URL = "api/sensors";
    import Parameter from "@/components/Parameter";
    export default {
        props: {
            sensor: {type: Object}
            },
        components: {Parameter},
        name: "parametersTest",
        data: function(){
            return {
                title: 'parameter',
                sensorsTest: [
                    {name: "DOL 26 with SCR 16", type: "SCR", diameter:"16mm", thread:"Thread", delay:"On", all:"DOL 26 SCR 16mm" },
                    {name: "DOL 26 with NPN 16", type: "NPN", diameter:"16mm", thread:"Thread", delay:"Off", all:"DOL 26 NPN 16mm" },
                    {name: "DOL 26 with PNP 23", type: "PNP", diameter:"23mm", thread:"Smooth", delay:"On", all:"DOL 26 PNP 23mm" },
                    {name: "DOL 27 with PNP 18", type: "PNP", diameter:"18mm", thread:"Smooth", delay:"Off", all:"DOL 27 PNP 18mm" }
                ],
                sensors: '',
                selected: [],
                mobile: false,
                laptop: false,
                stateParam: 'nothing',
                diameter: ''

            }
        },
        methods: {

        },
        computed: {
          mediaQuery: function () {
              let vm = this;
            if (this.$mq === 'mobile') {
                return vm.mobile = true;
            }
            return vm.mobile = false
          },
            stateUpdate: function () {
                return this.$store.getters.DIAMETER_GET;
            },
            filterByAll: function () {
                return getByDiameter (this.sensorsTest, this.stateParam)
            },
        },
        watch:{
          stateUpdate(newValue){
              this.stateParam = newValue;
              console.log("Nowa " + newValue)
          }
        },
        mounted() {
            fetch(API_URL)
                .then(response => response.json())
                .then(result => {
                    this.sensors = result;
                });

            //this.sensor = this.sensors
        },
    }

    function getByDiameter(list, diameter) {
        if(!diameter) return list
        return list.filter(item => item.diameter === diameter)
    }
</script>

<style scoped>
.parameter-values {

}

img {
    width: 100%;
    position: relative;
    margin-bottom: 8%;
}

.titlee {
    color: red;
}

@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .titlee{
        color: yellow;
    }
}



</style>

<template>
    <div>
        <h2>You have chosen:</h2>
        <p v-for="(variant, index) in variants" v-bind:key="index"> {{ variant }}</p>
        <hr>
        <div v-for="sensor in filteredParameters" v-bind:key="sensor.name">
            <p v-for="(value, name, index) in sensor" v-bind:key="value.objectID" >{{ index }}, {{ name }}: {{ value }}, {{value.objectID }}</p>
            <hr>
        </div>
        <h2>Loop 2</h2>
        <div v-for="item in filterByAll" :key="item.name">
            <p>{{ item.name }}</p>
            <p>{{ item.type }}</p>
            <p>{{ item.diameter }}</p>
            <hr>
        </div>
        <h2>Loop 3</h2>
        <div v-for="(item, index) in filteringTry" :key="index+62">
            <p>{{ item.name }}</p>
        </div>
    </div>
</template>

<script>


    export default {
        name: "FinalScreen",
        data: function(){
            return {
                variants: "",
                filteredVariants: "",
                sensors: [
                    {name: "DOL 26 with SCR 16", type: "SCR", diameter:"16mm" },
                    {name: "DOL 26 with NPN 16", type: "NPN", diameter:"16mm" },
                    {name: "DOL 26 with PNP 23", type: "PNP", diameter:"23mm" },
                    {name: "DOL 27 with PNP 23", type: "PNP", diameter:"18mm" }
                    ],
                type: 'PNP',
                diameter: '44'
            }

        },
        methods: {
            get_data: function () {
                var vm = this;
                    let lclstrg = JSON.parse(localStorage.getItem("Parameters"))//Get parameters from local storage and turn it into Array
                    vm.variants = lclstrg// assign values from local storage to data()
                    let lclString = lclstrg.toString().toLowerCase()
                    vm.filteredVariants = lclString

            },

            //That might be the good I use currently!
/*
            marek: function () {
                console.log("Marek")
                var vm = this;
                console.log(vm.sensors)
                let loc = JSON.parse(localStorage.getItem("Parameters"))
                let filter = vm.sensors.includes("SCR")
                console.log(loc)
                //const arr = vm.sensors.filter(d => d.type === 'SCR')
                //console.log(arr)
                console.log(filter)
                //Loops through observer objects and tries to match them with filtered computed (Chosen filters)
                Array.prototype.forEach.call(this.sensors, types => {
                    //console.log(types)
                    console.log(types.diameter.toLowerCase().includes(this.filteredVariants) || types.type.toLowerCase().includes(this.filteredVariants))
                })
                return
            }
*/

        },
        computed: {
            filteredParameters: function () {
                   return this.sensors.filter((sensor) => {
                        return sensor.type.toLowerCase().includes(this.filteredVariants) || sensor.diameter.includes(this.variants);

                    })

         /*     let filtered = this.sensors;
                if (this.filteredVariants){
                    filtered = this.sensors.filter(
                        m => m.type.toLowerCase().indexOf(this.filteredVariants) > -1
                    );
                }
                return filtered;*/
            },
            filterByAll: function () {
            return getByDiameter(getByType(this.sensors, this.type), this.diameter)
            },

            FilteringTry: function () {
               return Array.prototype.forEach.call(this.variants, variants => {
                    return filterSensors(this.sensors, variants)
                })

            }
        },
        beforeMount(){
            this.get_data() //Fires the function on mount
        },
        mounted(){
            var vm = this;
            console.log(vm.sensors)
            let loc = JSON.parse(localStorage.getItem("Parameters"))
            //let filter = vm.sensors.includes("SCR")
            console.log(loc)
            //const arr = vm.sensors.filter(d => d.type === 'SCR')
            //console.log(arr)
            console.log(vm.variants)
            //Loops through observer objects and tries to match them with filtered computed (Chosen filters)

            Array.prototype.forEach.call(this.sensors, sensors => {
                //let lwr = types.toLowerCase()
                console.log(sensors)
                Array.prototype.forEach.call(this.variants, variants => {
                    console.log(variants.toLowerCase())
                    console.log(sensors.type.includes(variants))
                })
                //console.log(this.variants)
                //console.log(sensors)
                //console.log(this.sensors)
                //console.log(sensors.type.includes(lwr) )
            })

            Array.prototype.forEach.call(this.variants, types => {
                //let lwr = types.toLowerCase()
                console.log(types)
                console.log(this.sensors)
                console.log(this.sensors.includes(this.variants) )
            })
            return
        }

    };
    function getByType(list, type) {
        if(!type) return list
        return list.filter(item => item.type === type)
    }

    function getByDiameter(list, diameter) {
        if(!diameter) return list
        return list.filter(item => item.diameter === diameter)
    }

    function filterSensors(list, filters) {
        if(!filters) return list
        console.log(filters)
        console.log(list.filter(item => (item.diameter) && (item.type) === filters))
        return list.filter(item => item.type === filters)
    }

</script>

<style scoped>

</style>

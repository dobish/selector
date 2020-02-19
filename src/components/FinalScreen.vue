<template>
    <div>
        <h2>You have chosen:</h2>
        <p v-for="(variant, index) in variants" v-bind:key="index"> {{ variant }}</p>
        <hr>
        <div  v-for="sensor in filteredParameters" v-bind:key="sensor.name">
            <p v-for="(value, name, index) in sensor" v-bind:key="value.objectID" @click="aaa">{{ index }}, {{ name }}: {{ value }}, {{value.objectID }}</p>
            <hr>
        </div>
    </div>
</template>

<script>


    export default {
        name: "FinalScreen",
        data: function(){
            return {
                variants: [],
                sensors: [
                    {"name": "DOL 26 with SCR 16", "type": "SCR", "diameter":"16mm" },
                    {"name": "DOL 26 with NPN 16", "type": "NPN", "diameter":"16mm" },
                    {"name": "DOL 26 with PNP 23", "type": "PNP", "diameter":"23mm" },
                    {"name": "DOL 27 with PNP 23", "type": "PNP", "diameter":"18mm" }
                    ]
            }

        },
        methods: {
            get_data: function () {
                var vm = this;
                    let lclstrg = JSON.parse(localStorage.getItem("Parameters"))//Get parameters from local storage and turn it into Array
                    vm.variants = lclstrg // assign values from local storage to data()
            },
            aaa: function () {
                console.log("aaaa")
                var vm = this;
                console.log(vm.sensors)
                let loc = JSON.parse(localStorage.getItem("Parameters"))
                let filter = vm.sensors.includes("SCR")
                console.log(loc)
                //const arr = vm.sensors.filter(d => d.type === 'SCR')
                //console.log(arr)
                console.log(filter)
                return
            }

        },
        computed: {
            filteredParameters: function () {
                /*return this.sensors.filter((sensor) => {
                    return sensor.type.includes(this.variants) || sensor.diameter.includes(this.variants);
                })*/
               /* let filtered = this.sensors;
                if (this.variants){
                    filtered = this.sensors.filter(
                        m => m.type.toLowerCase().indexOf(this.variants) > -1
                    );
                    console.log(filtered)
                }
                return filtered;*/
                var textSearch = this.textSearch;
                var filteredTags = {};
                var tags = this.variants;
                Object.keys(this.variants).forEach(function(key) {
                    filteredTags[key] = tags[key].filter(function(el) {
                        return el.type.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
                    });
                });
                return filteredTags;
            }
        },
        beforeMount(){
            this.get_data() //Fires the function on mount
        }

    }
</script>

<style scoped>

</style>
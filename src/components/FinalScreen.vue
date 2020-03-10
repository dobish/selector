<template>
    <div>

        <div class="lds-ring" v-show="!loaded"><div></div><div></div><div></div><div></div></div>
        <div class="container" v-show="loaded">
        <h3>Best sensors for you</h3>
            <div class="sensor-image">
                <img alt="Vue logo" src="@/assets/DOL27.png" @load="onLoad()">
            </div>

        <hr>
        <ul v-for="(item, index) in filterByAll" :key="index+'Wahooo'">
            <li @click="toggleParameter(item)">
                {{ item.name }}
                <ul class="sub-list">
                    <li><span>Type: </span> {{ item.type }}</li>
                    <li><span>Diameter: </span>{{ item.diameter }}</li>
                </ul>
            </li>
            <hr>
        </ul>
            <ContactForm></ContactForm>
        </div>

<!--        <h2>Loop 3</h2>
        <div v-for="(item, index) in filteringTry" :key="index+62">
            <p>{{ item.name }}</p>
        </div>-->
    </div>
</template>

<script>
    import ContactForm from "@/components/ContactForm";
    export default {
        components: {ContactForm},
        name: "FinalScreen",
        data: function(){
            return {
                variants: "",
                filteredVariants: "",
                sensors: [
                    {name: "DOL 26 with SCR 16", type: "SCR", diameter:"16mm" },
                    {name: "DOL 26 with NPN 16", type: "NPN", diameter:"16mm" },
                    {name: "DOL 26 with PNP 23", type: "PNP", diameter:"23mm" },
                    {name: "DOL 27 with PNP 18", type: "PNP", diameter:"18mm" }
                    ],
                type: null,
                diameter: null,
                contact: false,
                loaded: false
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
            showContact: function () {
                this.contact = !this.contact
            },

            toggleParameter: function (sensor) {
                console.log(sensor.name)
            },

            onLoad: function() {
                console.log("LOADING");
                this.loaded = !this.loaded;
            }

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

            updateData: function () {
                let vm = this
                let type = localStorage.type;
                return vm.type = type

            }

/*            FilteringTry: function () {
               return Array.prototype.forEach.call(this.variants, variants => {
                    return filterSensors(this.sensors, variants)
                })

            }*/
        },
        beforeMount(){
            this.get_data() //Fires the function on mount
        },

        //Assign values from state to local Data() on Mount
        mounted(){
            var vm = this;

            //Loops through observer objects and tries to match them with filtered computed (Chosen filters)
            let store_type = vm.$store.getters.TYPE_GET;
            let store_diameter = vm.$store.getters.DIAMETER_GET;
            vm.type = store_type;
            vm.diameter = store_diameter;
            console.log(vm.$store.getters.TYPE_GET);
            console.log(vm.$store.getters.DIAMETER_GET);

            return
        },


    };
    function getByType(list, type) {
        if(!type) return list
        return list.filter(item => item.type === type)
    }

    function getByDiameter(list, diameter) {
        if(!diameter) return list
        return list.filter(item => item.diameter === diameter)
    }

/*    function filterSensors(list, filters) {
        if(!filters) return list
        console.log(filters)
        console.log(list.filter(item => (item.diameter) && (item.type) === filters))
        return list.filter(item => item.type === filters)
    }*/

</script>

<style scoped>
img {
    margin: 0;
}

    hr{
        border: .5px solid #e6e6e6;
        width: 90%;
    }
    .container {
        margin-top: 7vh;
    }

    li {

    }

    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .sub-list {
        font-size: small;
        text-align: left;
        margin-left: 34%;
        margin-top: 3%;
        margin-bottom: 5%;
    }

    .sub-list > li > span {
        color: #004077;
        font-weight: bold;
    }

    .sub-list > li {
        margin-top: 3%;
    }
    .button {
        border: 1px solid #004077;
        margin-right: 4%;
        border-radius: 20px;
        padding: 0 15px 0;
        display: inline-block;
        color: #004077;
        padding-top: 0.5%;
        margin-bottom: 5%;
        background-color: white;
    }
    .sensor-image {
        width: 70%;
        margin-left: 15%;
    }

    .contactAnim-enter-active {
        transition: all .3s;
    }

    .contactAnim-enter {
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active, .slide-leave-active {
        transition: all 5s;
    }

    h3 {
        color: #707070;
        font-weight: lighter;
    }


img {
    width: 100%;
    position: relative;

}
.lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin-top: 50%;
}
.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #004077 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}
@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

</style>

<template>
    <div>

        <div class="lds-ring" v-show="!loaded"><div></div><div></div><div></div><div></div></div>
        <div class="container" v-show="loaded">
        <h3 v-show="$mq === 'mobile'">Best sensors for you</h3>
            <div class="sensor-image" v-show="$mq === 'mobile'">
                <img alt="Vue logo" src="@/assets/DOL27.png" @load="onLoad()">
            </div>
            <main>
        <hr v-show="$mq === 'mobile'">
        <ul v-for="(item, index) in filterByAll" :key="index+'Wahooo'" class="card">
            <li @click="toggleParameter(item)">
                <div v-show="$mq === 'mobile'">{{ item.name }}</div>
                <ul class="sub-list">
                    <li v-show="$mq === 'desktop' || $mq=== 'tablet'"><img src="@/assets/DOL27.png" alt=""></li>
                    <li v-show="$mq === 'desktop' || $mq=== 'tablet'"><h2>{{ item.name }}</h2></li>
                    <li><span>Type: </span> {{ item.type }}</li>
                    <li><span>Diameter: </span>{{ item.diameter }}</li>
                    <li><span>Thread: </span>{{ item.thread }}</li>
                    <li><span>On delay: </span>{{ item.on_delay }}</li>
                    <li><span>Off delay: </span>{{ item.off_delay }}</li>
                </ul>
            </li>
            <hr v-show="$mq === 'mobile' ">
        </ul>
            </main>
            <ContactForm v-show="$mq === 'mobile'"></ContactForm>

            <button v-if="$mq === 'desktop'|| $mq=== 'tablet'" class="modalButton"  @click="toggleModal">Contact us</button>

        </div>

<!--        <h2>Loop 3</h2>
        <div v-for="(item, index) in filteringTry" :key="index+62">
            <p>{{ item.name }}</p>
        </div>-->
        <Modal v-if="$mq === 'desktop' || $mq=== 'tablet'" v-model="modalToggled"></Modal>
    </div>
</template>

<script>
    import ContactForm from "@/components/ContactForm";
    import Modal from "@/components/Modal";
    import local_sensors from '../data/local_db.json'
    const API_URL = "api/sensors";

    export default {
        components: {ContactForm, Modal},
        name: "FinalScreen",
        data: function(){
            return {
                variants: "",
                filteredVariants: "",
                sensors: local_sensors,
                tags: null,
                contact: false,
                loaded: false,
                findSensor: null,
                parameters: {
                    name: '',
                    type: '',
                    diameter: '',
                    thread: '',
                    delay: '',
                    tag:''
                },
                modalToggled: false
            }

        },
        methods: {
            get_data: function () {
                //var vm = this;
                    //let lclstrg = JSON.parse(localStorage.getItem("Parameters"))//Get parameters from local storage and turn it into Array
                    //vm.variants = lclstrg// assign values from local storage to data()
                    //let lclString = lclstrg.toString().toLowerCase()
                    //vm.filteredVariants = lclString

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
            },

            toggleModal: function () {
                this.modalToggled = !this.modalToggled;
            },
             loadSensors: function () {
                 fetch(API_URL)
                     .then(response => response.json())
                     //.then(response => response.text())
                     //.then(text => console.log(text))
                     .then(result => {
                         this.sensors = result;
                     });
             }



        },
        computed: {
            //OLD filtering function, based on separate vuex getters
            filteredParameters: function () {
                   return this.sensors.filter((sensor) => {
                        return sensor.type.toLowerCase().includes(this.filteredVariants) || sensor.diameter.includes(this.variants);

                    })

/*              let filtered = this.sensors;
                if (this.filteredVariants){
                    filtered = this.sensors.filter(
                        m => m.type.toLowerCase().indexOf(this.filteredVariants) > -1
                    );
                }
                return filtered;*/
            },

            // New filtering function. Based on tags taken from state
                filterByTag() {
                    return this.sensors.filter( sensor => {
                        return !this.findSensor ||
                            sensor.all.toLowerCase().indexOf(this.findSensor.toLowerCase()) > -1
                    })
                },

            filterByAll: function () {
            return getBySearch(getByName(getByThread(getByDelay(getByDiameter(getByType(this.sensors, this.parameters.type), this.parameters.diameter), this.parameters.delay), this.parameters.thread), this.parameters.name), this.parameters.tag)
            },

            updateData: function () {
                let vm = this
                let type = localStorage.type;
                return vm.type = type

            },
            updateType: function(){
                return this.$store.getters.TYPE_GET;
            },
            updateDiameter: function () {
                return this.$store.getters.DIAMETER_GET;
            },
            updateDelay: function () {
                return this.$store.getters.DELAY_GET;
            },
            updateThread: function () {
                return this.$store.getters.THREAD_GET;
            },
            updateName: function () {
                return this.$store.getters.NAME_GET;
            },
            updateTags: function () {
                return this.$store.getters.TAG_GET;
            }
        },
        watch:{
            updateDiameter(newValue){
                console.log("Nowa " + newValue)
                this.parameters.diameter = newValue;
            },
            updateType(newValue){
                this.parameters.type = newValue;
            },
            updateDelay(newValue){
                this.parameters.delay = newValue;
            },
            updateThread(newValue){
                this.parameters.thread = newValue;
            },
            updateName(newValue){
                this.parameters.name = newValue;
            },
            updateTags(newValue){
                this.parameters.tag = newValue;
            },
            filterByAll(){
                console.log(this.filterByAll.length)
            }
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
            let store_tags = vm.$store.getters.TAG_GET;
            let store_delay = vm.$store.getters.DELAY_GET;
            let store_thread = vm.$store.getters.THREAD_GET;
            let store_name = vm.$store.getters.NAME_GET;
            vm.parameters.name = store_name;
            vm.parameters.type = store_type;
            vm.parameters.diameter = store_diameter;
            vm.parameters.delay = store_delay;
            vm.parameters.thread = store_thread;
            vm.parameters.tag = store_tags;
            console.log(vm.$store.getters.TYPE_GET);
            console.log(vm.$store.getters.PARAMETERS_GET);
            console.log(store_tags);
            this.loadSensors();
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

    function getBySearch(list, search) {
        if(!search) return list;
        return list.filter(item => item.tags === search)
    }
    function getByDelay (list, delay) {
        if(!delay) return list;
        return list.filter(item => item.off_delay === delay) || (item => item.on_delay === delay);
    }
    function getByThread (list, thread) {
        if(!thread) return list;
        return list.filter(item => item.thread === thread)
    }
    function getByName(list, name) {
        if(!name) return list;
        return list.filter(item => item.display_name === name)
    }




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
        padding-top: 5vh;
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
        margin-top: 0px;
    }



/*----------MOBILE SECTION-----------*/
@media only screen and (max-width: 600px){
    img {
        width: 100%;
        position: relative;

    }
}

/*----------TABLET SECTION-----------*/
@media only screen and (min-width: 601px) and (max-width: 999px){
    .container {
        padding-top: 0;
    }
    body, html {

    }
    main {
        margin-top: 3%;
    }
    .card {
        background-color: white;
        border-radius: 15px;
        width: 18%;
        display: inline-block;
        justify-content: space-between;
        margin-bottom: 3%;
        margin-right: 3%;
        -webkit-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
        -moz-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
        box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
        padding-bottom: 1%;
        padding-left: 1%;
        animation: fade 0.2s;
    }
    .sub-list {
        font-size: small;
        text-align: left;
        margin-left: 5%;
        margin-top: 3%;
        margin-bottom: 5%;
    }
    h2 {
        font-weight: normal;
    }
    main {

    }
    .modalButton {
        display: block;
        position: fixed;
        bottom: 30px;
        right: 0;
        width: 15%;
        color: white;
        background-color: rgba(0, 63, 117, 0.76);
        border: 1px solid #004077;
        margin-right: 4%;
        border-radius: 20px;
        padding: 0 15px 0;
        cursor: pointer;

    }
    .modalButton:hover {
        background-color: rgba(0, 63, 117, 1);
    }

    img {
        width: 100%;
    }
}

/*----------DESKTOP SECTION-----------*/
@media only screen and (min-width: 1000px){
    .container {
        padding-top: 0;
    }
    body, html {

    }
    main {
        margin-top: 3%;
    }
    .card {
        background-color: white;
        border-radius: 15px;
        width: 18%;
        display: inline-block;
        justify-content: space-between;
        margin-bottom: 3%;
        margin-right: 3%;
        -webkit-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
        -moz-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
        box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.13);
        padding-bottom: 1%;
        padding-left: 1%;
        animation: fade 0.2s;
    }
    .sub-list {
        font-size: small;
        text-align: left;
        margin-left: 5%;
        margin-top: 3%;
        margin-bottom: 5%;
    }
    h2 {
        font-weight: normal;
    }
    main {

    }
    .modalButton {
        display: block;
        position: fixed;
        bottom: 30px;
        right: 0;
        width: 15%;
        color: white;
        background-color: rgba(0, 63, 117, 0.76);
        border: 1px solid #004077;
        margin-right: 4%;
        border-radius: 20px;
        padding: 0 15px 0;
        cursor: pointer;

    }
    .modalButton:hover {
        background-color: rgba(0, 63, 117, 1);
    }

    img {
        width: 100%;
    }
    /*----------DESKTOP ANIMATION SECTION-----------*/

}


/*----------ANIMATION SECTION-----------*/
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

<template>
    <div class="container" >
        <div class="sensor-name" @click="toggleParams(sensor.name)">{{ sensor.name }} <button value=""  class="buttonIcon" @click="toggleHelp"><svg class="markIcon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                                                           viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve"><circle class="st0" cx="100" cy="99.74" r="94.74"/> <path class="st1" d="M144.05,69.43c0,22.45-16.12,33.38-36.07,35.49v20.53H92.06V96.67c25.52-3.84,35.88-10.74,35.88-25.32
		c0-12.09-8.82-20.14-27.05-20.14c-16.88,0-28.2,9.98-30.12,26.09l-13.62-7.87c4.22-19.57,20.72-32.61,44.89-32.61
		C126.59,36.81,144.05,49.28,144.05,69.43z M112.2,154.8c0,7.48-4.99,12.47-12.47,12.47c-7.48,0-12.47-4.99-12.47-12.47
		s4.99-12.47,12.47-12.47C107.22,142.33,112.2,147.32,112.2,154.8z"/></svg></button></div>
        <div v-if="toggled" class="button-wrapper">
        <button v-for="(type, index) in sensor.types" :key="index+42" class="parameter-button" :class="{highlight:selected.includes(type)}"
                @click="selectParameter(type, sensor.name)"
        >{{ type }}</button>
        </div>
        <Guide :toggle="helpToggled" :value="helpChosen" @closeModal="toggleHelp(sensor)"></Guide>
    </div>
</template>

<script>
    import Guide from "@/components/Guide"
export default {
    name: 'Parameter',
    components: {Guide},
    props: {
        sensor: {
            type: Object
        }
    },
    data: function(){
        return {
        toggled: false,
        selected: [],
            selection: {type: '', diameter: '', thread: '', delay: ''},
            helpToggled: false,
            helpChosen: null
        }
    },
    methods: {
        toggleParams: function (name) {
            if (this.$mq === 'desktop' || this.$mq === 'tablet'){
                this.toggled = true;
            } else {
                this.toggled = !this.toggled;
            }

            console.log("button " + name + " was clicked");
            this.helpChosen = '';
            this.helpChosen = name.toLowerCase();
        },
        selectParameter: function (type, name) {
            let optionName = name.toLowerCase();


            console.log(type);
            if(optionName === 'sensor types'){
                //vm.selection.type === type ? vm.selection.type = null : vm.selection.type = null
                this.selection.type = type
                this.$store.commit('SET_TYPE', type);
                //this.$store.commit('SET_TAG', type);
                console.log(this.$store.getters.TYPE_GET)
            }

            else if(optionName === 'diameter') {
                this.selection.diameter = type;
                this.$store.commit('SET_DIAMETER', type);
                //this.$store.commit('SET_TAG', type)
                console.log(this.$store.getters.DIAMETER_GET)
            }
            else if(optionName === 'thread'){
                this.selection.thread = type;
                this.$store.commit('SET_THREAD', type);
            }
            else if(optionName === 'delay'){
                this.selection.delay = type;
                this.$store.commit('SET_DELAY', type);
            }
            // Adds class if the button was pressed. If it already has that class, class is removed
/*            if (this.selected.includes(type)) {
                this.selected = [];
            } else {
                this.selected = [];
                this.selected.push(type)
            }*/
                this.selected = [];
                this.selected.push(this.$store.getters.DIAMETER_GET, this.$store.getters.TYPE_GET, this.$store.getters.THREAD_GET, this.$store.getters.DELAY_GET);
                //this.selected.push(getType);


            },
    toggleHelp: function (sensor) {
        this.helpToggled = !this.helpToggled;
        console.log(sensor)
    }
        },
    mounted() {
        let type = this.$store.getters.TYPE_GET;
        let diameter = this.$store.getters.DIAMETER_GET;
        let delay = this.$store.getters.DELAY_GET;
        let thread = this.$store.getters.THREAD_GET;

        this.selected = [];
        this.selected.push(type, diameter, thread, delay);
        if (this.$mq === 'desktop'){
            this.toggled = true;
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
    /*----------MOBILE SECTION-----------*/
    @media only screen and (max-width: 600px){
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

        .sensor-name {
            margin-top: 5%;
            margin-bottom: 5%;
            padding-bottom: 5%;
            display: flex;
            text-align: center;
            justify-content: center;
        }

        .container {
            width: 100%;
            padding-top: 2%;
        }

        img {
            width: 100%;
            position: relative;
            margin-bottom: 8%;
        }
        hr {
            border: .5px solid #e6e6e6;
            width: 90%;
        }
        .st0{fill:#004077;}
        .st1{fill:#FFFFFF;}
        .markIcon {
            width: 100%;
        }
        .buttonIcon {
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            cursor: pointer;
            outline: inherit;
            width: 5%;
            margin-left: 5%;
        }

    }

    /*----------TABLET SECTION-----------*/
    @media only screen and (min-width: 601px) and (max-width: 999px){
        .parameter-button {
            border: 1px solid #004077;
            margin-right: 4%;
            border-radius: 20px;
            padding: 0;
            color: #004077;
            margin-bottom: 10%;
            background-color: white;
            cursor: pointer;
            display: block;
            width: 50%;
            margin-left: 25%;
        }

        .parameter-button:hover {
            border: 1px solid white;
            background-color: #004077;
            color: white;

        }
        .button-wrapper {
            justify-content: center;
        }
        .sensor-name {
            margin-bottom: 10%;
            display: flex;
            justify-content: center;
        }
        .st0{fill:#004077;}
        .st1{fill:#FFFFFF;}
        .markIcon {
            width: 100%;
        }
        .buttonIcon {
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            cursor: pointer;
            outline: inherit;
            width: 13%;
            margin-left: 5%;
        }

    }
    /*----------DESKTOP SECTION-----------*/
    @media only screen and (min-width: 1000px){
        .parameter-button {
            border: 1px solid #004077;
            margin-right: 4%;
            border-radius: 20px;
            padding: 0;
            color: #004077;
            margin-bottom: 10%;
            background-color: white;
            cursor: pointer;
            display: block;
            width: 50%;
            margin-left: 25%;
        }

        .parameter-button:hover {
            border: 1px solid white;
            background-color: #004077;
            color: white;

        }
        .button-wrapper {
            justify-content: center;
        }
        .sensor-name {
            margin-bottom: 10%;
            display: flex;
            justify-content: center;
        }
        .st0{fill:#004077;}
        .st1{fill:#FFFFFF;}
        .markIcon {
            width: 100%;
        }
        .buttonIcon {
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            cursor: pointer;
            outline: inherit;
            width: 13%;
            margin-left: 5%;
        }

    }

</style>

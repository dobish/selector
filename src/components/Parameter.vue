<template>
    <div class="container">
        <div class="sensor-name" @click="toggleParams(sensor.name)">{{ sensor.name }}</div>
        <div v-if="toggled">
        <button v-for="(type, index) in sensor.types" :key="index+42" class="parameter-button" :class="{highlight:selected.includes(type)}"
                @click="selectParameter(type, sensor.name)"
        >{{ type }}</button>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'Parameters',
    components: {},
    props: {
        sensor: {
            type: Object
        }
    },
    data: function(){
        return {
        toggled: false,
        selected: []
        }
    },
    methods: {
        toggleParams: function (name) {
            this.toggled = !this.toggled
            console.log("button " + name + " was clicked")
        },
        selectParameter: function (type ) {
            console.log(type)
            // Adds class if the button was pressed. If it already has that class, class is removed
            if (this.selected.includes(type)) {
                this.selected = [];
            } else {
                this.selected = [];
                this.selected.push(type)
            }
            }
        }

}

</script>

<style scoped>
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
    }

    .container {
        width: 100%;
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
    .highlight {
        background-color: #004077 !important;
        color: white !important;
    }
</style>

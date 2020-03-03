<template>

    <div>
        <div class="sensor-image">
            <img alt="Vue logo" src="@/assets/DOL26.png">
        </div>

<!--  <li v-for="parameter in parameters" v-bind:key="parameter.name" v-bind:class="{toggled: isToggled}">{{ parameter.name }}<button @click="isToggled = !isToggled">Click</button></li>-->


        <ul v-for="(sensor, index) in sensors" v-bind:key="index">
            <li>{{sensor.name}}</li>
            <div v-for="(type, index) in sensor.types" :key="index" class="parameter-button" :class="{highlight:selected.includes(type)}"
                 @click="selected.includes(type) ? selected.splice(selected.indexOf(type), 1) : selected.push(type)"
            >{{ type }}</div>
        </ul>
<ContactForm></ContactForm>
        <!--<button type="submit">Show sensors</button>-->
    </div>

</template>

<script>
    const API_URL = "http://localhost:4000/sensors";

    import ContactForm from "@/components/ContactForm";
export default {
  name: 'Parameters',
  components: {
      ContactForm
  },
  props: ['msg'],
  data: function(){
    return {
      title: 'dol-sensors',
      parameters: [{name: 'Sensor Type', types: ['SCR', 'NPN', 'PNP']}, {name: 'Diameter', types: ['18mm', '200mm']}, {name: 'Delay', types: ['OFF', 'ON']}],
      isToggled: null,
        isSelected: null,
        visible: false,
        sensors: [],
        selected: []
    }
  },
    mounted() {
        fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.sensors = result;
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
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li{
    list-style: none;
    font-family:"Work Sans";
    padding-bottom: 2%;
    color: #2f2f2f;
  }
  ul {
    margin: 0;
      margin-bottom: 5%;
      margin-left: 25%;
    padding: 0;
      width: 50%;
  }
  .toggled{
      display: none;
  }
  .none {
      display: none;
  }
  .highlight {
      background-color: #004077;
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
    }
  .sensor-image {
      width: 100%;
  }


</style>

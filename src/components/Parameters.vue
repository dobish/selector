<template>
    <div>
<ul>
<!--  <li v-for="parameter in parameters" v-bind:key="parameter.name" v-bind:class="{toggled: isToggled}">{{ parameter.name }}<button @click="isToggled = !isToggled">Click</button></li>-->
<Parameter></Parameter>

   <ul >
        <li v-for="(value, index) in parameters" v-bind:key="index">
            {{ log(value.types)}}
            <template v-if="!Array.isArray(value)">
                <div>{{value.name}} </div>
                <div v-for="(type, i) in value.types" :key="i" :class="{selected : i == isSelected  }"
             @click="selectItem(i), toggleParameter(index)" class="parameter-button">{{ type }}</div>
                <button @click="toggleParameter(index)">Click</button>
            </template>

       </li>
    </ul>
</ul>

    </div>
</template>

<script>
  import Parameter from "@/components/Parameter";
export default {
  name: 'Parameters',
  components: {
    Parameter
  },
  props: {
    msg: String,

  },
  data: function(){
    return {
      title: 'dol-sensors',
      parameters: [{name: 'Sensor Type', types: ['SCR', 'NPN', 'PNP']}, {name: 'Diameter', types: ['18mm', '200mm']}, {name: 'Delay', types: ['OFF', 'ON']}],
      isToggled: null,
        isSelected: null,
        visible: false
    }
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
    padding-bottom: 8%;
    color: #2f2f2f;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  .toggled{
      display: none;
  }
  .none {
      display: none;
  }
  .selected {
      background-color: #004077;
      color: white;
  }
    .parameter-button {
        border: 1.5px solid #004077;
        margin-right: 4%;
        border-radius: 20px;
        padding: 0 2% 0;
        display: inline-block;

    }
</style>

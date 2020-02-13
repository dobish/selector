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
                <div v-for="(type, i) in value.types" :key="i" v-show="isToggled" :class="{selected : i == isSelected}"
             @click="selectItem(i)">{{ type }}</div>
                <button @click="isToggled = !isToggled">Click</button>
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
      parameters: [{name: 'Sensor Type', types: ['SCR', 'NPN', 'PNP']}, {name: 'Diameter', types: ['18mm', '200mm']}],
      isToggled: null,
        isSelected: null
    }
  },
  methods: {
    log(message){
        console.log(message);
    },
      selectItem: function(i){
        this.isSelected = i;
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
      padding-bottom: 20%;
  }
  .selected {
      background-color: #004077;
  }
</style>

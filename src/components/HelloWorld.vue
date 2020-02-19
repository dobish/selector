<template>
  <div class="hello">
      <Message :numbers = "numbers"></Message>
    <router-link to="/msg">Message Component</router-link>
  </div>

</template>

<script>
  import Message from "@/components/Message";
export default {
  components: {Message},
  name: 'HelloWorld',
  props: {username: String},
  data: function(){
    return {
      numbers: [1, 2, 3]
    }
  },
  methods: {

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="hello">
    <p>{{ hello }}</p>
    <input type="text" :value="msg" @input="changeMessage">
    <br>
    <p>{{ messageHello }}</p>
    <router-link to="/">aaaaaa</router-link>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['msg'],
  data: function(){
    return {
      hello: 'Hello World',
      messageHello: 'MESSAGE'
    }
  },
  methods: {
    changeMessage(event) {
      this.messageHello = event.target.value;
      this.$emit('messageChanged', this.messageHello);
    }
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

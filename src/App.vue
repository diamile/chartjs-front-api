<template>
  <div id="app">
    <h1>Chart js</h1>
    <div class="container d-flex align-items-center justify-content-center">
      <select class="form-select form-contain" v-model="graphe" @change="onChange()">
      <option selected>Selectionner un graphe</option>
      <option value="piechart">piechart</option>
      <option value="radarchart">radarchart</option>
    </select>
    </div><br>

    <router-view ></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      graphe:""
    }
  },
  methods:{
    onChange(){
      this.$router.push(`/${this.graphe}`)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.form-contain{
  width:300px;
}
</style>

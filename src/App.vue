<template>

  


    <v-container style="max-width:auto">

  <div id="app">    <AddTask/>
    <Tasks/>
    </div>
   </v-container>

</template>


<script>
import Tasks from "./components/Tasks" 
import AddTask from "./components/AddTask"

export default {
  name: 'App',
  components: {
    Tasks,
    AddTask,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

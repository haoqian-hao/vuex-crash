<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <v-list>
      <v-list-item-group 
      class="mt-16"> 
        <v-list-item
          v-for="(router, i) in routers"
          :key="i"
          @click="$router.push(router.path)"
          active-class="bg-active"
        >
          <v-list-item-content>
            <v-list-item-title class="routertitle" v-text="router.name"></v-list-item-title>
          </v-list-item-content>
    
        </v-list-item>
      </v-list-item-group> 

    </v-list>


    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>


<script>

export default {
  name: 'App',
  data: () => ({ 
    drawer: null,
    routers : [
      {path: '/', name: 'Home'},
      {path: '/about', name: 'About'},
      {path: '/echart', name: 'Echart'}, 
      {path: '/Reuse', name : "Reuse"}

    ]
  }),
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

.list-item-title:hover{
  background: green;
}

.bg-active {
  background-color: green;
}
.routertitle {
  font-size: x-large;
  font-family: "Times New Roman", Times, serif;

}

</style>

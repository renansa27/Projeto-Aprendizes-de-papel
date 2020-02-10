<template>
  <v-app>
    <Globaltoolbar :clipped="drawer" @openDrawer="drawer = !drawer" />
    <div class="content">
      <!-- A fazer a classe content -->
      <Globaldrawer :drawer="drawer" />
      <v-content>
        <div class="headContent">
          <Globalheadline />
        </div>
        <v-divider />
        <router-view></router-view>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import Globaldrawer from "./components/global/Globaldrawer";
import Globaltoolbar from "./components/global/Globaltoolbar";
import Globalheadline from "./components/global/Globalheadline";

export default {
  name: "App",
  components: {
    Home,
    Globaldrawer,
    Globaltoolbar,
    Globalheadline
  },
  data() {
    return {
      drawer: false
      //
    };
  },
  methods: {
    openDrawer(bool) {
      return !bool;
    }
  }
};
</script>

<style scoped>
.headContent {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

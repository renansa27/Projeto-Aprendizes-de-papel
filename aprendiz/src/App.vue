<template>
  <v-app>
    <Globaltoolbar :clipped="drawer" @openDrawer="drawer = !drawer"/>
    <Globaldrawer :drawer="drawer"/>
    <v-content>
      <Globalheadline/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Home from './views/Home'
import Globaldrawer from './components/global/Globaldrawer'
import Globaltoolbar from './components/global/Globaltoolbar'
import Globalheadline from './components/global/Globalheadline'

export default {
  name: 'App',
  components: {
    Home,
    Globaldrawer,
    Globaltoolbar,
    Globalheadline
  },
  data () {
    return {
      drawer: false,
      //
    }
  },
  methods: {
    openDrawer(bool){
      return !bool;
    }
  }
}
</script>

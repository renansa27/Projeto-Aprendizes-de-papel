<template>
  <v-navigation-drawer
    clipped
    v-model="drawer"
    app
    width="250"
  >
    <v-list>
      <v-list-tile
        v-for="option in options"
        :key="option.title"
        @click="routing(option.route)"
      >
        <v-list-tile-action>
          <v-icon>{{option.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{option.title}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
    name: 'Globaldrawer',
    data(){
      return{
        options: [
          { title: 'Home', icon:'home', route: '/'},  
          { title: 'Aulas', icon: 'class', route:'/aulas'},
          { title: 'Fazer chamada', icon: 'event', route: '/chamada'},
          { title: 'Criar cadastro', icon: 'assignment_ind', route: '/cadastro'}
        ]
      }
    },
    methods : {
      routing(route) {
        this.$router.push(route);
      }
    },
    props:{
      drawer:{
        type: Boolean,
        default: false
      }
    }
}
</script>

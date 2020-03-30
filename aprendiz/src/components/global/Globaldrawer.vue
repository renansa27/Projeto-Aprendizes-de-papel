<template>
  <v-navigation-drawer clipped v-model="drawer" app width="250">
    <v-list v-for="option in options" :key="option.title">
      <!-- <v-list-tile v-if="option.title == 'Criar cadastro'">
        <v-list-tile-action>
          <v-icon>{{option.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{option.title}}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-group>
          <v-list-tile @click="routing(option.routes[0].route)">
            <v-list-tile-action>
              <v-icon>{{option.routes[0].icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{option.routes[0].title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list-tile>-->

      <v-list-group
        v-if="option.title == 'Criar cadastro'"
        v-model="option.active"
        :prepend-icon="option.icon"
        no-action
      >
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{ option.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <v-list-tile v-for="item in option.routes" :key="item.title" @click="routing(item.route)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>

      <!-- <v-group -->
      <v-list-tile v-else @click="routing(option.route)">
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
  name: "Globaldrawer",
  data() {
    return {
      options: [
        { title: "Home", icon: "home", active: true, route: "/" },
        { title: "Aulas", icon: "class", active: true, route: "/aulas" },
        {
          title: "Fazer chamada",
          active: true,
          icon: "event",
          route: "/chamada"
        },
        {
          title: "Criar cadastro",
          icon: "assignment_ind",
          active: false,
          routes: [
            {
              title: "Criar aluno",
              icon: "person",
              route: "/cadastro/aluno"
            },
            {
              title: "Criar professor",
              icon: "school",
              route: "/cadastro/professor"
            },
            {
              title: "Criar funcionário",
              icon: "group",
              route: "/cadastro/funcionario"
            }
          ]
        },
        {
          title: "Finanças",
          active: true,
          icon: "attach_money",
          route: "/financas"
        }
        /*         {
          title: "Criar cadastro",
          icon: "assignment_ind",
          route: "/cadastro/professor"
        },
        {
          title: "Criar cadastro",
          icon: "assignment_ind",
          route: "/cadastro/funcionario"
        } */
      ]
    };
  },
  methods: {
    routing(route) {
      this.$router.push(route);
    }
  },
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  }
};
</script>

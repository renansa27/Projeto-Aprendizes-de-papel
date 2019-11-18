<template>
  <v-container grid-list-md text-xs-left>
    <v-layout row wrap justify-start>
      <v-flex xs12>
        <span class="headline">Registro de Aulas</span>
      </v-flex>
      <v-flex xs12>
        <span class="subheading">Selecione uma das opções abaixo</span>
      </v-flex>
      <v-flex
        shrink
        v-for="card in cards"
        :key="card.title"
        justify-start
      >
        <v-hover>
          <!--
          <v-card width="150" height="150"
            contain
            @click="OnCards"
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
          >
            <v-layout justify-center row wrap fill-height>
              <v-icon x-large>{{card.icon}}</v-icon>
            </v-layout>
            <v-layout text-xs-center>
              <v-card-text>
                <span class="body-2">{{card.title}}</span>
              </v-card-text>
            </v-layout>
          </v-card>
          -->
          <v-card
            contain
            @click="OnCards"
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
          >
            <v-layout justify-start align-center ma-2>
              <v-icon x-large>{{card.icon}}</v-icon>
              <v-divider vertical></v-divider>
              <span class="subheading">{{card.title}}</span>
            </v-layout>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>


export default {
    name: 'Aulas',
    data(){
      return{
        cards: [
          { color: 'purple', title: 'Registrar aula regular', icon: 'list_alt'},
          { color: 'blue', title: 'Registrar aula extra', icon: 'event'},
          { color: 'red', title: 'Verificar registro de aulas', icon: 'find_in_page'},
        ]
      }
    },
    methods: {
      OnCards(option){
        console.log('deu');
      }
    }
}
</script>

<style scoped>
.cards{
  display: inline-block;
  justify-content: flex-start;
}
.v-card__text{
  padding: 12px;
}

.test{
  background-color: grey;
}

</style>


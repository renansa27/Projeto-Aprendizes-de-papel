<template>
  <v-layout row wrap ml-1>
    <div>
      <v-tabs v-model="active" dark slider-color="brown">
        <v-tab v-for="n in options" :key="n" ripple>{{n}}</v-tab>
      </v-tabs>
      <v-text-field v-model="message" solo prepend-inner-icon="search" label="Negocim"></v-text-field>
      <v-tabs-items v-model="tabsitems">
        <v-tab-item v-for="n in options" :key="n" :value="options[n]">
          <v-card ml-1></v-card>
        </v-tab-item>
      </v-tabs-items>
      <!-- <v-container class="grey lighten-5">
        <v-row class="mb-6" no-gutters>
          <v-col v-for="n in alunos" :key="n.matricula">
            <v-card class="pa-2" tile outlined>Teste</v-card>
          </v-col>
        </v-row>
      </v-container>-->
      <v-container width="900" class="grey lighten-5">
        <v-row no-gutters>
          <template v-for="n in 4">
            <v-col :key="n">
              <v-card class="pa-2" outlined tile>Column</v-card>
            </v-col>
            <v-responsive v-if="n === 2" :key="`width-${n}`"></v-responsive>
          </template>
        </v-row>
      </v-container>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: "Quicksearch",
  data: () => ({
    active: null,
    tabsitems: null,
    message: "",
    options: ["Alunos", "Professores", "Últimas aulas"],
    alunos: [
      { nome: "Renan", idade: "24", faltas: "2", matricula: "190028" },
      { nome: "Iago", idade: "23", faltas: "8", matricula: "190999" },
      { nome: "Jardel", idade: "23", faltas: "8", matricula: "190997" }
    ]
  })
};
</script>

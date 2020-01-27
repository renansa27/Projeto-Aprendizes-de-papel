<template>
  <v-layout row wrap ma-3>
    <v-layout ml-3 column wrap>
      <span class="display-1">Dia {{date}}</span>
      <v-layout row wrap align-start>
        <div class="mr-3">
          <span class="headline">Próxima aula:</span>
        </div>
        <v-card width="300">
          <v-layout row wrap ml-1 mr-1>
            <v-layout column wrap>
              <span class="body-2">Aula nº13: História</span>
              <span class="body-2">Professor: Mário</span>
            </v-layout>
            <v-layout column wrap mr-1>
              <span class="body-2">Dia: 10/08/2019</span>
              <span class="body-2">Horário: 08:50</span>
            </v-layout>
            <v-divider vertical />
            <v-layout shrink align-center pl-1>
              <v-icon large>pageview</v-icon>
            </v-layout>
          </v-layout>
        </v-card>
      </v-layout>
    </v-layout>
    <v-divider vertical />
    <Quicksearch />
    <!-- <v-layout wrap ma-1>
    </v-layout>-->
  </v-layout>
</template>

<script>
import Quicksearch from "../components/Quicksearch";

export default {
  name: "Home",
  components: {
    Quicksearch
  },
  methods: {
    getDate() {
      return new Date().toLocaleDateString("pt-br");
    },
    log() {
      console.log("a");
    }
  },
  data() {
    return {
      date: "",
      nextClass: ""
      /* headers: [
          { text: 'Matricula', value: 'matricula'},
          { text: 'Aluno', value: 'nome'},
          { text: 'Idade', value: 'idade'},
          { text: 'Faltas', value: 'faltas'}
        ],
        alunos: [
          { nome: 'iago', idade: 21, matricula: 0, faltas: 1 },
          { nome: 'igor', idade: 16, matricula: 1, faltas: 1 },
          { nome: 'junior', idade: 11, matricula: 2, faltas: 0 },
          { nome: 'ellen', idade: 17, matricula: 3, faltas: 2 }
        ] */
    };
  },
  created() {
    this.date = this.getDate();
  }
};
</script>

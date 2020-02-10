<template>
  <v-layout row wrap ma-3>
    <v-layout ml-5 column wrap>
      <div class="rowDay">
        <span class="display-1">Dia {{date}}</span>
        <div class="tamSelect">
          <v-select :items="ano" label="Ano"></v-select>
        </div>
        <div class="tamSelect">
          <v-select :items="turma" label="Turma"></v-select>
        </div>
        <div></div>
        <div></div>
      </div>
      <v-layout mt-4 row wrap align-start>
        <div class="mr-3">
          <span class="headline">Aulas do dia:</span>
        </div>
        <v-col>
          <v-card v-for="(aula, index) in aulas" :key="aula" width="300">
            <v-layout row wrap mb-2 ml-1 mr-1>
              <v-layout column wrap>
                <span class="body-2">Aula nº{{index+1}}: {{aula.materia}}</span>
                <span class="body-2">Professor(a): {{aula.professor}}</span>
              </v-layout>
              <v-layout column wrap mr-1>
                <span class="body-2">Dia: {{aula.dia}}</span>
                <span class="body-2">Horário: {{aula.horario}}</span>
              </v-layout>
              <v-divider vertical />
              <v-layout shrink align-center pl-1>
                <v-icon large>pageview</v-icon>
              </v-layout>
            </v-layout>
          </v-card>
        </v-col>
      </v-layout>
    </v-layout>
    <v-divider vertical />
    <Quicksearch mt-4 class="quickSearch" />
  </v-layout>
</template>

<script>
import Quicksearch from "../components/Quicksearch";

export default {
  name: "Home",
  components: {
    Quicksearch
  },
  data() {
    return {
      date: "",
      nextClass: "",
      ano: [
        "1º EF ",
        "2º EF",
        "3º EF",
        "4º EF",
        "5º EF",
        "6º EF",
        "7º EF",
        "8º EF",
        "9º EF",
        "1º EM",
        "2º EM",
        "3º EM"
      ],
      turma: ["A", "B", "C", "D", "E", "F", "G"],
      aulas: [
        {
          materia: "História",
          professor: "Mário",
          dia: "09/02/2020",
          horario: "07:30"
        },
        {
          materia: "Matemárica",
          professor: "Rogério",
          dia: "09/02/2020",
          horario: "08:30"
        },
        {
          materia: "Biologia",
          professor: "Fábio",
          dia: "09/02/2020",
          horario: "09:30"
        },
        {
          materia: "Geografia",
          professor: "Rodrigo",
          dia: "09/02/2020",
          horario: "10:30"
        },
        {
          materia: "Português",
          professor: "Thaís",
          dia: "09/02/2020",
          horario: "11:30"
        },
        {
          materia: "Física",
          professor: "José",
          dia: "09/02/2020",
          horario: "12:40"
        }
      ]
    };
  },
  watch: {
    /* aulas: function() {
      this.tamAulas = this.aulas.length();
    } */
  },
  methods: {
    getDate() {
      return new Date().toLocaleDateString("pt-br");
    }
  },
  created() {
    this.date = this.getDate();
  }
};
</script>

<style scoped>
.tamSelect {
  padding-right: 10px;
  width: 100px;
}
.rowDay {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
}
.quickSearch {
  justify-content: center;
}
</style>

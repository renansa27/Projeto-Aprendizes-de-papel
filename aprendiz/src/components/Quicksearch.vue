<template>
  <v-layout row wrap ml-1>
    <v-tabs grow @change="mudaMessage" v-model="active" dark slider-color="brown">
      <!-- <v-tabs class="Vtabs" @change="mudaMessage" v-model="active" dark slider-color="brown"> -->
      <v-tab>Alunos</v-tab>
      <v-tab>Professores</v-tab>
      <!-- <v-tab>Últimas aulas</v-tab> -->
      <!-- <div class="divTxtField"> -->
      <v-text-field
        class="textField"
        v-model="content"
        prepend-inner-icon="search"
        :label="message"
        @input="search"
      ></v-text-field>
      <!-- </div> -->
      <v-tab-item>
        <!-- <div class="divCard">
          <div class="divCard" v-for="(aluno, index) in alunos" :key="aluno">
          <v-col>
            <v-card v-if="isPar(aluno,index)" color="rgb(194,194,194)">
              <v-row no-gutters>
                <v-card-text>{{aluno.nome}}</v-card-text>
                <v-card-text>{{aluno.nome}}</v-card-text>
              </v-row>
            </v-card>
            <v-card v-if="!isPar(aluno,index)" color="rgb(160,160,160)">
              <v-card-text>{{aluno.nome}}</v-card-text>
            </v-card>
        </v-col>-->
        <v-data-table :headers="headersAlunos" :items="alunos" class="elevation-1">
          <template slot="headerCell" slot-scope="props">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <span v-on="on">{{ props.header.text }}</span>
              </template>
              <span>{{ props.header.text }}</span>
            </v-tooltip>
          </template>
          <template v-slot:items="props">
            <td>{{ props.item.nome }}</td>
            <td>{{ props.item.faltas }}</td>
          </template>
        </v-data-table>
        <!-- </div> -->
      </v-tab-item>
      <v-tab-item>
        <v-data-table :headers="headersProfessores" :items="professores" class="elevation-1">
          <template slot="headerCell" slot-scope="props">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <span v-on="on">{{ props.header.text }}</span>
              </template>
              <span>{{ props.header.text }}</span>
            </v-tooltip>
          </template>
          <template v-slot:items="props">
            <td>{{ props.item.nome }}</td>
            <td>{{ props.item.materia }}</td>
          </template>
        </v-data-table>
      </v-tab-item>
      <!-- <v-tab-item>
        <v-container align-start>
          <v-card v-for="aula in aulas" :key="aula">
            <v-card-text>{{aula.nome}}</v-card-text>
          </v-card>
        </v-container>
      </v-tab-item>-->
    </v-tabs>
  </v-layout>
</template>

<script>
export default {
  name: "Quicksearch",
  data: () => ({
    active: null,
    tabsitems: null,
    content: "",
    message: "",
    options: ["Alunos", "Professores", "Últimas aulas"],
    singleSelect: false,
    selected: [],
    headersAlunos: [
      {
        text: "Nome do aluno",
        align: "left",
        sortable: false,
        value: "nome"
      },
      { text: "Faltas", value: "faltas" }
    ],
    headersProfessores: [
      {
        text: "Nome do professor",
        align: "left",
        sortable: false,
        value: "nome"
      },
      { text: "Matéria", value: "materia" }
    ],
    alunos: [
      { id: 0, nome: "Renan Sá Cavalcante", faltas: 3 },
      { id: 1, nome: "Rodrigo Sá Cavalcante", faltas: 4 },
      { id: 2, nome: "Thaís Sá Cavalcante", faltas: 5 }
    ],
    professores: [
      { id: 0, nome: "Renan Sá Cavalcante", materia: "Matemática" },
      { id: 1, nome: "Rodrigo Sá Cavalcante", materia: "Física" },
      { id: 2, nome: "Thaís Sá Cavalcante", materia: "Química" }
    ],
    aulas: [
      { id: 0, nome: "Matemátiva" },
      { id: 1, nome: "Português" },
      { id: 2, nome: "História" }
    ]
  }),
  methods: {
    mudaMessage(tab) {
      switch (tab) {
        case 0:
          this.message = "Pesquisar aluno";
          break;
        case 1:
          this.message = "Pesquisar professor";
          break;
        default:
          this.message = "Pesquisar uma aula";
          break;
      }
    },
    search(text) {
      switch (this.active) {
        case 0:
          //alert(text);
          this.alunos.forEach(aluno => {
            if (aluno["nome"].contains(text)) {
              alert(aluno);
            }
          });
          break;
        case 1:
          break;
        default:
          break;
      }
    },
    isPar(aluno, index) {
      if (aluno.nome == this.alunos[index].nome) {
        if (index % 2 == 0) {
          return true;
        } else {
          return false;
        }
      }
    }
  },
  beforMount() {}
};
</script>

<style>
.Vtabs {
  align-items: center;
  justify-content: center;
  /* width: 650px; */
}
.divCard {
  margin-top: 5px;
  margin-bottom: 5px;
}
.divTxtField {
  padding-bottom: 10px;
  /* width: 300px; */
}
.textField {
  width: 35%;
  margin-right: 4%;
  padding-top: 7px;
  padding-left: 50px;
}
.card {
  margin-top: 3px;
}
</style>

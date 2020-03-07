<template>
  <v-container grid-list-md text-xs-left>
    <v-layout row wrap justify-start>
      <v-flex>
        <div class="rowDay">
          <div class="tamSelect">
            <v-select :items="ano" v-model="selectedAno" label="Ano"></v-select>
          </div>
          <div class="tamSelect">
            <v-select :items="turma" v-model="selectedTurma" label="Turma"></v-select>
          </div>
        </div>
        <v-data-table hide-actions :headers="headersAlunos" :items="alunos" class="elevation-1">
          <template slot="headerCell" slot-scope="props">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <span v-on="on">{{ props.header.text }}</span>
              </template>
              <span>{{ props.header.text }}</span>
            </v-tooltip>
          </template>
          <template v-slot:items="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.nome }}</td>
            <td>{{ props.item.matricula }}</td>
            <td>{{ props.item.faltas }}</td>
            <td>
              <div class="teste">
                <v-checkbox class="checkbox" v-model="props.item.checkbox"></v-checkbox>
              </div>
            </td>
          </template>
        </v-data-table>
        <v-btn>Save</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Chamada",
  data() {
    return {
      selectedAno: "1º EF ",
      selectedTurma: "A",
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
      alunos: [
        {
          id: "1",
          nome: "Renan",
          matricula: "123456789",
          faltas: 2,
          checkbox: false
        },
        {
          id: "2",
          nome: "Rodrigo",
          matricula: "234567891",
          faltas: 4,
          checkbox: false
        },
        {
          id: "3",
          nome: "Thaís",
          matricula: "345678912",
          faltas: 6,
          checkbox: false
        },
        {
          id: "4",
          nome: "Vaneide",
          matricula: "456789123",
          faltas: 8,
          checkbox: false
        },
        {
          id: "5",
          nome: "Marcondes",
          matricula: "567891234",
          faltas: 10,
          checkbox: false
        },
        {
          id: "6",
          nome: "Pedro",
          matricula: "678912345",
          faltas: 12,
          checkbox: false
        },
        {
          id: "7",
          nome: "Renan1",
          matricula: "234567890",
          faltas: 2,
          checkbox: false
        },
        {
          id: "8",
          nome: "Rodrigo1",
          matricula: "345678910",
          faltas: 4,
          checkbox: false
        },
        {
          id: "9",
          nome: "Thaís1",
          matricula: "456789120",
          faltas: 6,
          checkbox: false
        },
        {
          id: "10",
          nome: "Vaneide1",
          matricula: "567891230",
          faltas: 8,
          checkbox: false
        },
        {
          id: "11",
          nome: "Marcondes1",
          matricula: "678912340",
          faltas: 10,
          checkbox: false
        },
        {
          id: "12",
          nome: "Pedro1",
          matricula: "789123450",
          faltas: 12,
          checkbox: false
        }
      ],
      headersAlunos: [
        {
          text: "ID",
          align: "left",
          sortable: false,
          value: "id"
        },
        { text: "Nome", value: "nome", sortable: false },
        { text: "Matrícula", value: "matricula", sortable: false },
        { text: "Faltas", value: "faltas", sortable: false },
        { text: "Presença", value: "", align: "left", sortable: false }
      ]
    };
  }
};
</script>

<style scoped>
.teste {
  height: 22px;
  width: 22px;
}
.tamSelect {
  padding-right: 10px;
  width: 150px;
}
.rowDay {
  display: flex;
  justify-content: center;
}
</style>

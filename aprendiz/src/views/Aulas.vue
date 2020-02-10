<template>
  <v-container grid-list-md text-xs-left>
    <v-layout row wrap justify-start>
      <v-flex xs12>
        <span class="headline">Registro de Aulas</span>
      </v-flex>
      <v-flex xs12>
        <span class="subheading">Selecione uma das opções abaixo</span>
      </v-flex>
      <v-flex>
        <v-tabs grow dark slider-color="white">
          <v-tab>
            <v-icon class="icon">list_alt</v-icon>Registrar aula regular
          </v-tab>
          <!-- <v-tab>
            <v-icon class="icon">event</v-icon>Registrar aula extra
          </v-tab>-->
          <v-tab>
            <v-icon class="icon">find_in_page</v-icon>Verificar registro de aulas
          </v-tab>
          <v-tab-item>
            <v-flex class="div-primary">
              <div class="div-menu-upper">
                <div class="div-menu">
                  <v-menu :close-on-content-click="false" transition="scale-transition" offset-x>
                    <template v-slot:activator="{ on }">
                      <h4>
                        Selecione o dia da aula:
                        <v-btn class="btn-rounded" v-on="on">{{dateFormated}}</v-btn>
                      </h4>
                    </template>
                    <v-date-picker
                      v-model="date"
                      scrollable
                      color="rgb(66,66,66)"
                      reactive
                      show-current
                      first-day-of-week="0"
                      locale="pt-br"
                    ></v-date-picker>
                  </v-menu>
                </div>
                <div class="div-menu">
                  <v-menu :close-on-content-click="false" transition="scale-transition" offset-x>
                    <template v-slot:activator="{ on }">
                      <h4>
                        Selecione o horário da aula:
                        <v-btn class="btn-rounded" v-on="on">{{time}}</v-btn>
                      </h4>
                    </template>
                    <v-time-picker
                      v-model="time"
                      scrollable
                      color="rgb(66,66,66)"
                      reactive
                      show-current
                    ></v-time-picker>
                  </v-menu>
                </div>
              </div>
              <v-divider></v-divider>
              <div class="div-text-input">
                <v-textarea
                  label="Conteúdo da aula"
                  auto-grow
                  outlined
                  rows="3"
                  row-height="25"
                  shaped
                ></v-textarea>
              </div>
              <v-divider></v-divider>
              <div>
                <div class="div-btn-save">
                  <v-btn class="btn-save">Salvar Aula</v-btn>
                </div>
              </div>
            </v-flex>
          </v-tab-item>
          <!-- <v-tab-item>
            <span>Item número 2</span>
          </v-tab-item>-->
          <v-tab-item>
            <v-data-table :headers="headersAulas" :items="aulas" class="elevation-1">
              <template slot="headerCell" slot-scope="props">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <span v-on="on">{{ props.header.text }}</span>
                  </template>
                  <span>{{ props.header.text }}</span>
                </v-tooltip>
              </template>
              <template v-slot:items="props">
                <td>{{ props.item.data }}</td>
                <td>{{ props.item.hora }}</td>
                <td>{{ props.item.conteudo }}</td>
                <td>
                  <!-- <v-btn @click="editClass(props.item.id)" color="rgb(166,166,166)" fab>
                    <v-icon>edit</v-icon>
                  </v-btn>-->
                  <EditButton />
                </td>
              </template>
            </v-data-table>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EditButton from "./EditButton";

export default {
  name: "Aulas",
  components: {
    EditButton
  },
  data() {
    return {
      date: null,
      dateFormated: null,
      time: null,
      headersAulas: [
        {
          text: "Data",
          align: "left",
          sortable: false,
          value: "data"
        },
        { text: "Hora", value: "hora" },
        { text: "Conteúdo", value: "conteudo" },
        { text: "", value: "", align: "left", sortable: false }
      ],
      aulas: [
        {
          id: 10,
          data: "27/01/2020",
          hora: "11:30",
          conteudo:
            "Adição, subtração, divisão, multiplicação, frações, racionalização"
        },
        {
          id: 2,
          data: "27/01/2020",
          hora: "12:30",
          conteudo:
            "Adição, subtração, divisão, multiplicação, frações, racionalização"
        },
        {
          id: 3,
          data: "27/01/2020",
          hora: "12:30",
          conteudo:
            "Adição, subtração, divisão, multiplicação, frações, racionalização"
        },
        {
          id: 4,
          data: "27/01/2020",
          hora: "12:30",
          conteudo:
            "Adição, subtração, divisão, multiplicação, frações, racionalização"
        },
        {
          id: 5,
          data: "27/01/2020",
          hora: "12:30",
          conteudo:
            "Adição, subtração, divisão, multiplicação, frações, racionalização"
        },
        {
          id: 6,
          data: "27/01/2020",
          hora: "12:30",
          conteudo:
            "Adição, subtração, divisão, multiplicação, frações, racionalização"
        }
      ]
    };
  },
  methods: {
    editClass(e) {
      console.log("Valor do evento: ", e);
      /* this.aulas.forEach(aula => {
        if (aula.id == e) {
          aula.conteudo = "Mudou o conteúdo!";
        }
      }); */
    }
  },
  beforeMount() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = String(today.getFullYear());
    var hour = String(today.getHours()).padStart(2, "0");
    var minutes = String(today.getMinutes()).padStart(2, "0");
    this.date = yyyy + "-" + mm + "-" + dd;
    this.time = hour + ":" + minutes;
  },
  watch: {
    date: function() {
      this.dateFormated = this.date
        .split("-")
        .reverse()
        .join("/");
    }
  }
};
</script>

<style scoped>
.div-text-input {
  margin-left: 13.3%;
  margin-right: 19%;
}
.div-btn-save {
  display: flex;
  justify-content: flex-end;
}
.btn-save {
  border-radius: 20px;
  margin-right: 19%;
  margin-top: 1%;
}
.btn-rounded {
  border-radius: 20px;
}
.btn-rounded-edit {
  border-radius: 20px;
  width: 1px;
}
.icon {
  margin-right: 5px;
}
.cards {
  display: inline-block;
  justify-content: flex-start;
}
.v-card__text {
  padding: 12px;
}
.div-primary {
  background-color: rgb(190, 190, 190);
}
.div-menu {
  width: 30%;
}
.div-menu-upper {
  display: inline-flex;
  justify-content: space-evenly;
  align-items: stretch;
  margin-bottom: 10px;
  width: 100%;
}
</style>
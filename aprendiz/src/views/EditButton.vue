<template>
  <!-- <v-row justify="center"> -->
  <v-dialog v-model="dialog" persistent max-width="800px">
    <template v-slot:activator="{ on }">
      <v-btn color="rgb(166,166,166)" fab v-on="on">
        <v-icon>edit</v-icon>
      </v-btn>
    </template>
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
              v-model="datePicker"
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
                <v-btn class="btn-rounded" v-on="on">{{aula.hora}}</v-btn>
              </h4>
            </template>
            <v-time-picker
              v-model="aula.hora"
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
          v-model="aula.conteudo"
        ></v-textarea>
      </div>
      <v-divider></v-divider>
      <div>
        <div class="div-btn-save">
          <v-btn @click="dialog=false" class="btn-save">Cancelar</v-btn>
          <v-btn @click="updateClass()" class="btn-save">Salvar</v-btn>
        </div>
      </div>
    </v-flex>
  </v-dialog>
  <!-- </v-row> -->
</template>

<script>
import barramento from "@/barramento";
export default {
  props: {
    objectAula: Object
  },
  data: () => ({
    dialog: false,
    aula: {
      id: null,
      data: null,
      hora: null,
      conteudo: null
    },
    dateFormated: null,
    datePicker: null
  }),
  /* beforeMount() {
    alert(objectAula);
    this.aluno.id = objectAula.id;
    this.aluno.data = objectAula.data;
    this.aluno.hora = objectAula.hora;
    this.aluno.conteudo = objectAula.conteudo;
  }, */
  created() {
    this.aula.id = this.objectAula.id;
    this.aula.data = this.objectAula.data;
    this.aula.hora = this.objectAula.hora;
    this.aula.conteudo = this.objectAula.conteudo;
    this.datePicker = this.objectAula.data
      .split("/")
      .reverse()
      .join("-");
  },
  watch: {
    datePicker: function() {
      this.dateFormated = this.datePicker
        .split("-")
        .reverse()
        .join("/");
    } /* ,
    aula: function() {
      this.dateFormated = this.aula.data
        .split("-")
        .reverse()
        .join("/");
    } */
  },
  methods: {
    updateClass() {
      barramento.$emit("aulaEvent", this.aula, this.datePicker);
      this.dialog = false;
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
  margin-right: 5%;
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
  margin-top: 20px;
  display: inline-flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
}
.div-menu-upper {
  display: inline-flex;
  justify-content: space-evenly;
  align-items: stretch;
  margin-bottom: 10px;
  width: 100%;
}
</style>
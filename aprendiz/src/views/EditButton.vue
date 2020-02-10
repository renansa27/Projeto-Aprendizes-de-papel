<template>
  <v-row justify="center">
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
                Selecione o dia da aula:
                <v-btn class="btn-rounded" v-on="on">{{dateFormated}}</v-btn>
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
              <v-time-picker v-model="time" scrollable color="rgb(66,66,66)" reactive show-current></v-time-picker>
            </v-menu>
          </div>
        </div>
        <v-divider></v-divider>
        <div class="div-text-input">
          <v-textarea label="Conteúdo da aula" auto-grow outlined rows="3" row-height="25" shaped></v-textarea>
        </div>
        <v-divider></v-divider>
        <div>
          <div class="div-btn-save">
            <v-btn @click="dialog=false" class="btn-save">Cancelar</v-btn>
            <v-btn @click="dialog=false" class="btn-save">Salvar</v-btn>
          </div>
        </div>
      </v-flex>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    date: null,
    dateFormated: null,
    time: null
  }),
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
  width: 100%;
}
</style>
<template>
  <v-dialog v-model="dialog" persistent max-width="350px">
    <template v-slot:activator="{ on }">
      <v-btn color="rgb(255,0,0)" fab v-on="on">
        <v-icon>remove</v-icon>
      </v-btn>
    </template>
    <v-flex class="div-primary">
      <div class="div-menu-upper">
        <div class="div-menu">
          <v-menu :close-on-content-click="false" transition="scale-transition" offset-x>
            <template v-slot:activator="{ on }">
              <h3>Você quer mesmo remover a aula ?</h3>
              <v-divider></v-divider>
              <v-btn class="btn-rounded" v-on="on" @click="remove">Sim</v-btn>
              <v-btn class="btn-rounded" v-on="on" @click="dialog=false">Não</v-btn>
            </template>
          </v-menu>
        </div>
      </div>
    </v-flex>
  </v-dialog>
</template>

<script>
import barramento from "@/barramento";
export default {
  props: {
    objectAula: Object
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    remove() {
      barramento.$emit("removeAula", this.objectAula);
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
  margin-top: 10px;
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
  justify-content: center;
  margin-bottom: 20px;
  width: 90%;
}
.div-menu-upper {
  display: inline-flex;
  justify-content: space-evenly;
  align-items: stretch;
  margin-bottom: 10px;
  width: 90%;
}
</style>
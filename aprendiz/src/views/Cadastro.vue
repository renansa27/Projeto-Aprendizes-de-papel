<template>
  <v-container>
    <v-tabs grow dark slider-color="white">
      <v-tab>
        <v-icon class="icon">person</v-icon>Registrar aluno
      </v-tab>
      <v-tab>
        <v-icon class="icon">people_alt</v-icon>Registrar responsáveis
      </v-tab>
      <v-tab>
        <v-icon class="icon">contact_phone</v-icon>Endereço e Contato
      </v-tab>
      <v-tab-item>
        <v-form ref="form">
          <div class="div-primary">
            <div class="div-input-text">
              <v-text-field
                :rules="[v => !!v || 'Item is required']"
                class="input-text"
                v-model="contrato"
                label="Contrato Nº"
                required
              ></v-text-field>
              <v-select
                class="input-text"
                v-model="selectAno"
                :items="ano"
                :rules="[v => !!v || 'Item is required']"
                label="Ano"
                required
              ></v-select>
            </div>

            <div class="div-input-text">
              <v-text-field
                :rules="[v => !!v || 'Item is required']"
                class="input-text"
                v-model="name"
                label="Aluno"
                required
              ></v-text-field>
              <v-select
                class="input-text"
                v-model="selectTurma"
                :items="turma"
                :rules="[v => !!v || 'Item is required']"
                label="Turma"
                required
              ></v-select>
            </div>
            <div class="div-input-text">
              <v-text-field
                :rules="[v => !!v || 'Item is required']"
                class="input-text"
                v-model="nascimento"
                label="Nascimento"
                required
              ></v-text-field>
              <v-select
                class="input-text"
                v-model="selectTurno"
                :items="turno"
                :rules="[v => !!v || 'Item is required']"
                label="Turno"
                required
              ></v-select>
            </div>
            <div class="div-input-text">
              <v-text-field class="input-text" v-model="rg" label="RG"></v-text-field>
              <v-text-field class="input-text" v-model="email" label="E-mail"></v-text-field>
            </div>
            <div class="div-input-text">
              <v-text-field class="input-text" v-model="cpf" label="CPF"></v-text-field>
              <v-select
                class="input-text"
                v-model="selectSexo"
                :items="sexos"
                :rules="[v => !!v || 'Item is required']"
                label="Sexo"
                required
              ></v-select>
            </div>
          </div>
          <div class="div-btn">
            <v-btn color="error" class="mr-2" @click="remove">Excluir</v-btn>
            <!-- <v-btn color="warning" @click="update">Editar</v-btn> -->
            <v-btn color="success" class="mr-4" @click="save">Salvar</v-btn>
          </div>
        </v-form>
      </v-tab-item>
      <v-tab-item></v-tab-item>
      <v-tab-item></v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
export default {
  name: "Cadastro",
  data: () => ({
    contrato: null,
    ano: null,
    name: null,
    turma: null,
    turno: null,
    email: null,
    cpf: null,
    nascimento: null,
    rg: null,
    selectSexo: null,
    selectTurno: null,
    sexos: ["Masculino", "Feminino"],
    turno: ["M", "T"],
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
    turma: ["A", "B", "C", "D", "E", "F", "G"]
  }),
  methods: {
    remove() {
      alert("Excluir aluno!");
      return;
    },
    update() {
      alert("Update aluno!");
      return;
    },
    save() {
      alert("Salvar aluno!");
      return;
    }
  }
};
</script>

<style scoped>
.div-input-text {
  display: inline-flex;
  justify-content: space-evenly;
  align-items: stretch;
  width: 100%;
}
.input-text {
  width: 400px;
  margin-right: 70px;
  margin-left: 70px;
}
.div-btn {
  margin-right: 45px;
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
}
.div-primary {
  margin-top: 40px;
}
.icon {
  margin-right: 10px;
}
</style>
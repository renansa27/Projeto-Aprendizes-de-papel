<template>
  <v-toolbar app :clipped-left="clipped">
    <v-toolbar-side-icon @click.stop="openDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Aprendizes de papel</v-toolbar-title>
    <v-spacer />
    <!-- <v-toolbar-items>
      <v-text-field append-icon="search" label="Pesquise o nome de um aluno"></v-text-field>
    </v-toolbar-items>-->
  </v-toolbar>
</template>

<script>
export default {
  name: "Globaltoolbar",
  data() {
    return {};
  },
  methods: {
    openDrawer() {
      this.$emit("openDrawer");
    }
  },
  props: {
    clipped: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.v-toolbar .v-input {
  margin: 8px;
}
.v-toolbar__items {
  width: 500px;
}
</style>


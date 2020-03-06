<template>
  <div>
    <v-layout row ma-2>
      <span class="display-2">{{`${currentRoute} - ${date}`}}</span>
    </v-layout>
    <v-layout row>
      <!-- <v-divider /> -->
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Globalheadline",
  methods: {
    getRouteName(route) {
      this.currentRoute = route.name;
    }
  },
  data: () => ({
    currentRoute: "",
    date: null
  }),
  mounted() {
    this.getRouteName(this.$route);
  },
  watch: {
    $route: function(val) {
      this.getRouteName(val);
    }
  },
  created() {
    this.date = new Date().toLocaleDateString("pt-br");
  }
};
</script>

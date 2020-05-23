<template>
  <v-app>
    <h1>Counter: {{counter}}</h1>
    <button @click="add">+</button>
    <button @click="menos">-</button>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  name: "Counter",
  computed: {
    ...mapGetters(["counter"])
  },
  methods: {
    ...mapMutations(["add", "menos"])
  }
});
</script>
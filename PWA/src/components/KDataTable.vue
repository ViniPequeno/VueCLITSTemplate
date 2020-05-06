<template>
  <v-data-table :headers="headers.list" :items="itens" :search="search" class="elevation-1">
    <template v-if="!defaultItens" v-slot:body="{ items }">
      <tbody>
        <slot name="body" v-bind:itens="items"></slot>
      </tbody>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from "vue";
import { Headers } from "@componentes/models/headers";
export default Vue.extend({
  props: {
    headers: {
      type: Headers
    },
    itens: {
      type: Array,
      default: []
    },
    search: String,
    defaultItens: {
      type: Boolean,
      default: true
    },
    defaultHeaders: {
      type: Boolean,
      default: true
    }
  }
});
</script>
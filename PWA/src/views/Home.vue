<template>
  <div>
    <k-loading title="Carregando" :dialog="dialogLoading"></k-loading>
    <k-data-list
      @addTeste="addTeste"
      @addItem="add"
      :headers="headers"
      :itens="itens"
      mobileFunctionAdd="addItem"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import KDataList from "@componentes/KDataList.vue";
import KLoading from "@componentes/KLoading.vue";
import { Header, HeaderIcon, HeaderAction } from "@componentes/models/header";
import { Headers } from "@componentes/models//headers";
export default Vue.extend({
  components: {
    KDataList,
    KLoading
  },
  data() {
    return {
      dialogLoading: false,
      headers: new Headers([
        new Header("Teste 1", "name", false, false),
        new Header("Teste 2", "calories", false, false),
        new Header("Teste 3", "fat", false, false),
        new Header("Teste 4", "carbs", false, false),
        new Header("Teste 5", "protein", false, true),
        new Header("Teste 6", "iron", true, false)
      ]),
      itens: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: [new HeaderIcon("mdi-plus", "primary", "Teste")],
          iron: [
            new HeaderAction(
              "mdi-download",
              "primary",
              "teste",
              "addTeste",
              "200px"
            )
          ]
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: [new HeaderIcon("mdi-plus", "secondary", "Teste")],
          iron: [
            new HeaderAction(
              "mdi-download",
              "primary",
              "teste",
              "addTeste",
              "200px"
            )
          ]
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: [
            new HeaderIcon("mdi-plus", "accent", "Teste"),
            new HeaderIcon("mdi-download", "error", "Teste")
          ],
          iron: [
            new HeaderAction(
              "mdi-download",
              "primary",
              "teste",
              "addTeste",
              "200px"
            )
          ]
        }
      ]
    };
  },
  methods: {
    add: function() {
      console.log("blaa");
    },
    addTeste(item: any) {
      console.log(item);
    }
  },
  created() {}
});
</script>
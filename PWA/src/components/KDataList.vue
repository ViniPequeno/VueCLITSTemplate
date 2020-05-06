<template>
  <div>
    <k-dialog
      :title="titleDialogAction"
      :dialog="dialogDialogAction"
      @fecharDialog="fecharDialogAction"
      width="500"
    >
      <template v-slot:text>
        <div style="text-align: center;">
          <v-btn
            :color="action.color"
            v-for="action in itemItemAction[itemHeaderAction.value]"
            :key="action.text"
            :width="action.width"
            @click="$emit(action.action, itemItemAction)"
          >{{action.text}}</v-btn>
        </div>
      </template>
    </k-dialog>

    <k-data-table v-if="!isMobile" :headers="headers" :itens="itens" :defaultItens="false">
      <template v-slot:body="{ itens }">
        <tr v-for="item in itens" :key="item.name">
          <td v-for="header in headers.list" :key="header.text">
            <span v-if="header.isIcon">
              <v-icon
                v-for="icon in item[header.value]"
                :key="icon.icon"
                :color="icon.color"
                :title="icon.title"
              >{{icon.icon}}</v-icon>
            </span>
            <span v-else-if="header.isAction">
              <v-icon
                v-for="icon in item[header.value]"
                :key="icon.icon"
                :color="icon.color"
                @click="$emit(icon.action, item)"
              >{{icon.icon}}</v-icon>
            </span>
            <span v-else>{{item[header.value]}}</span>
          </td>
        </tr>
      </template>
    </k-data-table>
    <div v-else>
      <v-card
        @click="actionItem(item)"
        style="margin-top: 5px;"
        v-for="item in itens"
        :key="item.key"
      >
        <v-card-text>
          <v-row v-for="header in headers.list" :key="header.text">
            <v-col x6 v-if="header.isIcon">
              <b>{{header.text}}:</b>
              <v-icon
                v-for="icon in item[header.value]"
                :key="icon.icon"
                :color="icon.color"
                :title="icon.title"
              >{{icon.icon}}</v-icon>
            </v-col>
            <v-col x6 v-else-if="header.isAction"></v-col>
            <v-col x6 v-else>
              <b>{{header.text}}:</b>
              {{item[header.value]}}
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-btn
        v-if="mobileFunctionAdd"
        @click="functionAdd()"
        style="margin-bottom: 10vh;"
        absolute
        fab
        bottom
        fixed
        right
        color="pink"
      >
        <v-icon color="colorPrimaryText">mdi-plus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import KDataTable from "@componentes/KDataTable.vue";
import KDialog from "@componentes/KDialog.vue";
import { Display } from "../configuration/display";
import { Headers } from "@componentes/models/headers";
export default Vue.extend({
  components: {
    KDataTable,
    KDialog
  },
  props: {
    headers: {
      type: Headers
    },
    itens: {
      type: Array,
      default: []
    },
    mobileFunctionAdd: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isMobile: false,
      dialogDialogAction: false,
      itemHeaderAction: {},
      itemItemAction: {},
      titleDialogAction: ""
    };
  },
  methods: {
    functionAdd() {
      this.$emit(this.mobileFunctionAdd);
    },
    actionItem(item: any) {
      let existAction = false;
      this.itemItemAction = item;
      this.headers.list.forEach(element => {
        if (element.isAction) {
          existAction = true;
          this.itemHeaderAction = element;
        }
      });
      if (existAction) this.dialogDialogAction = true;
    },
    fecharDialogAction() {
      this.dialogDialogAction = false;
    }
  },

  created() {
    this.isMobile = Display.isMobile();
  }
});
</script>
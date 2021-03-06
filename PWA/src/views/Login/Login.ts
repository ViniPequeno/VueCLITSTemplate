import Vue from "vue";
import Component from "vue-class-component";

import { Utils } from "@utils/funcoes";

@Component
export default class Login extends Vue {
  title: String = "Teste123";

  user: String = "";
  pass: String = "";

  login() {
    let result = Utils.verificarLogin("bla", "123");
    if (result.sucesso) {
      //this.$emit("showMensagem", "Aviso", "OK");
      this.$router.push("Counter");
    } else {
      this.$emit("showMensagem", "Aviso", result.mensagem);
    }
  }
}

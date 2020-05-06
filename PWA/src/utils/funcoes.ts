import { KRetorno } from "@models/KRetorno";

export class Utils {
  static verificarLogin(user: string, pass: string): KRetorno {
    let retorno = new KRetorno();
    if (user == "" || pass == "") {
      retorno.mensagem = "Dados inválidos.";
    } else {
      if (user == "bla" && pass == "123") {
        retorno.sucesso = true;
        retorno.mensagem = "OK";
      } else {
        retorno.mensagem = "Dados incertos.";
      }
    }
    return retorno;
  }
}

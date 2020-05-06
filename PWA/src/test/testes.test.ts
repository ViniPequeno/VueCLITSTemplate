import { Utils } from "@utils/funcoes";

test("Teste Validacao Login - Vazios", () => {
  let result = Utils.verificarLogin("", "");
  expect(result.sucesso).toBe(false);
  expect(result.mensagem).toBe("Dados inválidos.");
});

test("Teste Validacao Login - Senha certa", () => {
  let result = Utils.verificarLogin("bla", "123");
  expect(result.sucesso).toBe(true);
  expect(result.mensagem).toBe("OK");
});

test("Teste Validacao Login - Errado", () => {
  let result = Utils.verificarLogin("123", "123");
  expect(result.sucesso).toBe(false);
  expect(result.mensagem).toBe("Dados incertos.");
});

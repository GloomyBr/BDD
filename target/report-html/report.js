$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resource/inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Cadastro de contas",
  "description": "\r\nComo um usuário\r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 176200,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 8,
      "value": "#Background"
    }
  ],
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "informo o usuário \"gloomybrgames@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a senha \"pedro1997\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 6489076500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gloomybrgames@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 268105000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pedro1997",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 155375500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1302100000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 87960500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 125455700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 345978400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro-de-contas;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 19,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "a conta é inserida com sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 189633800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 564802000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.aContaÉInseridaComSucesso()"
});
formatter.result({
  "duration": 53773000,
  "status": "passed"
});
formatter.after({
  "duration": 839927700,
  "status": "passed"
});
formatter.before({
  "duration": 61300,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 8,
      "value": "#Background"
    }
  ],
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "informo o usuário \"gloomybrgames@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a senha \"pedro1997\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 6439902000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gloomybrgames@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 321008200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pedro1997",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 180071100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1616264000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 59412600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 184188900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 384333700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Não deve inserir uma conta sem nome",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-sem-nome",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 25,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "sou notificado que o nome da conta é obrigatório",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 314320900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueONomeDaContaÉObrigatório()"
});
formatter.result({
  "duration": 71484000,
  "status": "passed"
});
formatter.after({
  "duration": 927206100,
  "status": "passed"
});
formatter.before({
  "duration": 83300,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 8,
      "value": "#Background"
    }
  ],
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "informo o usuário \"gloomybrgames@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a senha \"pedro1997\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 6521633800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gloomybrgames@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 361375400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pedro1997",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 180777000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1270615100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 69135100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 134472100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 423734300,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Não deve inserir uma conta com nome já existente",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-com-nome-já-existente",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 29,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "sou notificado que já existe uma conta com esse nome",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 216379900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 419065700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueJáExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 99902300,
  "status": "passed"
});
formatter.after({
  "duration": 934076300,
  "status": "passed"
});
});
//class contato
let informacoes = [];

class Contato {
  constructor(nome, sobrenome, email, cpf, telefone, contato) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.contato = contato;
  }
}

function Post(form) {
  //previne a auto atualização, quando clicado em enviar.
  event.preventDefault();

  let data = new Contato(
    form.elements.namedItem("nome").value,
    form.elements.namedItem("sobrenome").value,
    form.elements.namedItem("email").value,
    form.elements.namedItem("cpf").value,
    form.elements.namedItem("telefone").value,
    form.elements.namedItem("contato").value
  );
  informacoes.push(data);
  Enviar();
}

function Enviar() {
  console.log("enviou");
  var nome = document.getElementById("nomeid");

  if (nome.value != "") {
    alert(
      "Obrigado sr(a) " +
        nome.value +
        " os seus dados foram encaminhados com sucesso"
    );
  }
}

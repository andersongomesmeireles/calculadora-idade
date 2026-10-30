const campo = document.getElementById("nascimento");
const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
  if (campo.value === "") {
    resultado.textContent = "Informe a data de nascimento.";
    return;
  }

  const nascimento = new Date(campo.value + "T00:00");
  const hoje = new Date();

  if (nascimento > hoje) {
    resultado.textContent = "A data não pode estar no futuro.";
    return;
  }

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade = idade - 1;
  }

  resultado.textContent = "Você tem " + idade + " anos.";
});

export function normalizarData(date) {
  let returnDate = date;
  const sufixo = " 00:00:00";

  if (typeof date === "string") {
    if (returnDate.includes("T")) {
      returnDate = returnDate.split("T")[0]; // Remove a hora se existir
    }
    if (!returnDate.includes(sufixo)) {
      returnDate += sufixo;
    }
    returnDate = new Date(returnDate);
  }

  return returnDate;
}

export function formataCep(cep) {
  if (!cep || cep.length < 8) {
    return cep;
  }
  return [cep.slice(0, 5), "-", cep.slice(5)].join("");
}

export function formataCepRenderizacao(cep) {
  const numericInput = cep.replace(/\D/g, "");
  if (numericInput.length > 5) {
    return `${numericInput.slice(0, 5)}-${numericInput.slice(5)}`;
  } else {
    return numericInput;
  }
}

export function formataTelefone(telefone) {
  if (telefone) {
    const val = `(${telefone.ddd}) ${telefone.numTelefone}`;
    var position = val.length - 4;
    return [val.slice(0, position), "-", val.slice(position)].join("");
  }
  return null;
}

export function formatarFrase(frase) {
  return frase
    ? frase.charAt(0).toUpperCase() + frase.slice(1).toLowerCase()
    : "-";
}

export function formataCPF(cpf) {
  if (!cpf) {
    return cpf;
  }
  return cpf
    .replace(/[^\d]/g, "")
    .padStart(11, "0")
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function removeNaoNumericos(str) {
  if (typeof str === "string") {
    return str.replace(/\D/g, "");
  } else {
    return str;
  }
}

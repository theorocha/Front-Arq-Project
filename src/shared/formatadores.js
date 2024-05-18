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

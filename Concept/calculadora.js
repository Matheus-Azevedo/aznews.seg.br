function somar(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return "Use apenas números!";
  }
  return number1 + number2;
}

function subtrair(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return "Use apenas números!";
  }
  return number1 - number2;
}

function multiplicar(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return "Use apenas números!";
  }
  return number1 * number2;
}

function dividir(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return "Use apenas números!";
  }
  return number1 / number2;
}

exports.somar = somar;
exports.subtrair = subtrair;
exports.multiplicar = multiplicar;
exports.dividir = dividir;

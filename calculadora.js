function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }

  console.log(sumar(2,5));
  console.log(restar(12,5));

  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    if (b === 0) throw new Error("División por cero");
    return a / b;
  }
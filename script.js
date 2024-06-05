let hora_entrada;
let valor_hora = 4000
let hora_salida;
let valor_a_pagar;

hora_entrada = Number(prompt(`ingrese hora de entrada`));
hora_salida = Number(prompt(`ingresar hora de salida`));

valor_a_pagar = hora_salida * valor_hora

console.log(`el saldo a pagar es de ${hora_salida} * ${valor_hora}`);

document.write(`el saldo a pagar es ${valor_a_pagar}`);


// trayendo variables DOM
let cifrar_btn = document.getElementById('cifrar'),
  decifrar_boton = document.getElementById('decifrar'),
  input = document.getElementById('inputText'),
  mostrar = document.getElementById('mostrar'),
  numero = document.getElementById('salto');

cifrar_btn.addEventListener('click', encriptando);
function encriptando() {
  let nuevo_texto = '';
  let input_texto = input.value;
  let key = parseInt(numero.value);
  for (i = 0; i < input_texto.length; i++) {
    let toAscii = input_texto.charCodeAt(i);
    if (toAscii >= 65 && toAscii <= 90) {
      nuevo_texto += String.fromCharCode((toAscii - 65 + key) % 26 + 65); // Mayus
      decifrar_boton.className = 'visible';
    } else if (toAscii >= 97 && toAscii <= 122) {
      nuevo_texto += String.fromCharCode((toAscii - 97 + key) % 26 + 97); // Minus
      decifrar_boton.className = 'visible';
    } else
      mostrar.innerHTML = `<p>  ${nuevo_texto} </p>`;
  }
  mostrar.innerHTML = `<p>  ${nuevo_texto} </p>`;
}


decifrar_boton.addEventListener('click', descincreptando);
function descincreptando() {
  let nueva_frase = '';
  let input_texto = input.value;
  let key = parseInt(numero.value);
  for (i = 0; i < input_texto.length; i++) {
    let toAscii = input_texto.charCodeAt(i);
    if (toAscii >= 65 && toAscii <= 90)
      nueva_frase += String.fromCharCode((toAscii - 65  - key + 26 * 2) % 26 + 65);
    else if (toAscii >= 97 && toAscii <= 122)
      nueva_frase += String.fromCharCode((toAscii - 97 - key + 26 * 2) % 26 + 97);
    else
      mostrar.innerHTML = `<p>  ${nueva_frase} </p>`;
  }
  mostrar.innerHTML = `<p>  ${nueva_frase} </p>`;
}

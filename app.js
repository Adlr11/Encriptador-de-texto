// Obtener elementos del DOM
const mensajeOut = document.querySelector("#mensajeOut");
const textinp = document.querySelector("#textinp");
const encriptarBtn = document.querySelector("#encriptar");
const desencriptarBtn = document.querySelector("#desencriptar");
const copiarBtn = document.querySelector("#copiar");

// Función para encriptar el mensaje
const encriptar = (mensaje) => {
  const vowels = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat", 
  0: "sak", 1: "tpk", 2: "kus", 3: "dopr", 4: "verw", 5: "liq", 6: "ziu", 7: "xlo", 8: "bxoy", 9: "pra"};
  mensaje = mensaje.toLowerCase();
  return mensaje.replace(/[aeiou0123456789]/g, (v) => vowels[v]);
};

// Función para desencriptar el mensaje
const desencriptar = (mensaje) => {
  const vowels = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u", 
  sak: "0", tpk: "1", kus: "2", dopr: "3", verw: "4", liq: "5", ziu: "6", xlo: "7", bxoy: "8", pra: "9" };
  mensaje = mensaje.toLowerCase();
  return mensaje.replace(/ai|enter|imes|ober|ufat|sak|tpk|kus|dopr|verw|liq|ziu|xlo|bxoy|pra/g, (v) => vowels[v]);
};

// Función para mostrar el mensaje encriptado/desencriptado
const mostrarMensaje = (mensaje, funcion) => {
  mensajeOut.innerText = funcion(mensaje);
  document.getElementById("hide").style.display = "none";
};

// Función para copiar el mensaje encriptado al portapapeles
copiarBtn.onclick = () => {
    const textoEncriptado = mensajeOut.innerText;
    navigator.clipboard.writeText(textoEncriptado)
      .then(() => alert("Texto copiado al portapapeles"))
      .catch((error) => console.error("Error al copiar el texto", error));
  };

// Asignar eventos a los botones
encriptarBtn.onclick = () => mostrarMensaje(textinp.value, encriptar);
desencriptarBtn.onclick = () => mostrarMensaje(textinp.value, desencriptar);

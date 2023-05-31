function encriptarTexto() {
  // Obtener el texto sin encriptar
  const textoSinEncriptar = document.getElementById("input-texto").value;

  // Validar que el texto solo contenga letras minúsculas con la ayuda de una expresión regular
  if (!/^[a-z\s]+$/.test(textoSinEncriptar)) {
    alert("Por favor, ingresa solo letras minúsculas.");
    return;
  } else {

  // Una vez verificado que no hay mayusculas o caracteres especiales se realiza la sustitución
    const textoEncriptado = textoSinEncriptar
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

  // Manda el texto encriptado al textarea "resultado"
    document.getElementById("resultado").value = textoEncriptado;
  }
}

function desencriptarTexto() {
  // Obtener el texto encriptado
  const textoEncriptado = document.getElementById("input-texto").value;

  // Validar que el texto solo contenga letras minúsculas con la ayuda de una expresión regular
  if (!/^[a-z\s]+$/.test(textoEncriptado)) {
    alert("Por favor, ingresa solo letras minúsculas.");
    return;
  } else {

    // Una vez verificado que no hay mayusculas o caracteres especiales se realiza la sustitución
    const textoSinEncriptar = textoEncriptado
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    // Manda el texto desencriptado al textarea "resultado"
    document.getElementById("resultado").value = textoSinEncriptar;
  }
}
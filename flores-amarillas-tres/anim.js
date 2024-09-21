// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Distante estrella es este amor", time: 8.9 },
  { text: "Que a nuestro hogar es buen conductor", time: 10.2 },
  { text: "Un sol ardiente es este amor", time: 18 },
  { text: "Que ilumina la más breve acción", time: 23 },
  { text: "Y cada día que intento hablar", time: 28 },
  { text: "Pero al viento las palabras se van", time: 34 },
  { text: "Estos muros podrían caer (deben caer)", time: 42 },
  { text: "Quiero sentir suelo bajo mis pies", time: 49 },
  { text: "Y que esta cárcel dejemos atrás", time: 56 },
  { text: "Y con toda libertad", time: 58 },
  { text: "¿Por qué llegamos hasta aquí?", time: 76 },
  { text: "Ya extraño lo que recién conocí", time: 80.5 },
  { text: "¿Qué sentiremos al terminar?", time: 87 },
  { text: "Lo que ha empezado podremos guardar", time: 93 },
  { text: "Y estos muros ya veo caer (veo caer)", time: 101 },
  { text: "Y siento el suelo ya bajo mis pies", time: 108 },
  { text: "Este amor lo podremos mostrar (podremos mostrar)", time: 115 },
  { text: "Con toda libertad", time: 121 },
  { text: "Con toda libertad (toda libertad)", time: 128 },
  { text: "Con toda libertad", time: 135 },
  { text: "Un sol ardiente es este amor", time: 146 },
  { text: "❤❤❤ Te amo mucho mi amor ❤❤❤", time: 157 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);

// Get the audio element and the button element
const audio = document.getElementById("audio");
const audioButton = document.getElementById("audio-button");

// Add a click event listener to the button element
audioButton.addEventListener("click", function() {
  // If the audio is paused, play it; if it's playing, pause it
  if (audio.paused) {
    audio.play();
    audioButton.innerHTML = "Pause Recitation";
  } else {
    audio.pause();
    audioButton.innerHTML = "Play Recitation";
  }
});

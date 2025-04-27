// document.addEventListener("click", function () {
//     const audio = document.getElementById('introAudio');
//     if (audio && audio.paused) {
//       audio.play();
//     }
//   }, { once: true });

  const playPauseButton = document.getElementById('playPauseButton');
  const audioPlayer = document.getElementById('introAudio');

  // Toggle play/pause state
  playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
      audioPlayer.play(); // Play audio
      playPauseButton.classList.add('playing'); // Switch to pause state
    } else {
      audioPlayer.pause(); // Pause audio
      playPauseButton.classList.remove('playing'); // Switch to play state
    }
  });
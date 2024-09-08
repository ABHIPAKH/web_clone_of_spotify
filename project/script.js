function playSong(songFile) {
    var audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = songFile;
    audioPlayer.play();
}


const images = [
  "images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg",
  "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg"
];

const sentences = [
  "Babyyy you are my favourite playlist 🤌",
  "Babbyyyyy yrrrr I am veryyyy luckyyyy to have you yrrr babyyyy (aap bhi ).",
  "Pleaseeee time p khaanaa khaaloo babyyyy ",
  "Mujheeee bas kissi chahiyeeeee",
  "Hn ji , aaram se chalaungaa bike ",
  "Khaa jaaoo yrr mujhe ",
  "Badminton khelne jaaraa hun , aara hun babyy bas ",
  "You always turn my cold alone nights into warm morningss",
  "Hn ji babyyy , batao kya karre ho",
  "Lovee you babyyyyyyyy "
];

const songs = [
  "songs/1.mp3", "songs/2.mp3", "songs/3.mp3", "songs/4.mp3", "songs/5.mp3",
  "songs/6.mp3", "songs/7.mp3", "songs/8.mp3", "songs/9.mp3", "songs/10.mp3"
];

let slideshowInterval;
const photoElement = document.getElementById("photo");
const sentenceElement = document.getElementById("sentence");
const audioPlayer = document.getElementById("audioPlayer");

function startSlideshow() {
  document.getElementById("landing").style.display = "none";
  document.getElementById("main").style.display = "block";

  slideshowInterval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    photoElement.src = images[randomIndex];
  }, 800);
}

function stopSlideshow() {
  // Stop the slideshow
  clearInterval(slideshowInterval);

  // Show random sentence
  const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
  sentenceElement.textContent = randomSentence;

  // Play random song
  const randomSong = songs[Math.floor(Math.random() * songs.length)];
  audioPlayer.src = randomSong;
  audioPlayer.play();
}

function restartSlideshow() {
  // Clear previous sentence
  sentenceElement.textContent = "";

  // Stop any playing music
  audioPlayer.pause();
  audioPlayer.currentTime = 0;

  // Restart slideshow
  slideshowInterval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    photoElement.src = images[randomIndex];
  }, 800);
}


document.querySelectorAll(".drum").forEach(button => {
  button.addEventListener("click", function() {
    playSound(this.innerHTML);
    addAnimation(this.innerHTML);
  });
});

document.addEventListener("keydown", function(event) {
  playSound(event.key);
  addAnimation(event.key);
});

function playSound(key) {
  let audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      console.log("按鍵無效: " + key);
  }
  if (audio) audio.play();
}

function addAnimation(key) {
  const button = document.querySelector(`.${key}`);
  if (button) {
    button.classList.add("pressed");
    setTimeout(() => button.classList.remove("pressed"), 100);
  }
}
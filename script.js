function showLove() {
  document.getElementById("surprise").innerHTML =
    "Gihigugma tika, Jastine 💚 Salamat sa tanan nga mga memories nga atong gihimo ug sa mga memories nga atong himuon pa. 💕";
}

const date = new Date("July 17, 2026 09:00:00").getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = date - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML =
      "It's our special day already! 💚";
  }

}, 1000);

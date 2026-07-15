function showLove() {
  document.getElementById("surprise").innerHTML =
    "Gihigugma tika, Jastine 💚 Salamat sa tanan nga memories nga atong gihimo ug sa mga memories nga atong himuon pa. 💕";
}

const targetDate = new Date("2026-07-17T09:00:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.getElementById("timer").innerHTML =
      "It's our special day already! 💚";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);

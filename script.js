// باز کردن پاکت
function openEnvelope() {  
  const envelope = document.querySelector('.envelope');
  envelope.classList.add('open');
}

// چرخش پاکت
function rotateEnvelope() {
  const envelope = document.querySelector('.envelope');
  envelope.classList.toggle('rotate');
}

// بازگرداندن پاکت به حالت اولیه
function resetEnvelope() {
  const envelope = document.querySelector('.envelope');
  envelope.classList.remove('open', 'rotate');
}

// پخش/توقف صدا
function toggleAudio() {
  const audio = document.getElementById('audio');
  const playIcon = document.querySelector('.play-icon');
  const pauseIcon = document.querySelector('.pause-icon');
  
  if (audio.paused) {
    audio.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
  } else {
    audio.pause();
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
  }
}

// تغییر حالت دارک مود
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// چرخش خودکار پاکت پس از 3 ثانیه
setTimeout(() => {
  document.querySelector('.envelope').classList.add('rotate');
}, 3000);

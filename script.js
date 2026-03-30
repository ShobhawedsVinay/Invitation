function toggleMusic() {
  const music = document.getElementById("bgMusic");
  music.paused ? music.play() : music.pause();
}

function setLanguage(lang) {
  const card = document.getElementById("card");
  const wedBtn = document.getElementById("wedBtn");
  const recBtn = document.getElementById("recBtn");

  const btnEn = document.getElementById("btn-en");
  const btnHi = document.getElementById("btn-hi");
  const btnTe = document.getElementById("btn-te");

  // Show all language buttons first
  btnEn.style.display = "inline-block";
  btnHi.style.display = "inline-block";
  btnTe.style.display = "inline-block";

  if (lang === "en") {
    card.style.backgroundImage = "url('bg-en.jpg')";
    wedBtn.innerHTML = '<span class="btn-text">WEDDING</span><span class="btn-text">Venue</span>';
    recBtn.innerHTML = '<span class="btn-text">RECEPTION</span><span class="btn-text">Venue</span>';
    btnEn.style.display = "none";
  }

  if (lang === "hi") {
    card.style.backgroundImage = "url('bg-hi.jpg')";
    wedBtn.innerHTML = '<span class="btn-text">कल्याण</span><span class="btn-text">स्थल</span>';
    recBtn.innerHTML = '<span class="btn-text">रिसेप्शन</span><span class="btn-text">स्थल</span>';
    btnHi.style.display = "none";
  }

  if (lang === "te") {
    card.style.backgroundImage = "url(\'bg-te.jpg\')";
    wedBtn.innerHTML = '<span class="btn-text">వివాహ</span><span class="btn-text">ప్రదేశం</span>';
    recBtn.innerHTML = '<span class="btn-text">విందు</span><span class="btn-text">ప్రదేశం</span>';
    btnTe.style.display = "none";
  }
}
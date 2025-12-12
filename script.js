// Formulário PC
document.getElementById("pcForm").addEventListener("submit", function(e) {
  e.preventDefault();


  const descricao = document.getElementById("descricao").value;
  const uso = document.getElementById("uso").value;
  const perifericos = document.getElementById("perifericos").value;
  const orcamento = parseInt(document.getElementById("orcamento").value);

  document.getElementById("resultado").classList.remove("hidden");

  // Escolher imagem real de setup conforme orçamento
  let imgUrl = "";
  if (orcamento < 2000) {
    imgUrl = "https://i.imgur.com/3ZQ3Zqk.jpg";
  } else if (orcamento < 5000) {
    imgUrl = "https://i.imgur.com/7uZVYwP.jpg";
  } else {
    imgUrl = "https://i.imgur.com/9kYwF3P.jpg";
  }
  document.getElementById("pcImage").src = imgUrl;

  // Mensagem WhatsApp
  const mensagem = `Olá DF TECH! Quero montar um PC:\n\nDescrição: ${descricao}\nUso: ${uso}\nPeriféricos: ${perifericos}\nOrçamento: R$${orcamento}`;
  const url = `https://wa.me/5575988081263?text=${encodeURIComponent(mensagem)}`;
  document.getElementById("whatsappBtn").href = url;
});

// Formulário Peças
document.getElementById("pecaForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const peca = document.getElementById("peca").value;
  const orcamentoPeca = document.getElementById("orcamentoPeca").value;

  const mensagem = `Olá DF TECH! Quero encomendar uma peça:\n\nPeça: ${peca}\nOrçamento: R$${orcamentoPeca}`;
  const url = `https://wa.me/5575988081263?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
});
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });
  slides[slideIndex].classList.add("active");

  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
}

// Mostra o primeiro slide imediatamente
showSlides();

// Alterna a cada 4 segundos
setInterval(showSlides, 4000);

const painelPC = document.getElementById("painelPC");
const painelPecas = document.getElementById("painelPecas");
const slideshow = document.querySelector(".slideshow");

document.getElementById("togglePecas").addEventListener("click", () => {
  if (painelPecas.classList.contains("hidden")) {
    // Mostrar painel de peças, esconder painel PC e slideshow
    painelPC.classList.add("hidden");
    painelPecas.classList.remove("hidden");
    slideshow.style.display = "none";
  } else {
    // Voltar para painel PC e mostrar slideshow
    painelPecas.classList.add("hidden");
    painelPC.classList.remove("hidden");
    slideshow.style.display = "block";
  }
});
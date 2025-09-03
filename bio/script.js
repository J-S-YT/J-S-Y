const profiles = {
  "JSY": {
    image: "foto.png",
    name: "JSY",
    links: [
      { text: "Canal Principal", url: "https://youtube.com/@jose_status_yt" },
      { text: "Instagram", url: "https://instagram.com/jose_status_yt" }
    ]
  },
  "JSY-ANIME": {
    image: "foto.png",
    name: "JSY ANIME",
    links: [
      { text: "Assistir Animes", url: "https://j-s-fo.github.io" },
      { text: "Últimos Episódios", url: "https://j-s-fo.github.io/lancamentos" }
    ]
  },
  "JSY-MUSICA": {
    image: "foto.png",
    name: "JSY MÚSICA",
    links: [
      { text: "YouTube Música", url: "https://youtube.com/@jose_status_music" }
    ]
  },
  "GAMER-FILMES": {
    image: "foto.png",
    name: "GAMER FILMES",
    links: [
      { text: "Canal Gamer", url: "https://youtube.com/@gamerfilmes" }
    ]
  }
};

function loadProfile(profileName) {
  const profile = profiles[profileName] || profiles["JSY"];
  document.getElementById("profile-image").src = profile.image;
  document.getElementById("profile-name").innerText = profile.name;

  const linksContainer = document.getElementById("links");
  linksContainer.innerHTML = "";
  profile.links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.innerText = link.text;
    a.className = "link-button";
    a.target = "_blank";
    linksContainer.appendChild(a);
  });
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

// Detectar hash no carregamento
window.addEventListener("load", () => {
  const hash = window.location.hash.replace("#", "").toUpperCase();
  loadProfile(hash);
});

// Atualizar ao clicar no botão de outro perfil
window.addEventListener("hashchange", () => {
  const hash = window.location.hash.replace("#", "").toUpperCase();
  loadProfile(hash);
});

// Animação de fundo simples com partículas
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff22";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();
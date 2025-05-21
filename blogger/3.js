const input = document.getElementById("inputText");
const linkContainer = document.getElementById("linkContainer");
const generatedLink = document.getElementById("generatedLink");
const copyBtn = document.getElementById("copyBtn");
const msgCopied = document.getElementById("msgCopied");

input.addEventListener("input", () => {
  const valor = input.value.trim();

  if (valor) {
    const url = `https://link-jsy.blogspot.com/p/${encodeURIComponent(
      valor
    )}.html`;
    generatedLink.href = url;
    generatedLink.textContent = url;
    linkContainer.classList.remove("hidden");
    msgCopied.classList.remove("visible");
  } else {
    linkContainer.classList.add("hidden");
    msgCopied.classList.remove("visible");
  }
});

copyBtn.addEventListener("click", () => {
  if (!generatedLink.href) return;

  navigator.clipboard
    .writeText(generatedLink.href)
    .then(() => {
      msgCopied.classList.add("visible");
      setTimeout(() => {
        msgCopied.classList.remove("visible");
      }, 2000);
    })
    .catch(() => {
      alert("Não foi possível copiar o link. Tente manualmente.");
    });
});

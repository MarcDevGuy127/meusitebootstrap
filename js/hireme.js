

/**
 * 
 * const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  updateBlurredCardBackground(savedTheme); // Atualiza o fundo do card
}
themeToggleButton.addEventListener("click", function () {
  const currentTheme = body.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "white" : "dark";

  body.setAttribute("data-bs-theme", newTheme);
  updateBlurredCardBackground(newTheme); // Atualiza o fundo do card
});
 * *Botão para trocar tema *
document.getElementById("theme-toggle").addEventListener("click", function() {
  const body = document.body;
  
  // Alterna entre as classes 'dark-mode' e 'white-mode'
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("white");
    this.innerHTML = '<i class="bi bi-moon"></i> Modo Escuro'; // Ícone de Lua para o modo escuro
  } else {
    body.classList.remove("white");
    body.classList.add("dark");
    this.innerHTML = '<i class="bi bi-sun"></i> Modo Claro'; // Ícone de Sol para o modo claro
  }

  // Armazena a escolha do usuário no localStorage
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "white");
});

// Ao carregar a página, verificar a preferência do usuário
window.addEventListener("load", function() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("theme-toggle").innerHTML = '<i class="bi bi-sun"></i> Modo Claro'; // Ícone de Sol para o modo claro
  } else {
    document.body.classList.add("white");
    document.getElementById("theme-toggle").innerHTML = '<i class="bi bi-moon"></i> Modo Escuro'; // Ícone de Lua para o modo escuro
  }
});
 */


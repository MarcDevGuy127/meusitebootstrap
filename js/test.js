document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o comportamento padrão do formulário

  const successMessage = document.getElementById("success-message");

  // Exibe a notificação com animação de entrada
  successMessage.classList.remove("hide");
  successMessage.classList.add("show");
  successMessage.style.display = "block"; // Torna visível

  // Esconde a notificação com animação de saída após 3 segundos
  setTimeout(() => {
    successMessage.classList.remove("show");
    successMessage.classList.add("hide");
  }, 3000);
});

//alterando cor do card de acordo com o tema do site
document.addEventListener("DOMContentLoaded", function () {
  const blurredCard = document.getElementById("blurred-card");
  const themeToggleButton = document.getElementById("theme-toggle");

  // Função para atualizar o fundo do card
  function updateCardBackground(theme) {
    if (theme === "dark") {
      blurredCard.style.background = "rgba(41, 41, 41, 0.338)"; // Fundo escuro
    } else {
      blurredCard.style.background = "rgba(255, 255, 255, 0.338)"; // Fundo claro
    }
  }

  // Verifica o tema salvo no localStorage
  let savedTheme = localStorage.getItem("theme");
  if (savedTheme === null) {
    savedTheme = "white"; // Define o tema inicial como claro se não houver preferência salva
  }

  // Atualiza o fundo do card com o tema salvo
  updateCardBackground(savedTheme);

  // Atualiza o texto do botão com base no tema
  themeToggleButton.innerHTML = savedTheme === "dark" ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';

  // Evento de clique para alternar o tema
  themeToggleButton.addEventListener("click", function () {
    // Alterna o tema
    const newTheme = savedTheme === "dark" ? "white" : "dark";

    // Atualiza o tema no localStorage
    localStorage.setItem("theme", newTheme);

    // Atualiza o fundo do card
    updateCardBackground(newTheme);

    // Atualiza o texto do botão
    themeToggleButton.innerHTML = newTheme === "dark" ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';

    // Atualiza o tema salvo
    savedTheme = newTheme;
  });
});

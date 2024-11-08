document.querySelectorAll(".accordion-header").forEach((item) => {
  item.addEventListener("click", () => {
    const accordionItem = item.parentElement;
    accordionItem.classList.toggle("active");
  });
});

document.querySelectorAll("#mobile-menu a").forEach((item) => {
  item.addEventListener("click", () => {
    toggleMenu();
  });
});
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("active");
}

function sendWhatsApp() {
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;

  if (!name || !message) {
    alert("Por favor, preencha todos os campos obrigatórios (Nome & Email).");
    return;
  }

  var text = "Nome: " + name + "%0a" + "Mensagem: " + message;
  var url = "https://api.whatsapp.com/send?phone=5583988154571&text=" + text;
  window.open(url, "_blank");
}
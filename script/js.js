// Função para exibir o pop-up com informações do serviço
function showServicePopup(title, description, price, date, url) {
    const popup = document.getElementById("popup");
    const serviceTitle = document.getElementById("service-title");
    const serviceDescription = document.querySelector(".service-description p");
    const servicePrice = document.querySelector(".price span");
    const agendarButton = document.getElementById("agendar-button");

    serviceTitle.textContent = title;
    serviceDescription.textContent = description;
    servicePrice.textContent = "Preço: R$ " + price + "/h";
    serviceDate.textContent = "Data: " + date;
    agendarButton.href = url;

    popup.style.display = "block";
}

// Função para fechar o pop-up
function closeServicePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

// Adicione eventos de clique aos botões "Contratar" para cada serviço (ajuste conforme sua estrutura HTML)
const contratarButtons = document.querySelectorAll(".botao");

for (let i = 0; i < contratarButtons.length; i++) {
    contratarButtons[i].addEventListener("click", function() {
        // Preencha os detalhes do serviço de acordo com o botão clicado
        const title = "Título do Serviço " + (i + 1);
        const description = "Descrição do Serviço " + (i + 1);
        const price = "100,00"; // Coloque o preço correto aqui
        const date = "DD/MM/AAAA"; // Coloque a data correta aqui
        const url = "URL_DO_SERVICO_" + (i + 1);
        showServicePopup(title, description, price, date, url);
    });
}

// Adicione eventos de clique ao botão "Fechar" do pop-up e à área de sobreposição
const closePopupButton = document.getElementById("close-popup");
closePopupButton.addEventListener("click", closeServicePopup);

const popupOverlay = document.getElementById("popup");
popupOverlay.addEventListener("click", function(event) {
    if (event.target === popupOverlay) {
        closeServicePopup();
    }
});
// Função para exibir o pop-up com informações do serviço
function showServicePopup(title, description, price, date, url) {
    const popup = document.getElementById("popup");
    const serviceTitle = document.getElementById("service-title");
    const serviceDescription = document.querySelector(".service-description p");
    const servicePrice = document.querySelector(".price span");
    const serviceDate = document.querySelector(".agendamento-details span");
    const agendarButton = document.getElementById("agendar-button");

    serviceTitle.textContent = title;
    serviceDescription.textContent = description;
    servicePrice.textContent = "Preço: R$ " + price + "/h";
    serviceDate.textContent = "Data: " + date;
    agendarButton.href = url;

    popup.style.display = "block";
}

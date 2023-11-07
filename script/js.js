// Função para exibir o pop-up com informações do serviço
function showServicePopup(title, description, price, startDate, endDate, url) {
    const popup = document.getElementById("popup");
    const serviceTitle = document.getElementById("service-title");
    const serviceDescription = document.querySelector(".service-description p");
    const servicePrice = document.querySelector(".price span");
    const serviceStartDate = document.querySelector(".start-date span");
    const serviceEndDate = document.querySelector(".end-date span");
    const serviceStartTime = document.querySelector(".start-time span");
    const serviceEndTime = document.querySelector(".end-time span");
    const agendarButton = document.getElementById("agendar-button");

    serviceTitle.textContent = title;
    serviceDescription.textContent = description;
    servicePrice.textContent = price + "/h";
    serviceStartDate.textContent = "Data de Início: " + startDate;
    serviceEndDate.textContent = "Data de Término: " + endDate;
    agendarButton.href = url;

    popup.style.display = "block";
}

// Função para fechar o pop-up
function closeServicePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

// Variável para armazenar informações específicas de cada serviço
const services = [
    {
        title: "Análise de Vulnerabilidade",
        description: "A análise de vulnerabilidade é fundamental em cibersegurança, identificando e avaliando fraquezas em sistemas, redes e aplicativos, priorizando-as com base na gravidade. Essa avaliação oferece recomendações para fortalecer a segurança, mitigando riscos de exploração por invasores. Esse processo visa proteger ativos críticos e reduzir a probabilidade de ataques cibernéticos, sendo uma prática essencial na defesa contra ameaças online.",
        price: "200,00",
        startDate: "28/11/2023",
        endDate: "10/12/2023",
        url: "URL_DO_SERVICO_1"
    },
    {
        title: "Monitoramento de Segurança de Rede",
        description: "O monitoramento de segurança de rede é uma prática constante de identificar ameaças em tempo real, protegendo sistemas e dados críticos. Usando ferramentas especializadas, equipes de segurança podem detectar atividades suspeitas e invasões, permitindo respostas rápidas para minimizar danos. Essa prática mantém a integridade e disponibilidade dos recursos de TI e é essencial na defesa contra ameaças cibernéticas.",
        price: "100,00",
        startDate: "18/11/2023",
        endDate: "30/11/2023",
        url: "URL_DO_SERVICO_2"
    },
    {
        title: "Processos para a Segurança de Dados",
        description: "Os processos de segurança de dados incluem a identificação e classificação de ativos de dados, a avaliação de riscos, o desenvolvimento de políticas de segurança, a implementação de controles de acesso, o monitoramento em tempo real e a resposta a incidentes para proteger informações sensíveis.",
        price: "250,00",
        startDate: "8/11/2023",
        endDate: "30/11/2023",
        url: "URL_DO_SERVICO_3"
    },
    {
        title: "Integração de Sistemas",
        description: "Integração de sistemas é conectar sistemas de software para operar eficientemente e compartilhar dados, promovendo automação de processos e melhorando a eficiência, tomada de decisões e experiência do usuário.",
        price: "50,00",
        startDate: "10/11/2023",
        endDate: "20/11/2023",
        url: "URL_DO_SERVICO_4"
    },
    {
        title: "Auditoria de Segurança",
        description: "Auditoria de segurança é uma avaliação independente para identificar vulnerabilidades, verificar o cumprimento de políticas e regulamentações e recomendar melhorias. Inclui revisão de registros, análise de controles e testes de penetração.",
        price: "450,00",
        startDate: "12/11/2023",
        endDate: "20/12/2023",
        url: "URL_DO_SERVICO_5"
    },
    {
        title: "Gestão de Incidentes de Segurança",
        description: "Gestão de incidentes de segurança envolve a detecção, resposta e recuperação de eventos cibernéticos adversos para proteger ativos críticos e assegurar a continuidade operacional.",
        price: "180,00",
        startDate: "09/11/2023",
        endDate: "09/12/2023",
        url: "URL_DO_SERVICO_6"
    },
];

const contratarButtons = document.querySelectorAll(".botao");

for (let i = 0; i < contratarButtons.length; i++) {
    contratarButtons[i].addEventListener("click", function() {
        const title = services[i].title;
        const description = services[i].description;
        const price = services[i].price;
        const startDate = services[i].startDate;
        const endDate = services[i].endDate;
        const url = services[i].url;
        showServicePopup(title, description, price, startDate, endDate, url);
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


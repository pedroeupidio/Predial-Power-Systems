// chat.js

// Função para obter os parâmetros da URL
function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        name: urlParams.get('name'),
        image: urlParams.get('image')
    };
}

// Carregar os dados do profissional e exibir na tela
function loadChat() {
    const params = getQueryParams();

    // Definir o nome e a imagem do profissional
    document.getElementById('professional-name').textContent = params.name;
    document.getElementById('professional-image').src = params.image;

    // Exibir a mensagem automática inicial
    const messageContainer = document.getElementById('chatMessages');
    const message = document.createElement('div');
    message.classList.add('chat-message', 'user');
    message.innerHTML = `<p>Olá, ${params.name}! Estou a procura de um profissional para fazer a instalação elétrica da minha casa. Seu curriculo me interessou, vamos negociar?</p>`;
    messageContainer.appendChild(message);

    // Rolagem automática para a última mensagem
    messageContainer.scrollTop = messageContainer.scrollHeight;

    // Ativar o input de mensagem
    document.getElementById('messageInput').disabled = false;
    document.getElementById('sendMessageBtn').disabled = false;
}

// Função para enviar uma mensagem
function sendMessage() {
    const messageText = document.getElementById('messageInput').value;
    if (messageText.trim() === '') return;

    const messageContainer = document.getElementById('chatMessages');
    const message = document.createElement('div');
    message.classList.add('chat-message', 'user');
    message.innerHTML = `<p>${messageText}</p>`;
    messageContainer.appendChild(message);

    // Limpar o input
    document.getElementById('messageInput').value = '';
    document.getElementById('messageInput').focus();

    // Rolagem automática para a última mensagem
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Carregar o chat ao abrir a página
window.onload = loadChat;

// Evento para enviar a mensagem ao clicar no botão
document.getElementById('sendMessageBtn').addEventListener('click', sendMessage);

// Evento para enviar a mensagem ao pressionar Enter
document.getElementById('messageInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

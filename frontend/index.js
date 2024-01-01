//My Personal Portfólio
// portfolio.js

document.addEventListener('DOMContentLoaded', function () {
    const formularioContato = document.getElementById('contatoForm');

    formularioContato.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        const duvidas = document.getElementById('duvidas').value;

        // Validação simples
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Simulação de envio assíncrono usando AJAX (pode ser substituído por uma biblioteca como axios)
        enviarDadosParaServidor(nome, email, mensagem, duvidas);
    });

    function enviarDadosParaServidor(nome, email, mensagem, duvidas) {
        // Simulação de requisição assíncrona usando um setTimeout
        setTimeout(function () {
            // Simulação de resposta do servidor (pode ser substituído por uma chamada real)
            const respostaServidor = { sucesso: true, mensagem: 'Mensagem enviada com sucesso!' };

            // Exemplo de manipulação do DOM com base na resposta do servidor
            const resultadoDiv = document.getElementById('resultadoEnvio');
            resultadoDiv.textContent = respostaServidor.mensagem;

            if (respostaServidor.sucesso) {
                resultadoDiv.classList.add('sucesso');
            } else {
                resultadoDiv.classList.add('erro');
            }
        }, 1000); // Simula um atraso de 1 segundo (pode ser ajustado conforme necessário)
    }
});
const formulario = document.querySelector('.formulário');

formulario.addEventListener('submit', async (event) => {
  
    event.preventDefault();

    
    const nome = document.getElementById('nomeCliente').value;
    const email = document.getElementById('emailCliente').value;
    const motivo = document.getElementById('motivoReembolso').value;
    
    
    const produto = document.querySelector('input[type="radio"]:checked')?.parentElement.textContent.trim() || "Não selecionado";

    const dados = {
        nome: nome,
        email: email,
        produto: produto,
        motivo: motivo
    };

    try {
        const response = await fetch('https://cauaamim.app.n8n.cloud/webhook-test/3b18419d-43dd-43ce-a2ca-4c7c90f9d69d', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (response.ok) {
            alert('Solicitação enviada com sucesso!');
        } else {
            alert('Erro ao enviar.');
        }
    } catch (error) {
        console.error('Erro de conexão:', error);
        alert('Não foi possível conectar ao n8n. Verifique o console.');
    }
});
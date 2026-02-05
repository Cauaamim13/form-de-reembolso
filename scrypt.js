const enviarDados = async (dados) => {
  const response = await fetch('https://cauaamim.app.n8n.cloud/webhook-test/3b18419d-43dd-43ce-a2ca-4c7c90f9d69d', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return response.json();
};
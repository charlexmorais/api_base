const express = require('express');
const app = express();
const PORT = 3000;

// Endpoint para uma rota simples
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Endpoint para uma rota com parâmetro
app.get('/nome/:nome', (req, res) => {
  const nome = req.params.nome;
  res.send(`Olá, ${nome}!`);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
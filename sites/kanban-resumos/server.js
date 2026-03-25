const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const port = 3000;


// Rota para exibir o formulário HTML para excluir um carro app.get('/excluir-carro', (req, res) => {
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar o servidor e escutar na porta especificada
app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`);
});
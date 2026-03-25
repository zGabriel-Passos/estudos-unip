const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const port = 3001;


app.get('/', (req, res) => {
    res.send(` <h2>Rotas dos Resumos</h2>
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <a href="/estatistica">Estatística</a>
        <a href="/python">Python</a>
        <a href="/etica">Ética</a>
        <a href="/so">Sistema Operacional</a>
        <a href="/si">Sistema de Informacao</a>
    </div>`);
});

app.get('/si', (req, res) => {
    res.sendFile(path.join(__dirname, 'si.html'));
});

app.get('/so', (req, res) => {
    res.sendFile(path.join(__dirname, 'sistema-operacional.html'));
});

app.get('/python', (req, res) => {
    res.sendFile(path.join(__dirname, 'python.html'));
});

app.get('/etica', (req, res) => {
    res.sendFile(path.join(__dirname, 'etica.html'));
});

app.get('/estatistica', (req, res) => {
    res.sendFile(path.join(__dirname, 'estatistica.html'));
});

// Iniciar o servidor e escutar na porta especificada
app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`);
});
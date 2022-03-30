const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.status(200).json({ message: `Èxecutando na porta ${PORT} e com a branch test-branch` });
});

app.listen(PORT, () => console.log('Executando na porta:', PORT));

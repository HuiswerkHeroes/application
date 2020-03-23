const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Welkom bij de Huiswerk Heroes API' }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

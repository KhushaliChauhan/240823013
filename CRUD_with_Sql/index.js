const express = require('express');
const Sequelize = require('sequelize');

const studentRoute = require('./Routes/studentRoute');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/products', studentRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

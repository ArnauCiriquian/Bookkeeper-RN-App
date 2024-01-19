const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { createBook, retriveBooks, retrieveBook, updateBook, deleteBook } = require('./logic/logic');

app.post('/books', createBook);

app.get('/books', retriveBooks);

app.get('/books/:id', retrieveBook);

app.put('/books/:id', updateBook);

app.delete('/books/:id', deleteBook);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
});

module.exports = app;
require('dotenv').config()

const express = require('express');
const app = express();

const admin = require('firebase-admin');
const serviceAccount = require('./key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = admin.firestore();

app.post('/books', async (req, res) => {
    try {
        const bookJson = {
            bookName: req.body.bookName,
            bookAuthor: req.body.bookAuthor,
            bookSynopsis: req.body.bookSynopsis,
            creationDate: req.body.creationDate
        };
        const response = await db.collection('books').add(bookJson);
        res.send(response.id);
    } catch (error) {
        res.send(error);
    }
})

app.get('/books', async (req, res) => {
    try {
        const booksRef = db.collection('books');
        const response = await booksRef.get();
        let responseArr = [];
        response.forEach(book => {
            responseArr.push({
                id: book.id,
                ...book.data()
            });
        });
        responseArr.sort(function (a, b) {
            let dateA = new Date(a.creationDate);
            let dateB = new Date(b.creationDate);
            return dateA - dateB;
        });
        res.send(responseArr);
    } catch (error) {
        res.send(error)
    }
})

app.get('/books/:id', async (req, res) => {
    try {
        const bookRef = db.collection('books').doc(req.params.id);
        const response = await bookRef.get();
        res.send(response.data());
    } catch (error) {
        res.send(error)
    }
})

app.put('/books/:id', async (req, res) => {
    try {
        const bookRef = db.collection('books').doc(req.params.id);
        const updatedBookJson = req.body;
        await bookRef.update(updatedBookJson);

        res.status(200).send('Book updated successfully');
    } catch (error) {
        res.send(error)
    }
})

app.delete('/books/:id', async (req, res) => {
    try {
        const response = await db.collection('books').doc(req.params.id).delete();
        express.send(response);
    } catch (error) {
        res.send(error);
    }
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})
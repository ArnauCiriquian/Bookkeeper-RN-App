const admin = require('firebase-admin');
const serviceAccount = require(/* Path to your firestore key json */);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

exports.createBook = async (req, res) => {
    try {
        const bookJson = {
            bookName: req.body.bookName,
            bookAuthor: req.body.bookAuthor,
            bookSynopsis: req.body.bookSynopsis,
            creationDate: req.body.creationDate
        };
        await db.collection('books').add(bookJson);

        res.status(201).send('Book created successfully');
    } catch (error) {
        res.send(error);
    };
};

exports.retriveBooks = async (req, res) => {
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
    };
};

exports.retrieveBook = async (req, res) => {
    try {
        const bookRef = db.collection('books').doc(req.params.id);
        const response = await bookRef.get();
        res.send(response.data());
    } catch (error) {
        res.send(error)
    };
};

exports.updateBook = async (req, res) => {
    try {
        const bookRef = db.collection('books').doc(req.params.id);
        const updatedBookJson = req.body;
        await bookRef.update(updatedBookJson);

        res.status(200).send('Book updated successfully');
    } catch (error) {
        res.send(error)
    };
};

exports.deleteBook = async (req, res) => {
    try {
        const response = await db.collection('books').doc(req.params.id).delete();
        express.send(response);
    } catch (error) {
        res.send(error);
    };
};
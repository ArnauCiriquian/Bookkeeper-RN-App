import {validateTextInput} from '../validators/validators';

const createNewBook = async (
  bookName: string,
  bookAuthor: string,
  bookSynopsis: string,
): Promise<boolean | null> => {
  validateTextInput(bookName, 'Book title');
  validateTextInput(bookAuthor, 'Book author');
  validateTextInput(bookSynopsis, 'Book synopsis');

  try {
    const creationDate = new Date();
    const response = await fetch('Your localhost URL to the API/books', {
      method: 'POST',
      body: JSON.stringify({bookName, bookAuthor, bookSynopsis, creationDate}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.ok;
  } catch (error) {
    return null;
  }
};

export default createNewBook;

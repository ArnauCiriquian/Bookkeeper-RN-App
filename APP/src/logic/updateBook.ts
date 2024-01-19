import {validateId, validateTextInput} from '../validators/validators';

const updateBook = async (
  id: string,
  bookName: string,
  bookAuthor: string,
  bookSynopsis: string,
): Promise<boolean | null> => {
  validateId(id);
  validateTextInput(bookName, 'New book title');
  validateTextInput(bookAuthor, 'New book author');
  validateTextInput(bookSynopsis, 'New book synopsis');

  try {
    const response = await fetch(
      `Your localhost URL to the API/books/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify({bookName, bookAuthor, bookSynopsis}),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.ok;
  } catch (error) {
    return null;
  }
};

export default updateBook;

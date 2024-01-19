import BookStructure from '../types';
import {validateId} from '../validators/validators';

const retriveBook = async (id: string): Promise<BookStructure | null> => {
  validateId(id);

  try {
    const response = await fetch(
      `Your localhost URL to the API/books/${id}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const book = await response.json();
    return book;
  } catch (error) {
    return null;
  }
};

export default retriveBook;

import {validateId} from '../validators/validators';

const deleteBook = async (id: string): Promise<boolean | null> => {
  validateId(id);

  try {
    const response = await fetch(
      `Your localhost URL to the API/books/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.ok;
  } catch (error) {
    return null;
  }
};

export default deleteBook;

import BookStructure from '../types';

const retriveBooks = async (): Promise<BookStructure[] | null> => {
  try {
    const response = await fetch('Your localhost URL to the API/books');
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  } catch (error) {
    return null;
  }
};

export default retriveBooks;

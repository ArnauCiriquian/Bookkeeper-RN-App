export const validateTextInput = (text: string, explain = 'text') => {
  if (typeof text !== 'string') {
    throw new Error(`${explain} is not a string`);
  }
  if (!text.length) {
    throw new Error(`${explain} is empty`);
  }
};

export const validateId = (id: string, explain = 'id') => {
    if (typeof id !== 'string') {
        console.log(typeof id);
      throw new Error(`${explain} is not a string`);
    }
    if (!id.trim().length) {
      throw new Error(`${explain} is empty`);
    }
  };

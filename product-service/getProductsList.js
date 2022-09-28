const products = require('/mocks/products.json');

export const getProductsList = async (event, context, callback) => {
  try {
    return [...products];
    
  } catch (err) {
    console.error(err);
  }
};

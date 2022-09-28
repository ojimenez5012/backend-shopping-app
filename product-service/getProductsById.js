const products = require("/mocks/products.json");

export const getProductsById = async (event, context, callback) => {
  try {
    const { productId } = event.pathParameters;
    const product = products.find((product) => product.id === productId);

    return product ? {
      product,
    } : {
      message: "Product not found",
    }
  } catch (err) {
    return {
      message: "Server error",
    };
  }
};

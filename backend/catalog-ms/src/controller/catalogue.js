import products from '../data/products.json' assert { type: "json" };
import product from '../data/product.json' assert { type: "json" };

const getAllProducts = async (req, res) => {
    try {
        res.status(200).json({
          data: products
        });
      } catch (error) {
        res.status(500).json({
          type: error.type,
          message: error.message,
        });
      }
};

const getProduct = async (req, res) => {
    try {
        res.status(200).json({
          data: product
        });
      } catch (error) {
        res.status(500).json({
          type: error.type,
          message: error.message,
        });
      }
};

export default {
    getAllProducts,
    getProduct
};

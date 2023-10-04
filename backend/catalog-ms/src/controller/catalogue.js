import * as CatalogueStore from '../libs/dynamodb/index.js'

/*
 *  Get products
 */
const getAllProducts = async (req, res) => {
    try {
        const products = await CatalogueStore.getItemsHandler();
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

/*
 *  Get product
 */
const getProduct = async (req, res) => {
    try {
        const product = await CatalogueStore.getItemHandler(req.body.id);
        console.log("ERROR product::", product)
        res.status(200).json({
          data: product
        });
      } catch (error) {
        console.log("ERROR::", error)
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

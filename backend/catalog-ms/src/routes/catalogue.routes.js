import express from "express";
import CatalogController from '../controller/catalogue.js'
const route = express.Router();

route.get("/", CatalogController.getAllProducts);

route.get("/:id", CatalogController.getProduct);

export default route;

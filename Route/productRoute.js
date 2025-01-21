import express from 'express';
import { getProductsByBrandCategory, getProductsByBrandName, getProductsByPrice } from '../Controller/FIlterData/filterData.js';
import { getProducts, helloWorld } from '../Controller/GetAllData/getAllData.js';
import { getSortedProductsByAtoZBrandName, getSortedProductsByLowtoHighPrice } from '../Controller/SortedData/sortedData.js';

const router = express.Router();

// -----------------------------------------------------------------------------------
// Filter API
router.get("/products/brand", getProductsByBrandName);
// http://localhost:8000/products/brand?brandName=Lolita

router.get("/products/category", getProductsByBrandCategory);
// http://localhost:8000/products/category?brandCategory=chair

router.get("/products/price", getProductsByPrice);
// http://localhost:8000/products/price?maxPrice=30


// -----------------------------------------------------------------------------------
// sorting API
router.get('/products/price/sort', getSortedProductsByLowtoHighPrice);
// http://localhost:8000/products/price/sort?sort=high-to-low

router.get('/products/name/sort', getSortedProductsByAtoZBrandName); 4
// http://localhost:8000/products/name/sort?order=A-Z



// -----------------------------------------------------------------------------------
// Get all data 
router.get("/api/products", getProducts);
// http://localhost:8000/api/products/

router.get("/hello", helloWorld)
// http://localhost:8000/hello


export default router;

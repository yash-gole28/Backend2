import { Router } from "express";
import { AddProduct, Products, SingleProduct, FilterProduct, SortProduct } from "../Controllers/Product.Controllers.js";
import { checkUser } from "../Middlewares/AllMiddleWares.js";

const router = Router()

router.get('/Allproducts',Products)
router.post('/Add-product',checkUser,AddProduct)
router.post('/single-product',SingleProduct)
router.post('/filter', FilterProduct) 
router.post('/sorting',SortProduct)

export default router
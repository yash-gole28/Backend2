import { Router } from "express";
import authRoutes from "./Auth.routes.js"
import productsRoutes from "./Product.routes.js"
const router = Router()


router.use("/auth",authRoutes)
router.use("/product",productsRoutes)

export default router
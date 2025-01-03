import express from "express"
import adminAuth from "../middlewares/adminAuth.js"
import {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus} from "../controllers/orderController.js"
import authUser from "../middlewares/auth.js"
import { verifyStripe } from "../controllers/orderController.js"
const orderRouter = express.Router()

orderRouter.post("/list",adminAuth, allOrders)
orderRouter.post("/status", adminAuth, updateStatus)

//Payment Features
orderRouter.post("/place",authUser,placeOrder)
orderRouter.post("/stripe",authUser,placeOrderStripe)
orderRouter.post("/razorpay",authUser,placeOrderRazorpay)

orderRouter.post('/userorders', authUser,userOrders)


orderRouter.post('/verifyStripe',authUser,verifyStripe)
export default orderRouter;

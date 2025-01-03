
import orderModel from "../../Server/src/models/orderModel"


const allOrder = async(req,res)=>{
  try {
    const orders = await orderModel.find({})
    res.json({success : true,orders})
  } catch (error) {
    console.log(error)
    res.json({ json:"ordseadmin" ,success : false , message : error.message})
  }
}

export default allOrder;
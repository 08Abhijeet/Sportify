import axios from "axios";
import backendUrl from "../App";
import { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";

const Verify = () => {
  const { navigate, token, setCartItems } = useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendUrl + "/api/order/verifyStripe",
        { success, orderId },
        { headers: { token } }
      );
      console.log(response);
      if (response.data.success) {
        setCartItems({});
        navigate("/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      navigate("/orders");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return <div>Verify</div>;
};

export default Verify;

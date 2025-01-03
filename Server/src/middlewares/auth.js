import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({ success: false, message: "Not authorized" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    req.body.userId = token_decode.id; // Extract the `id` from payload
    console.log("Decoded User ID:", req.body.userId);
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

export default authUser;

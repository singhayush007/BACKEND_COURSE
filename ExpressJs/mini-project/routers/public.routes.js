import { Router } from "express";
import { generateToken } from "../utils/token.utils.js"; // Assuming you have a utility function to generate tokens

const router = Router();

router.get("/generate-token", (req, res) => {
  // todo: callling utils method to create a random token
  const token = generateToken();

  res.status(200).json({
    message: "Token generated successfully",
    data: token,
  });
});

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to home page",
  });
});

export default router;

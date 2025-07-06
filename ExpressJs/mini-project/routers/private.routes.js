import {Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router ();

router.get ("/dashboard" , authMiddleware, (req, res) => {
    res.status(200).json({
        message: "Welcome to dashboard page",
        data : req.user
    });
});

export default router;
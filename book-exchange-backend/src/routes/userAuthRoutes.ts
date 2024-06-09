import {
  handleAuthenticate,
  handleForgotPassword,
  handleLogout,
  handleRegister,
  handleResendEmail,
  handleResetPassword,
  handleVerifyEmail,
} from "@src/controllers/userAuthController";
import { Router } from "express";

const router = Router();

router.post("/signup", handleRegister);
router.post("/login", handleAuthenticate);
router.post("/logout", handleLogout);
router.post("/forgot-password", handleForgotPassword);
router.post("/reset-password", handleResetPassword);
router.post("/verify-email", handleVerifyEmail);
router.post("/resend-verification-email", handleResendEmail);

export default router;

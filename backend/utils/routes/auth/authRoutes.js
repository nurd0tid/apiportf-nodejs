import express from "express";
import { getUsers, Register, Login, Logout } from "../../controllers/auth/Users.js";
import { verifyToken } from "../../middleware/VerifyToken.js";
import { refreshToken } from "../../controllers/auth/RefreshToken.js";

// Router JWT
const router = express.Router();
 
router.get('/auth/users', verifyToken, getUsers);
router.post('/auth/register', Register);
router.post('/auth/login', Login);
router.get('/auth/token', refreshToken);
router.delete('/auth/logout', Logout);
 
export default router;
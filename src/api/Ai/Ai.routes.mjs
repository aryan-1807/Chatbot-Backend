import { Router } from "express";
import AiController from "./Ai.controller.mjs";

const router = Router();


router.post('/Chat', AiController.chatWithSarvam)

export { router as AiRouter };
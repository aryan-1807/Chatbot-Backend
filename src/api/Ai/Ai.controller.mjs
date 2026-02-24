import AiService from "./Ai.service.mjs"

class AiController {
    chatWithSarvam = async (req, res) => {
        try {
            const message = req.body.message
            const response = await AiService.chatWithSarvam(message)
            res.json({ response })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}


export default new AiController()
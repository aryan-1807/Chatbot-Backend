import { SarvamAIClient } from 'sarvamai'
import { config } from 'dotenv'
config()


let SystemPrompt = `You are a helpful assistant. Answer the user's question to the best of your ability.`

class AiService {
  chatWithSarvam = async message => {
    try {
      const client = new SarvamAIClient({
        apiSubscriptionKey: process.env.SARVAM_API_KEY
      })


       const response = await client.chat.completions({
        messages: [
           {
                role: "system",
                content: SystemPrompt
            },
            {
                role: "user",
                content: message,
            }
           
        ],
        temperature: 0.5,
        top_p: 1,
        max_tokens: 1000,
    });

 
    return response.choices[0].message.content  

    } catch (error) {
      console.error('Error communicating with Sarvam API:', error)
      throw new Error('Failed to communicate with Sarvam API')
    }
  }
}

export default new AiService()

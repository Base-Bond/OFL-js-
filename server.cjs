// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const OpenAI = require('openai'); // Use the `openai` package

// // Load environment variables from .env
// require('dotenv').config();

// // Create an OpenAI instance
// const openai = new OpenAI({
//   apiKey: process.env.VITE_OPENAI_API_KEY, // Ensure the API key is read from the environment
// });

// // Setup server
// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// // Endpoint for ChatGPT
// app.post('/chat', async (req, res) => {
//   const { prompt } = req.body;

//   try {
//     const completion = await openai.completions.create({
//       model: 'gpt-3.5-turbo',
//       max_tokens: 100,
//       temperature: 0,
//       prompt: prompt,
//     });
    
//     res.send(completion.choices[0].text);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).send('Something went wrong');
//   }
// });

// // Define the server port
// const PORT = 8080;

// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

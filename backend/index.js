require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
// import modules from OpenAI library
const { Configuration, OpenAIApi } = require("openai");

const app = express();

const port  = 8000;

app.use(cors({ origin: "*", credentials: true }));
app.use(bodyParser.json());

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ message: 'Hello World' });
});

app.get('/fun', (req, res) => {
    res.status(200).json({message: 'Have fun!'});
});

app.post('/test', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

// POST request endpoint
app.post("/ask", async (req, res) => {
    // getting prompt question from request
    const prompt = req.body.prompt;

    const post_prompt = ". can you predict this dream in 100 words or less.return the result in two parts separated by ':' sign. the first part includes the dream prediction, the second part describes the mood of the dream in one word. categories of mood include angry, anxious, worried,carefree, and caring. make sure the result is javascript object stringified with keys,prediction and mood";
    const final_prompt = prompt + post_prompt;

    try {
      if (prompt == null || prompt == "") {
        throw new Error("Uh oh, no prompt was provided");
      }
      // openai completion
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content: final_prompt}],
      });
      const completion = response.data.choices[0].message.content;
      return res.status(200).json({
        success: true,
        data: JSON.parse(completion),
        message: 'success'
      });
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
            success: false,
            data: null,
            message: 'No dream was found!'
        });
    }
  });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
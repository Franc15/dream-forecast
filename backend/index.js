require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
var dbConnection = require('./lib/db');
// import modules from OpenAI library
const { Configuration, OpenAIApi } = require("openai");

const app = express();

const port  = process.env.PORT || 5000;

app.use(cors({ origin: "*", credentials: true }));
app.use(bodyParser.json());

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ message: 'Welcome to Orynix API' });
});


app.post('/api/test', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

// POST request endpoint
app.post("/api/ask", async (req, res) => {
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

// TODO: endpoint to save the created userto the database
app.post('/api/user/register', (req, res) => {
    try {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const username = req.body.username;
        const email = req.body.email;

        const sql = "INSERT INTO users (firstname, lastname, username, email) VALUES (?, ?, ?, ?)";
        dbConnection.query(sql, [firstname, lastname, username, email], (err, result) => {
            if (err) throw err;
            console.log("1 record inserted");
        });
        res.json({message: 'User registered successfully!', success: true});
    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false,
            message: 'user creation failure'
        });
    }
});


// TODO: endpoint to retrieve user information from database
app.get('/api/user/:username', (req, res) => {
    try {
        const username = req.params.username;
        const sql = "SELECT * FROM users WHERE username = ?";
        dbConnection.query(sql, [username], (err, result) => {
            if (err) throw err;
            console.log(result);
            res.json({message: 'User retrieved successfully!', success: true, data: result});
        });
    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false,
            message: 'error on finding user'
        });
    }
});

// TODO: endpoint to save dream description in database
app.post('/api/dream', (req, res) => {
    try {
        const username = req.body.username;
        const dream = req.body.dream;
        const mood = req.body.mood;
        const sql = "INSERT INTO dreams (username, dream, mood) VALUES (?, ?, ?)";
        dbConnection.query(sql, [username, dream, mood], (err, result) => {
            if (err) throw err;
            console.log("1 record inserted");
        });
        res.json({message: 'Dream saved successfully!', success: true});
    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false,
            message: error.message
        });
    }
});


// TODO: endpoint to retrieve list of previously predicted dreams
app.get('/api/dreams/:username', (req, res) => {
    try {
        const username = req.params.username;
        const sql = "SELECT * FROM dreams WHERE username = ?";
        dbConnection.query(sql, [username], (err, result) => {
            if (err) throw err;
            console.log(result);
            res.json({message: 'dreams retrieved success', success: true, data: result});
        });
    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false,
            message: 'could not retrieve dreams'
        });
    }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
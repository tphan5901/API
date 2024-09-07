const express = require('express');
const app = express();

const questionsStorage = [
  { id: "0", Question: "遊んじょ", answer: "あそんじよ", answer2: "asonjiyo",},
  { id: "1", Question: "前向きに", answer: "まえむきに", answer2: "maemukini",},
  { id: "2", Question: "一生懸命", answer: "いっしょうけんめい", answer2: "isshoukenmei",},
  { id: "3", Question: "昼夜", answer: "ちゅうや" , answer2: "chuuya" ,},
  { id: "4", Question: "豆乳", answer: "とうにゅう", answer2: "touniyuu", },
];

// Endpoint to get all questions
app.get('/api/questions', (req, res) => {
  res.json(questionsStorage);
});

// Endpoint to get a question by ID
app.get('/api/questions/:id', (req, res) => {
  const question = questionsStorage.find(q => q.id === req.params.id);
  if (question) {
    res.json(question);
  } else {
    res.status(404).send('Question not found');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

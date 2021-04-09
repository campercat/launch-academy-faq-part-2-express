import express from "express"

import Question from "../../../models/Question.js"

const questionsRouter = new express.Router()

questionsRouter.get("/", (req, res) => {
  res.set({ 'Content-Type': 'application/json' }).status(200).json({ questions: Question.findAll() })
})

questionsRouter.post("/", (req, res) => {
  const question = new Question(req.body)
  if(question.save()) {
    res.status(201).json({ question })
  } else {
    res.status(422).json({ errors: question.errors })
  }
})

export default questionsRouter
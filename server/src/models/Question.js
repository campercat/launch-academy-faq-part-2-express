import fs from "fs"
import _ from "lodash"

const questionsPath = "questions.json"

class Question {
  constructor({id, question, answer}) {
    this.id = id
    this.question = question
    this.answer = answer
  }

  static findAll() {
    const questionData = JSON.parse(fs.readFileSync(questionsPath)).questions
    const questions = questionData.map(question => new Question(question))
    return questions
  }

  isValid() {
    this.errors = {}
    const requiredFields = ["question", "answer"]
    let isValid = true

    for(const requiredField of requiredFields) {
      this.errors[requiredField] = []
      if(!this[requiredField]) {
        isValid = false
        this.errors[requiredField].push("Can't be blank")
      }
    }
    return isValid
  }

  static getNextQuestionId() {
    const maxQuestion = _.maxBy(this.findAll(), Question => Question.id)
    return maxQuestion.id + 1
  }

  save() {
    if(this.isValid()) {
      delete this.errors
      this.id = this.constructor.getNextQuestionId()
      const questions = this.constructor.findAll()
      questions.push(this)
      const data = { questions: questions }
      fs.writeFileSync(questionsPath, JSON.stringify(data))
      return true
    } else {
      return false
    }
  }
}

export default Question
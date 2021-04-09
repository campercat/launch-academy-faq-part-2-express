import React, { useState } from "react"

const QuestionForm = props => {
  const [question, setQuestion] = useState({
    question: "",
    answer: ""
  })

  const onChangeHandler = event => {
    setQuestion({...question, [event.currentTarget.id]: event.currentTarget.value})
  }

  const onSubmitHandler = event => {
    event.preventDefault()
    props.addQuestion(question)
    clearForm()
  }

  const clearForm = (event) => {
    setQuestion({
      question: "",
      answer: ""
    })
  }

  return(
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="question">Question:
        <input
          type="text"
          id="question"
          name="question"
          value={question.question}
          onChange={onChangeHandler}
        />
      </label>

      <label htmlFor="answer">Answer:
      <input
        type="text"
        id="answer"
        name="answer"
        value={question.answer}
        onChange={onChangeHandler}
      />
    </label>

    <input type="submit" value="Add New FAQ" />
    <input type="button" value="Clear Form" onClick={clearForm} />

    </form>
  )

}

export default QuestionForm
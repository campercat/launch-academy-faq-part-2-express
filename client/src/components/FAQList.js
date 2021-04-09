import React, { useEffect, useState } from 'react'
import Question from './Question'
import QuestionForm from './QuestionForm'
import { hot } from "react-hot-loader/root"

const FAQList = props => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])

  // GET request to retrieve question objects from API endpoint
  // fetched data is being mapped over in this comoponent
  const fetchData = async () => {
    try {
      // returns a Promise
      const response = await fetch("/api/v1/questions")
      // if fetch is unsuccessful, do error handling
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error // to be caught
      }
      // .json() returns a Promise which absolves to JS objects
      const responseBody = await response.json()
      setQuestions(questions.concat(responseBody.questions))
    } catch (error) {
      console.log(error.message)
    }
  }

  // useEffect is invovked after initial render, which then calls the fetchData function
  useEffect(() => {
    fetchData()
  }, [])

  // POST request to persist new question data to the JSON file
  // This function is invoked when a new question is submitted
  const addQuestion = async (newQuestion) => {
    try {
      // returns a Promise that is based on the Quesion model, has key of question
      const response = await fetch('api/v1/questions', {
        method: "POST",
        headers: new Headers({
          "content-Type": "application/json",
        }),
        body: JSON.stringify(newQuestion)
      })
      if(!response.ok) {
        const errorObject = await response.json()
        const errorBody = errorObject.errors
        let errorMessage = ""
        Object.keys(errorBody).forEach(errantField => {
          errorMessage += `${errantField}: ${errorBody[errantField]}\n`
        })
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setQuestions([...questions, responseBody.question])
    } catch (error) {
      console.log(error.message)
    }
  }

  const toggleQuestionSelect = id => {
    if (id === selectedQuestion) {
      setSelectedQuestion(null)
    } else {
      setSelectedQuestion(id)
    }
  }

  const questionListItems = questions.map(question => {
    let selected
    if (selectedQuestion === question.id) {
      selected = true
    }

    let handleClick = () => {
      toggleQuestionSelect(question.id)
    }

    return (
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  // debugger

  return (
    <div className="page">
      <h1>We Are Here To Help</h1>
      <h1>HERE?</h1>
      {/* rendering array of Question components */}
      <div className="question-list">{questionListItems}</div>
      <QuestionForm addQuestion={addQuestion} />
    </div>
  )
}

export default hot(FAQList)

// Part 1: Fetching questions data from API endpoint
// It is a good idea to fetch in this component because this is where the questions state is stored


import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const LauncherList = props => {
  const [launchers, setLaunchers] = useState([])

  const fetchLaunchers = async () => {
    try {
      const response = await fetch("/api/v1/launchers")
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setLaunchers(responseBody.launchers)
    } catch (error) {
      console.log(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchLaunchers()
  }, [])

  const launcherList = launchers.map(launcher => {
    // debugger
    return(
      <Link to={`/launchers/${launcher.id}`} key={launcher.id}>
        <li>{launcher.name}</li>
      </Link>
    )
    // <li key={launcher.id}>{launcher.name}</li>
  })

  return (
    <div>
      <ul>{launcherList}</ul>
    </div>
  )
}

export default LauncherList

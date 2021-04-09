import React, { useState, useEffect } from "react"

const LauncherShow = props => {
  const [launcher, setLauncher] = useState({})
  const launcherId = props.match.params.id
  // debugger

  const fetchLauncher = async () => {
    try {
      const response = await fetch(`/api/v1/launchers/${launcherId}`)
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setLauncher(responseBody.launcher)

    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchLauncher()
  }, [])

  return(
    <div>
      <h1>{launcher.name}</h1>
      <h3>{launcher.bio}</h3>
    </div>
  )
}

export default LauncherShow
// This Request IS an Example for Creating Coustom Hooks for Your Project
// --> TRy to Cahange the userName constant to your github user name & explore the page.
import { useEffect, useState } from 'react'
import Axios from 'axios'
import { SERVER } from '../constants/ServerUrl'

const GitHubUser = () => {
  const [results, setResults] = useState([])
  // Change the userName & reload the app.
  const userName = 'mahmoud-bebars'
  useEffect(() => {
    Axios.get(SERVER + userName).then((response) => {
      if (response.data.login === userName) {
        setResults(response.data)
        console.log(
          `satausCode: ${response.status},For UserName: ${response.data.login} GET Request`
        )
        console.log(response.data)
      } else {
        setResults([])
      }
    })
  }, [])

  return results
}

export default GitHubUser

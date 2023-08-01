import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import GitHubUser from './hooks/GitHubUser'

function App() {
  const userData = GitHubUser()
  const [data, setData] = useState(userData)

  useEffect(() => {
    setData(userData)
    console.log(data)
  }, [data, userData])

  return (
    <>
      {/* Always put your JSX in A fragments to aviod any Errors beacuse 1 tags should be putten in the return. */}
      <Home data={data} />
    </>
  )
}

export default App

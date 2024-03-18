import React, {useEffect, useState} from 'react'

function Index() {
  
  const [message, setMessage] = useState("Loading")
  const [timestamp, setTimestamp] = useState(""); // Added new state variable to hold the timestamp


  console.log(process.env.NEXT_PUBLIC_SERVER_URL + "/api/home")
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/api/home").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setMessage(data.message)
        setTimestamp(data.timestamp);

      }
    )
  }, [])

  return (
    <div>
      <div>Return message from server</div>
      <div>{message}</div>
      <div>Timestamp: {timestamp}</div> {/* Display the timestamp */}
    </div>
  )
}

export default Index
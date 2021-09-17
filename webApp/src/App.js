import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState("Something is not working !!!")

  useEffect(() => {
    //paste here after you deploy de cdk infra
    const url = "https://f7go511t91.execute-api.eu-west-1.amazonaws.com/prod/"
    fetch(url)
      .then(response => response.json())
      .then(data => setMessage(JSON.stringify(data)))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          AWS ceva: {message}
        </p>
      </header>
    </div>
  );
}

export default App;

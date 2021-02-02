import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {

  const sendData = ()=>{
    
    var config = {
      method: 'get',
      url: 'http://localhost:3001/getdata',
      headers: { 
        '': ''
      }
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload jggkjgkjgjkgjkgjkgkgjkgyujfjgkmugugjhyvfhyjfchjuftfgc.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button onClick={()=>sendData()}></Button>
    </div>
  );
}

export default App;

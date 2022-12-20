import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //Create a react button element that fetches data from the localhost:8080/getData endpoint with the internal text of "data" - This line is written by a human
    //And displays that data on the page as an html element in a two column table - This line is written by a human
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => {
          fetch('http://localhost:8080/getData')
            .then(response => response.json())
            .then(data => {
              console.log(data);
              document.getElementById('data').innerHTML = data;
            });
        }}>data</button>
        <table>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
          <tr>
            <td id="data"></td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;

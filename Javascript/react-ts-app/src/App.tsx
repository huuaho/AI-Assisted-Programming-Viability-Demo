import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //Create a react button element that fetches data from the localhost:8080/getData endpoint with the internal text of "data"
    //And displays that data on the page as an html element in a two column table 
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
              let table = document.getElementById('table');
              if (table) {
                table.innerHTML = '';
                for (let i = 0; i < data.length; i++) {
                  table.innerHTML += `<tr><td>${data[i].id}</td><td>${data[i].name}</td></tr>`;
                }
              }
            });
        }
        }>data</button>
        <table id="table">
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </table>
      </header>
    </div>


  )
}

export default App;

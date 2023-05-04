import logo from './logo.svg';
import './App.css';

function App() {
  const addBtnClick = () => {
    console.log('Theres been a click');
  }

  return (
    <div className="card">
      <div className="player-name">Jasper</div>
      <div className="btn-container">
        <button className="add-btn" onClick={addBtnClick} >+ Add</button>
      </div>
    </div>
  );
}

export default App;
{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div> */}
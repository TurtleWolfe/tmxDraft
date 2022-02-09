import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import MuiCard from './components/MuiCard';
import Button from '@mui/material/Button';
function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h4>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
            >
              Learn React
            </Button>

          </a>
        </h4>

        <MuiCard>

        </MuiCard>
      </header>
    </div>
  );
}

export default App;

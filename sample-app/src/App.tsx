import './App.css';
import Button from '@material-ui/core/Button';

function clicked() {
    window.alert("Clicked")
}

function App() {
  return (
      <Button variant="contained" color="primary" onClick={clicked}>
        Hello World
      </Button>
  );
}

export default App;

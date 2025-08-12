import logo from './logo.svg';
import './App.css';
import Card from './Card'; 

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
function App() {
  return (
    <div >
       <h1>Task: Add three Card elements</h1>
            <Card num={randomNumber()} />
            <Card num={randomNumber()} />
            <Card num={randomNumber()} />

     
    </div>
  );
}

export default App;


import './App.css';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Nav from './components/Nav';
import Promo from './components/Promo';

function App() {
    return (
        <div className="App">
            <Nav />
            <Promo />
            <main>
              
                <Intro1  greet='Hello, Curtis' color="black" />
                <Intro2  greet='Hello, Curtis' />
                <Intro3  greet='Hello, Curtis' />
            </main>
        </div>
    );
}

export default App;

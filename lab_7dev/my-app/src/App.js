import './App.css';
import Hello from './zad_1.js';
import HelloWithProps from './zad_2.js';
import Counter from './zad_3.js';
import InputTracker from './zad_4.js';
import LoginStatus from './zad_5.js';
import TodoList  from './zad_6.js';
import LoginForm from './zad_7.js';

function App() {
  return (
    <div className="App">
      <div className="card-section">
        <Hello />
      </div>
      <hr className="separator" />
      <div className="card-section">
        <HelloWithProps name="Szymon Tułodziecki 21312" />
      </div>
      <hr className="separator" />
      <div className="card-section">
        <Counter />
      </div>
      <hr className="separator" />
      <div className="card-section">
        <InputTracker />
      </div>
      <hr className="separator" />
      <div className="card-section">
        <LoginStatus />
        </div>
        <hr className="separator" />
        <div className="card-section">
        <TodoList todos={['Obudzić się', 'Wstać', 'Wypić kawę']} />
      </div>  
      <hr className="separator" />
      <div className="card-section">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;

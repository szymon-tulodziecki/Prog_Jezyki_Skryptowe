import React from 'react';
import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';

function App() {
  return (
    <div className="App">
      <h1>Laboratorium 8 – React</h1>
      
      <section>
        <h2>1. Warunkowe renderowanie (ToggleDetails)</h2>
        <ToggleDetails />
      </section>

      <section>
        <h2>2. Warunkowe przypisanie komponentu (ScoreDisplay)</h2>
        <ScoreDisplay score={70} />
      </section>

      <section>
        <h2>3. Lista z dynamicznym filtrowaniem (TaskList)</h2>
        <TaskList />
      </section>

      <section>
        <h2>4. useEffect i pobieranie danych (UserList)</h2>
        <UserList />
      </section>

      <section>
        <h2>5. Licznik z efektem ubocznym (TimerCounter)</h2>
        <TimerCounter />
      </section>
    </div>
  );
}

export default App;

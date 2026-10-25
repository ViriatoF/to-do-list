import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { texte: 'première tache' },
    { texte: 'deuxième tache' },
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === '') return;

    setTasks([...tasks, { texte: inputValue }]);

    setInputValue('');
  };

  return (
    <section>
      <h1>To do list</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
         value={inputValue}
         onChange={(e) => setInputValue(e.target.value)}
         placeholder="Nouvelle tâche..." />
        <button type="submit">Ajouter</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.index}>
              <input type="checkbox" />
              <span>{task.texte}</span>
              <button type="button">X</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default App;

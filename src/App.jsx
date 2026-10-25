import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { texte: 'première tache', isChecked: false },
    { texte: 'deuxième tache', isChecked: false },
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === '') return;

    setTasks([...tasks, { texte: inputValue, isChecked: false }]);

    setInputValue('');
  };

  const toggleTask = (indexClique) => {
    setTasks(
      tasks.map((task, i) =>
        i === indexClique ? { ...task, isChecked: !task.isChecked } : task,
      ),
    );
  };

  return (
    <section>
      <h1>To do list</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nouvelle tâche..."
        />
        <button type="submit">Ajouter</button>
      </form>

      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.isChecked}
                onChange={() => toggleTask(index)}
              />
              <span className={task.isChecked ? 'isChecked' : ''}>
                {task.texte}
              </span>
              <button type="button">X</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default App;

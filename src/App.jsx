import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <section>
      <h1>To do list</h1>
      <form>
        <input type="text" placeholder="Nouvelle tâche..." />
        <button type="submit">Ajouter</button>
      </form>

      <ul>
        <li>
          <input type="checkbox" />
          <span>Texte</span>
          <button type="button">X</button>
        </li>
      </ul>
    </section>
  );
}

export default App;

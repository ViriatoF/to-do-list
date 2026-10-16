import './App.css';
import { useState } from 'react';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function toggleTask(index) {
    const copie = [...tasks];
    copie[index].done = !copie[index].done;
    setTasks(copie);
  }

  return (
    <>
      <h1>To do list</h1>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.done ? 'checked' : ''}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(index)}
            />
            {task.text}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        onClick={() => {
          setTasks([...tasks, { text: newTask, done: false }]);
          setNewTask('');
        }}
      >
        Ajouter la tâche
      </button>
    </>
  );
}

export default App;

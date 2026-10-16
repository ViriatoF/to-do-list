import './App.css'
import {useState} from "react"

function App() {

  const[newTask, setNewTask]= useState('');
  const[tasks, setTasks]= useState([]);

  return (
    <>
      <header>
        <h1>To do list</h1>
      </header>
      <main>
        <section>
          <h2>Liste des tâches</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </section>
        <section>
          <input type="text" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          />
          <button>Ajouter la tâche</button>
        </section>
      </main>
    </>
  )
}

export default App

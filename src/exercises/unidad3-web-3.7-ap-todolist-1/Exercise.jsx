import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer Tarea 1', completed: false }, 
    { id: 2, text: 'Hacer Tarea 2', completed: true },
    { id: 3, text: 'Hacer Tarea 3', completed: false }
  ]);

  const handleClick = (id) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
        } else {
          return task;
        }
        });
        setTasks(newTasks)  
        
      }
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map(task => (
          <li 
            key={task.id}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => handleClick(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
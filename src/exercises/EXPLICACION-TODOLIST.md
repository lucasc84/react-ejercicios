# Explicación detallada de los ejercicios ToDo List

Este documento explica paso a paso la evolución de los ejercicios de ToDo List en las carpetas:

- unidad2-web-3.7-ap-todolist-1
- unidad2-web-3.7-ap-todolist-2
- unidad2-web-3.7-ap-todolist-3
- unidad2-web-3.7-ap-todolist-4

---

## Ejercicio 1: ToDo List básico

**Consigna:**  
Crear un componente que muestre una lista de tareas. Al hacer click en una tarea, se marca como completada (cambia el estilo).

**Código principal:**
```jsx
import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer Tarea 1', completed: false }, 
    { id: 2, text: 'Hacer Tarea 2', completed: true },
    { id: 3, text: 'Hacer Tarea 3', completed: false }
  ]);

  const handleClick = (id) => {
    const newTasks = tasks.map(task => 
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );
    setTasks(newTasks);
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
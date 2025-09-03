import {useState} from 'react';

export default function TaskList () {
  const [tasks, setTasks] = useState ([
    {id: 1, name: 'Estudiar React', completed: false},
    {id: 2, name: 'Ir al Cine', completed: true},
    {id: 3, name: 'Reunion de trabajo', completed: false},
  ]);

  return (
    <>
    <h1>Tareas </h1>
    <ul>
      {tasks.map (task => (
        <li key={task.id} style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
          {task.name}
        </li>
      ))}
    </ul>
    </> 

  )
}
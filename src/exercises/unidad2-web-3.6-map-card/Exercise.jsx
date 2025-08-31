import {useState} from 'react';
import TaskCard from './TaskCard';

export default function TaskList () {
  const [tasks, setTasks] = useState ([
    {id: 1, name: 'Estudiar React', completed: false},
    {id: 2, name: 'Ir al Cine', completed: true},
    {id: 3, name: 'Reunion de trabajo', completed: false},
  ]);

  return (
    <>
    <h1>Tareas </h1>
{tasks.map (task => (
    <TaskCard key={task.id} task={task}>{task.name}  </TaskCard>
      ))}
        </> 

  )
}
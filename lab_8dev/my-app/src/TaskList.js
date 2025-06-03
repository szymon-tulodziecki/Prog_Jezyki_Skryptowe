import React, { useState } from 'react';

const tasks = [
  { id: 1, title: 'Napisać raport z projektu React', completed: true },
  { id: 2, title: 'Przygotować prezentację na seminarium', completed: false },
  { id: 3, title: 'Oddać książki do biblioteki', completed: true },
  { id: 4, title: 'Zrobić zakupy spożywcze', completed: false },
  { id: 5, title: 'Umówić wizytę u dentysty', completed: false },
];

function TaskList() {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return filter === 'completed' ? task.completed : !task.completed;
  });

  return (
    <div>
      <button onClick={() => setFilter('all')}>Wszystkie</button>
      <button onClick={() => setFilter('completed')}>Ukończone</button>
      <button onClick={() => setFilter('not_completed')}>Nieukończone</button>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

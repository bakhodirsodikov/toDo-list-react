import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const TodoCalendar = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { title: newTask, date: new Date() }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={tasks.map((task) => ({
          title: task.title,
          date: task.date.toISOString().slice(0, 10),
          display: 'background',
          backgroundColor: 'lightgreen',
          borderColor: 'green',
          textColor: 'black',
          extendedProps: { index: tasks.indexOf(task) },
        }))}
        eventClick={(info) => deleteTask(info.event.extendedProps.index)}
      />
    </div>
  );
};

export default TodoCalendar;
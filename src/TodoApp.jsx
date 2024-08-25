import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, done: false }]);
    setShowForm(false);
  };

  const toggleTaskDone = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(newTasks);
  };

  return (
    <>
    <nav className='text-4xl h-16 px-36 py-2 mb-10 border-b-2 border-gray-200'>BeOnTime</nav>
    <div className="mx-36   ">
      <h1 className="text-2xl font-bold mb-4">Things to get done</h1>

      <TaskList
        tasks={tasks.filter(task => !task.done)}
        toggleTaskDone={toggleTaskDone}
        title="Things to do"
      />

      <div >
        {showForm ? (
          <TaskForm addTask={addTask} setShowForm={setShowForm} />
        ) : (
          <button
            className="bg-yellow-500 hover:bg-yellow-600 font-medium text-white rounded-full px-4 py-1 mt-4 "
            onClick={() => setShowForm(true)}
          >
            + Add a todo
          </button>
        )}
      </div>

      <TaskList
        tasks={tasks.filter(task => task.done)}
        toggleTaskDone={toggleTaskDone}
        title="Things done"
      />
    </div>
    </>
  );
}

export default TodoApp;

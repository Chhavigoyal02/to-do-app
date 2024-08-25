import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      id: Date.now(), // unique ID for each task
      text: task,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setShowForm(false);
  };

  const toggleTaskDone = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <>
      <nav className='text-3xl md:text-4xl h-16 px-4 md:px-36 py-2 mb-10 border-b-2 border-gray-200'>BeOnTime</nav>
      <div className="mx-4 md:mx-36 ">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Things to get done</h1>

        <TaskList
          tasks={tasks.filter((task) => !task.done)}
          toggleTaskDone={toggleTaskDone}
          deleteTask={deleteTask}
          title="Things to do"
          emptyMessage="No tasks here!"
        />

        <div>
          {showForm ? (
            <TaskForm addTask={addTask} setShowForm={setShowForm} />
          ) : (
            <button
              className="bg-yellow-500 hover:bg-yellow-600 font-medium text-white rounded-full px-4 py-1 mt-4"
              onClick={() => setShowForm(true)}
            >
              + Add a todo
            </button>
          )}
        </div>

        <TaskList
          tasks={tasks.filter((task) => task.done)}
          toggleTaskDone={toggleTaskDone}
          deleteTask={deleteTask}
          title="Things done"
          emptyMessage="No tasks completed yet!"
        />
      </div>
    </>
  );
}

export default TodoApp;

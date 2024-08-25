import React, { useState } from 'react';

function TaskForm({ addTask, setShowForm }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task.trim());
      setTask('');
    }
  };

  return (
    <div className="ml-4 border-b-4 border-gray-200 py-4">
    <h1 className="text-xl font-bold mb-2">Create a todo</h1>
    <form onSubmit={handleSubmit} className="flex max-w-lg space-y-2 flex-col ">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Write a todo"
        className="p-2 border rounded"
      />
     <div >
     <button
        type="submit"
        className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
      >
        Save
      </button>
      <button
        type="button"
        className="bg-gray-300 text-black px-4 py-2 rounded"
        onClick={() => setShowForm(false)}
      >
        Cancel
      </button>
     </div>
    </form>
    </div>
  );
}

export default TaskForm;
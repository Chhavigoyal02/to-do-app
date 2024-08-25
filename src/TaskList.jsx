import React from 'react';
import { MdDelete } from "react-icons/md";

function TaskList({ tasks, toggleTaskDone, deleteTask, title, emptyMessage }) {
  return (
    <div>
      <h2 className="text-lg md:text-xl font-semibold mb-2 mt-4">{title}</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTaskDone(task.id)}
              className="accent-yellow-500 h-4 md:h-5 w-4"
            />
            <span className={`flex-1 max-w-xs md:max-w-sm ${task.done ? 'text-gray-500' : ''}`}>
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-600 ml-2 md:ml-4"
              aria-label="Delete task"
            >
              <MdDelete />
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">{emptyMessage}</p>
      )}
    </div>
  );
}

export default TaskList;

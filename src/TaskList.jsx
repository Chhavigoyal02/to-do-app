import React from 'react';

function TaskList({ tasks, toggleTaskDone, title }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 mt-4">{title}</h2>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTaskDone(index)}
              className="accent-yellow-500 h-5 w-4"
            />
            <span className={task.done ? ' text-gray-500' : ''}>
              {task.text}
            </span>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No tasks here!</p>
      )}
    </div>
  );
}

export default TaskList;

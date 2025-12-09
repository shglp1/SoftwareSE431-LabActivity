import React from 'react';

const TaskList = ({ tasks, onToggle }) => {
    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <p>No tasks yet. Add one above!</p>
            </div>
        );
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                    <label className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onToggle(task.id)}
                        />
                        <span className="checkmark"></span>
                    </label>
                    <span className="task-title">{task.title}</span>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;

import React, { useEffect, useState } from 'react';
import { fetchTasks, addTask, toggleTaskCompletion } from './api';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setLoading(true);
    const data = await fetchTasks();
    setTasks(data);
    setLoading(false);
  };

  const handleAddTask = async (taskData) => {
    // Optimistic update could go here, but let's wait for server for this lab
    const newTask = await addTask(taskData);
    setTasks((prev) => [...prev, newTask]);
  };

  const handleToggleTask = async (id) => {
    // Optimistic update
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
    await toggleTaskCompletion(id);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Lab Activity: To-Do App</h1>
        <p className="subtitle">Software Maintenance & Evolution</p>
      </header>

      <main className="app-content">
        <AddTask onAdd={handleAddTask} />

        {loading ? (
          <div className="loading-spinner">Loading tasks...</div>
        ) : (
          <TaskList tasks={tasks} onToggle={handleToggleTask} />
        )}
      </main>

      <footer className="app-footer">
        <p>v1.0.0 - "The Untested Release"</p>
      </footer>
    </div>
  );
}

export default App;

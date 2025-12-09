
// Simulated database
let tasks = [
  { id: 1, title: "Fix the coffee machine", completed: false },
  { id: 2, title: "Update documentation", completed: true },
  { id: 3, title: "Review pull requests", completed: false },
];

const DELAY = 500; // Simulate network latency

export const fetchTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...tasks]);
    }, DELAY);
  });
};

export const addTask = (task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // STRICT VALIDATION: This is where the bug will be triggered
      // The API expects 'title', but the frontend will send 'text'
      if (!task.title) {
        console.error("API Error: Missing 'title' field in request body.", task);
        reject({
          status: 400,
          message: "Bad Request: 'title' field is required.",
        });
        return;
      }

      const newTask = {
        id: Date.now(),
        title: task.title,
        completed: false,
      };
      tasks = [...tasks, newTask];
      resolve(newTask);
    }, DELAY);
  });
};

export const toggleTaskCompletion = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      tasks = tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      );
      resolve();
    }, DELAY);
  });
};

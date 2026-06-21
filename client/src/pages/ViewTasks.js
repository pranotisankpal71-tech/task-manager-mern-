import { useEffect, useState } from "react";
import axios from "axios";

function ViewTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    } catch (error) {
      alert("Failed to load tasks");
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);

      alert("Task deleted successfully");

      fetchTasks();
    } catch (error) {
      alert("Delete failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Tasks</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>

              <td>
                <button
                  onClick={() => {
                    window.location.href = `/edit-task/${task._id}`;
                  }}
                >
                  Edit
                </button>

                {" "}

                <button
                  onClick={() => deleteTask(task._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <button
        onClick={() => {
          window.location.href = "/dashboard";
        }}
      >
        Back to Dashboard
      </button>
    </div>
  );
}

export default ViewTasks;
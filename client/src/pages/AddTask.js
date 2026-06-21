import { useState } from "react";
import axios from "axios";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createTask = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await axios.post(
        "http://localhost:5000/api/tasks",
        {
          title,
          description,
          status: "Pending",
          user: user._id,
        }
      );

      alert(res.data.message);

      setTitle("");
      setDescription("");
    } catch (error) {
      alert(error.response?.data?.message || "Task Creation Failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Add Task</h1>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <button onClick={createTask}>
        Create Task
      </button>

      <br />
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

export default AddTask;
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditTask() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  const updateTask = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        {
          title,
          description,
          status,
        }
      );

      alert("Task updated successfully");

      window.location.href = "/view-tasks";
    } catch (error) {
      alert("Update failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Edit Task</h1>

      <input
        type="text"
        placeholder="New Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="New Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <br />
      <br />

      <button onClick={updateTask}>
        Update Task
      </button>
    </div>
  );
}

export default EditTask;
function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged out successfully!");
    window.location.href = "/login";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Task Manager Dashboard</h1>

      <h2>Welcome, {user?.name}</h2>

      <br />

      <button
        onClick={() => {
          window.location.href = "/add-task";
        }}
        style={{
          padding: "10px 20px",
          margin: "10px",
        }}
      >
        Add Task
      </button>

      <button
        onClick={() => {
          window.location.href = "/view-tasks";
        }}
        style={{
          padding: "10px 20px",
          margin: "10px",
        }}
      >
        View Tasks
      </button>

      <br />
      <br />

      <button
        onClick={logoutUser}
        style={{
          padding: "10px 20px",
          backgroundColor: "red",
          color: "white",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const table = document.getElementById("taskTable");
  table.innerHTML = "";
  tasks.forEach((task, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${task.description}</td>
          <td>${task.status}</td>
          <td>${task.date}</td>
          <td>
            <button class="edit" onclick="editTask(${index})"><i class="fa-solid fa-pen"></i></button>
            <button class="delete" onclick="deleteTask(${index})"><i class="fa-solid fa-trash"></i></button>
          </td>
        `;
    table.appendChild(row);
  });
}

function addTask() {
  const desc = document.getElementById("taskInput").value.trim();
  const status = document.getElementById("statusInput").value;
  if (desc === "") return alert("Enter a task!");

  const task = {
    description: desc,
    status: status,
    date: new Date().toLocaleDateString(),
  };

  tasks.push(task);
  saveTasks();
  renderTasks();
  document.getElementById("taskInput").value = "";
}

function editTask(index) {
  const newDesc = prompt("Edit task:", tasks[index].description);
  if (newDesc !== null && newDesc.trim() !== "") {
    tasks[index].description = newDesc.trim();
    saveTasks();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

renderTasks();

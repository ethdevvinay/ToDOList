document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var taskInput = document.getElementById("taskInput");
    var prioritySelect = document.getElementById("prioritySelect");
  
    var task = taskInput.value.trim();
    var priority = prioritySelect.value;
  
    if (task !== "") {
      addTask(task, priority);
      taskInput.value = ""; // Clear input field
    }
  });
  
  function addTask(task, priority) {
    var tasksContainer = document.getElementById("tasksContainer");
  
    var taskElement = document.createElement("div");
    taskElement.className = "task priority-" + priority;
  
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      taskElement.classList.toggle("completed", checkbox.checked);
    });
  
    var label = document.createElement("label");
    label.textContent = task;
  
    taskElement.appendChild(checkbox);
    taskElement.appendChild(label);
    tasksContainer.appendChild(taskElement);
  }
  
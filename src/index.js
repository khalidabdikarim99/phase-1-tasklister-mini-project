document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("create-task-form"); 
  const taskInput = document.getElementById("new-task-description"); 
  const tasksList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); 

      const taskText = taskInput.value.trim(); 
      if (taskText !== "") {
          const listItem = document.createElement("li"); 
          listItem.textContent = taskText; 
          tasksList.appendChild(listItem); 

          taskInput.value = ""; 
      }
  });
});

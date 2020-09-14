document.addEventListener("DOMContentLoaded", () => {
  let inputField = document.getElementById("new-task-description")
  let taskForm = document.getElementById("create-task-form")
  let list = document.getElementById("tasks")
  
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let taskItem = document.createElement("li")
    taskItem.innerText = inputField.value 
    list.append(taskItem)
  })


});

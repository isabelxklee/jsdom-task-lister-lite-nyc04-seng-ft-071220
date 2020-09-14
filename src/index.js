document.addEventListener("DOMContentLoaded", () => {
  let inputField = document.getElementById("new-task-description")
  let taskForm = document.getElementById("create-task-form")
  let list = document.getElementById("tasks")
  
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let taskItem = document.createElement("li")
    taskItem.innerText = inputField.value
    let deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    taskItem.append(deleteButton)
    list.append(taskItem)

    deleteButton.addEventListener("click", () => {
      taskItem.remove()
    })
  })


});

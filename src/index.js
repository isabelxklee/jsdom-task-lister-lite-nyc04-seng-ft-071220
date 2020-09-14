document.addEventListener("DOMContentLoaded", () => {
  let newTask = document.getElementById("new-task-description")
  let newUser = document.getElementById("new-user")
  let taskForm = document.getElementById("create-task-form")
  let unorderedList = document.getElementById("tasks")
  
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let taskItem = document.createElement("li")
    taskItem.innerText = `"${newTask.value}" by ${newUser.value}`

    let deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"

    let lineBreak = document.createElement("br")

    taskItem.append(lineBreak, deleteButton)
    unorderedList.append(taskItem)

    deleteButton.addEventListener("click", () => {
      taskItem.remove()
    })
  })

})
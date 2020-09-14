let taskID = 1
let userID = 1

document.addEventListener("DOMContentLoaded", () => {
  let newTask = document.getElementById("new-task-description")
  let newUser = document.getElementById("new-user")
  let editTask = document.getElementById("edit-task")
  let editUser = document.getElementById("edit-user")
  let newTaskForm = document.getElementById("create-task-form")
  let editTaskForm = document.getElementById("edit-task-form")
  let unorderedList = document.getElementById("tasks")
  
  newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let newTaskContainer = document.createElement("div")

    let taskInfo = document.createElement("li")
    taskInfo.innerText = newTask.value
    taskInfo.id = `task-${taskID ++}`

    let userInfo = document.createElement("li")
    userInfo.innerText = newUser.value
    userInfo.id = `user-${userID ++}`

    let deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"

    let editButton = document.createElement("button")
    editButton.innerText = "Edit"

    let lineBreak = document.createElement("br")

    taskInfo.append(lineBreak)
    newTaskContainer.append(taskInfo, userInfo, editButton, deleteButton)
    unorderedList.append(newTaskContainer)

    newTaskForm.reset()

    deleteButton.addEventListener("click", () => {
      newTaskContainer.remove()
    })

    editButton.addEventListener("click", () => {
      editTask.value = taskInfo.innerText
      editUser.value = userInfo.innerText

      let currentTaskID = taskInfo.id
      let currentUserID = userInfo.id
      
      console.log(currentTaskID)
      console.log(currentUserID)

      editTaskForm.addEventListener("submit", (event) => {
        event.preventDefault()

        console.log(currentTaskID)
        console.log(currentUserID)
        
        // taskInfo.innerText = editTask.value
        // userInfo.innerText = editUser.value
      })
    })
  })
})
let globalID = 0

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
    newTaskContainer.id = `${globalID}`

    let taskInfo = document.createElement("li")
    taskInfo.innerText = newTask.value
    taskInfo.id = `task-${globalID}`

    let userInfo = document.createElement("li")
    userInfo.innerText = newUser.value
    userInfo.id = `user-${globalID}`

    let deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"

    let editButton = document.createElement("button")
    editButton.innerText = "Edit"
    editButton.id = `${globalID ++}`

    let lineBreak = document.createElement("br")

    taskInfo.append(lineBreak)
    newTaskContainer.append(taskInfo, userInfo, editButton, deleteButton)
    unorderedList.append(newTaskContainer)

    newTaskForm.reset()

    deleteButton.addEventListener("click", () => {
      newTaskContainer.remove()
    })

    editButton.addEventListener("click", (event) => {
      selectedID = editButton.id

      selectedTask = document.getElementById(`task-${selectedID}`)
      selectedUser = document.getElementById(`user-${selectedID}`)

      editTask.value = selectedTask.innerText
      editUser.value = selectedUser.innerText
    })
  })

  editTaskForm.addEventListener("submit", (event) => {
    event.preventDefault()

    selectedTask = document.getElementById(`task-${selectedID}`)
    selectedUser = document.getElementById(`user-${selectedID}`)

    selectedTask.innerText = editTask.value
    selectedUser.innerText = editUser.value
  })
})
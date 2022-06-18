document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let inputForm = document.getElementById("create-task-form")
  inputForm.addEventListener('submit', createNovelTask);
});
const createNovelTask = function (event) {
event.preventDefault();
let novelTask =document.createElement('li');
let novelTaskDescription = document.getElementById("new-task-description");
let newTaskList = document.getElementById("tasks")
novelTask.innerText = novelTaskDescription.value;
appendNovelTask(novelTask);
event.target.reset()

};

const appendNovelTask =(task) => {
  document.getElementById("tasks").appendChild(task);
};






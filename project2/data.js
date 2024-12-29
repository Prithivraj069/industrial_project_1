
let BIN_ID = "6704a53de41b4d34e43ed770";
let BASE_API_URL = "https://api.jsonbin.io/v3";

async function loadData() {
    let response = await axios.get(`${BASE_API_URL}/b/${BIN_ID}/latest`);
    console.log("response.data =", response.data.record);
    let data = response.data;
    return data.record;
    
}

async function saveData(task) {
  let response = await axios.put(`${BASE_API_URL}/b/${BIN_ID}`, task);
  return response.data;
}

 async function addTask(todo, name, location, material, quantity, days) {
  let todoList = {
    "id": todo.length + 1,
    "name": name,
    "location": location,
    "material": material,
    "quantity": quantity,
    "days": days,
  };
   todo.push(todoList);
 
}

function updateTask(taskList, taskId, newTaskName, newLocation, newMaterial,newQuantity,newDdays) {
 
  let editIndex = taskList.findIndex(function(task){
        return task.id == taskId;
  });
  
console.log("index",editIndex);
  // 2. do the replacement
  // make sure index is no null, undefined or 0 etc.
  if (editIndex) {
      taskList[editIndex] = {
    "id": taskId,
    "name": newTaskName,
    "location": newLocation,
    "material": newMaterial,
    "quantity": newQuantity,
    "days": newDdays,
      }
  } else {
    alert("List is not found");
  }
}

function deleteTask(tasks, taskIdToDelete) {

  // 1. find the index of the task that I want to delete
  let indexToDelete = tasks.findIndex(function(task){
      return task.id == taskIdToDelete;
  })

  // 2. delete the task from the array
  if(indexToDelete != null) {
    tasks.splice(indexToDelete, 1);
  } else {
    alert("Deleting Data is not found in a list")
  } 

}

function updateTaskDone(tasks, taskId) {
  let index = tasks.findIndex(function(t){
      return t.id == taskId
  });

  // if the the task is already done, check it as not done
  // if (tasks[index].done) {
  //     tasks[index].done = false;
  // } else {
  //     tasks[index].done = true;
  // }

  // or we can just use the ! operator to invert
  tasks[index].done = !tasks[index].done;
}
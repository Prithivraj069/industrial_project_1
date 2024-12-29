
let data = [];

window.addEventListener("DOMContentLoaded", async function () {
     data = await loadData();
     showData(data.customerData);
    //  renderCustomerDetails(data.customerData);
    createNewCustomer(data.customerData);

    this.document.querySelector("#save-btn").addEventListener('click', function (){
        saveData(data);
    })
  //   this.document.querySelector("#saveBtn2").addEventListener('click', function (){
  //     saveData(data);
  // })
});

async function showData(todoData) {
    const tbl = document.querySelector("#table");
  const tblBody = document.querySelector("#tbody");
   tblBody.innerHTML = "";

  for (let i = 0; i < todoData.length; i++) {
    const row = document.createElement("tr");
    //  const cell = document.createElement("td");
    row.innerHTML = `
        <td>${todoData[i].name}</td>
        <td>${todoData[i].location}</td>
        <td>${todoData[i].material}</td>
        <td>${todoData[i].quantity}</td>
        <td>${todoData[i].days}</td>
        <td><button type="button" class="btn btn-dark" id="edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button></td>
         <td><button type="button" class="btn btn-danger" id="delete-btn">Delete</button></td>
    `;
    tblBody.appendChild(row);

    // edit button to allow us to edit the exisiting data from database
    let editBtn = row.querySelector("#edit-btn");
    editBtn.addEventListener('click', function () {
      let newTaskName = document.querySelector("#newName");
      newTaskName.value = todoData[i].name;
      let newLocation = document.querySelector("#newLocation");
       newLocation.value =  todoData[i].location;
       let newMaterial = document.querySelector("#newMaterial");
         newMaterial.value =  todoData[i].material;
        let newQuantity = document.querySelector("#newQuantity"); 
         newQuantity.value = todoData[i].quantity;
         let newDays = document.querySelector("#newDays");
         newDays.value = todoData[i].days;

         console.log(data.customerData, todoData[i].id, newTaskName.value, newLocation.value, newMaterial.value, newQuantity.value, newDays.value);
       
        document.querySelector("#saveBtn2").addEventListener('click', function (){
          console.log("this is save button");
          updateTask(data.customerData, todoData[i].id, newTaskName.value, newLocation.value, newMaterial.value, newQuantity.value, newDays.value);
          saveData(data);
          showData(todoData);
      })
         showData(todoData);
    })

    // this is delete function for deleting customer data
    let deleteBtn = row.querySelector("#delete-btn");
    deleteBtn.addEventListener('click', function() {
     
      const confirmation = Swal.fire("Do you want to delete the task: " + todoData[i].name + "?");
      if (confirmation) {
          deleteTask(data.customerData,  todoData[i].id);
          showData(todoData);
      }
      saveData(data);
  })

   }

   tbl.appendChild(tblBody);   
 }

// async function renderCustomerDetails(todo) {
//   let unorderList = document.querySelector("#showCustomerData");
//   unorderList.innerHTML = "";

//   for (let d of todo) {
//     let liElement = document.createElement("li");
   
//     liElement.innerHTML = `
//             ${d.name} ${d.location} ${d.material} ${d.quantity} ${d.days}
//             <input type="checkbox" class="checkbox"/>
//         <button type="button" class=" edit btn btn-dark">Edit</button>
//         <button type="button" class="delete btn btn-danger">Delete</button>
//         `;

//   unorderList.appendChild(liElement);

//   }
// }

// createNewCustomerData() function is used to create new data and show on

//create new task

function createNewCustomer(data) {

  let createButton = document.querySelector("#button");

  createButton.addEventListener("click",  function () {

    let nameInput = document.querySelector("#name").value;
    let locationInput = document.querySelector("#location").value;
    let materialInput = document.querySelector("#material").value;
    let quantityInput = document.querySelector("#quantity").value;
    let daysInput = document.querySelector("#days").value;

   addTask(data, nameInput, locationInput, materialInput, quantityInput, daysInput);
   showData(data);
   let allInputs = document.querySelectorAll('input');
   allInputs.forEach(singleInput => singleInput.value = '');
  });
}













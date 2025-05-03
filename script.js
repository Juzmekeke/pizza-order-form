// submit button . inner html 

// event.preventDefault()
//  function submit (event)
// submitBtnElement. addEventListener(submit)

// append search for table row

// id for table

// HAve the output from the input come up as a new row on table
// dynamically

// create element tr td for output info 

// createlement(tr)
// appendchild(td)
// td = output from input

// Give <table id= >
// Let row = document.createElement(“tr”)
// Let data = document.createElement(“td”)


// const tableRowElement = document.createElement("tr")
// const tableDataElement = document.createElement("td")

// const 

// const inputElement = document.getElementById("nameInput")
// const inputElement = document.getElementById("sizeInput")
// const inputElement = document.getElementById("checkboxPep")
// const inputElement = document.getElementById("checkboxHam")
// const inputElement = document.getElementById("checkboxBeef")
// const inputElement = document.getElementById("checkboxPepper")
// const inputElement = document.getElementById("checkboxOlives")
// const inputElement = document.getElementById("checkboxShrimp")
// const inputElement = document.getElementById("checkboxCrawfish")
// const inputElement = document.getElementById("deliveryIstructions")
// tableRowElement.innerHTML = 
// tableDataElement.innerHTML =

// tableElement.appendchild(tableRowElement)
// tableRowElement.appendchild(tableDataElement)

// output = td
// output= value
// button.addEventListener onclick

const form = document.getElementById("form")
const tableElement = document.getElementById("table")

const tableRowElement = document.createElement("tr")
const nameCell = document.createElement("td")
const sizeCell = document.createElement("td")
const toppingsCell = document.createElement("td")




form.addEventListener("submit",function(event){
    // submitButton.addEventListener('click', function() {
    //     form.submit();
    //   });
event.preventDefault();

nameCell.innerHTML = nameInput.value
sizeCell.innerHTML = sizeInput.value

tableElement.appendChild(tableRowElement)
tableRowElement.appendChild(nameCell)
tableRowElement.appendChild(sizeCell)
tableRowElement.appendChild(toppingsCell)


    //   onclick sumbit form with information and add information to appended row on table
});

// function selectAllCheckboxes(checked) {
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     checkboxes.forEach(checkbox => {
//       checkbox.checked = pizzaToppingsCell.innerHTML += inputElement.value;)


// checkboxes.forEach(checkbox => {
//             checkbox.checked = toppingsCell.innerHTML += inputElement.value;
//             const pizzaToppings = document.querySelectorAll('input[type="checkbox"]')
//           });
// for (let inputElement of toppings) {
//         if (inputElement.checked) toppingsCell.innerHTML += inputElement.value


// toppings need to be array
//  pizzaToppingsCell.innerHTML =  

// });
//   console.log(e.target)

 
//   document.querySelectorAll('input[type="checkbox"]')
  
//   function selectAllCheckboxes(checked) {
//       const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//       checkboxes.forEach(checkbox => {
//         checkbox.checked = pizzaToppingsCell.innerHTML += inputElement.value;
//       });
// for (let inputElement of toppings) {
//     if (inputElement.checked) toppingsCell.innerHTML =+ inputElement.value
// }
// })
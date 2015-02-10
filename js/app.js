// Problem: User interaction doesn't provide desired results
// Solution: Add interactivity so the user can manage daily tasks.
var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); // completed- tasks
// New Task List Item
var createNewTaskElement = function(taskString){
  // Create List Item
  var listItem = document.createElement("li");

  // input (checkbox)
  var checkBox = document.createElement("input"); //checkbox
    // label 
  var label = document.createElement("label");
    // input (text)
  var editInput = document.createElement("input"); //text
    // button.edit
  var editButton = document.createElement("button");
    // button.delete
  var deleteButton = document.createElement("button");

    // Each element needs modifying
    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    label.innerText = taskString; 

    // Each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  
    return listItem;
}

// Add a new task
var addTask = function(){
  console.log("Add task...");
  //Create a new list item withthe text from #new-task:
  var listItem = createNewTaskElement(taskInput.value);
  // Append listItem to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  // Clear input
  taskInput.value = " ";
  }


// Edit an existing task
var editTask = function(){
  console.log("Edit task...");
  var listItem = this.parentNode;

  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");

  var containsClass = listItem.classList.contains("editMode");
    // if the class of the parent is .editMode
    if(containsClass){
      // switch .editMode
      // label text become the input's value
      label.innerText = editInput.value;
    }else{
      // switch to .editMode
      // input value becomes the label's text
      editInput.value = label.innerText;
    }  
  // Toggle .EditMode on the listItem
  listItem.classList.toggle("editMode");
}


// Delete an existing task
var deleteTask = function(){
  console.log("Delete task...");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
  // Remove the Parent list item from the ul
  ul.removeChild(listItem);

}


// Mark a task as complete
var taskCompleted = function(){
  console.log("Add task...");
    // append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}


// Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
   // append the task list item to the #incomplete-tasks
   var listItem = this.parentNode;
   incompleteTasksHolder.appendChild(listItem);
   bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
  console.log("Bind List item events");
  // select taskListItem's children
  var checkbox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
    
    // bind editTask to edit button
    editButton.onclick = editTask;
    // bind deleteTask to delete button
    deleteButton.onclick = deleteTask;
    // bind taskCompleted to checkbox
    checkbox.onchange = checkBoxEventHandler;
}


//set  the click handler to the addTask function
addButton.onclick = addTask;

// cycle over the incompleteTaskHolder ul list items
for(var i=0; i < incompleteTasksHolder.children.length; i++){
    // bind events to list item's children (taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}
 
    

// cycle over the completedTaskHolder ul list items
  for(var i=0; i < completedTasksHolder.children.length; i++){
    // bind events to list item's children (taskIncomplete)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
 


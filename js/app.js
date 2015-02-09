// Problem: User interaction doesn't provide desired results
// Solution: Add interactivity so the user can manage daily tasks.
var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); // completed- tasks

// Add a new task
var addTask = function(){
  console.log("Add task...");
  // When the button is pressed
  //Create a new list item withthe text from #new-task:
    // input (checkbox)
    // label 
    // input (text)
    // button.edit
    // button.delete
    // Each elements, needs modified and appended
  }


// Edit an existing task
var editTask = function(){
  console.log("Edit task...");
  // When the Edit button is pressed
    // if the class of the parent is .editMode
      // switch .editMode
      // label text become the input's value
    // else
      // switch to .editMode
      // input value becomes the label's text
  // Toggle .EditMode on the parent
}


// Delete an existing task
var deleteTask = function(){
  console.log("Delete task...");
  // when the delete button is presed
    // Remove the Parent list item from the ul
}


// Mark a task as complete
var taskCompleted = function(){
  console.log("Add task...");
  // When the checkbox is checked
    // append the task list item to the #completed-tasks
}


// Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
  // When the checkbox is unchecked
    // append the task list item to the #incomplete-tasks
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
    deleteButton.onclick = deleteButton;
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
    // bind events to list item's children (taskCompleted)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
 
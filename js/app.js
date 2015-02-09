// Problem: User interaction doesn't provide desired results
// Solution: Add interactivity so the user can manage daily tasks.
var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); // completed- tasks

// Add a new task
var addTask = function(){
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
  // when the delete button is presed
    // Remove the Parent list item from the ul
}


// Mark a task as complete
var taskCompleted = function(){
  // When the checkbox is checked
    // append the task list item to the #completed-tasks
}


// Mark a task as incomplete
var taskIncomplete = function() {
  // When the checkbox is unchecked
    // append the task list item to the #incomplete-tasks
}

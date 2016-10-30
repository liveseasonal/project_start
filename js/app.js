//Problem is user interaction doesnt provide desired results//
// Add user activaity so user can do basic tasks//
var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTaskHolder = document.getElementById("completed-tasks"); //completed-tasks
// Add a new task  
var addTask = function() {
  console.log("Add Task......")
  //When the button is pressed 
  //Create a new list itemwith the text from new task
    //Input checkbox
    //Label
    //Input(text)
    //button.edit
    //button.delete
    // Each elements, needs modified and appended
}    

// Edit an existing task
var editTask = function() {
  console.log("Edit Task......")
  //When the edit button is pressed 
    //if the class of the parent is edit mode
      //Switch back from edit mode
      //Make the label text become the inputs value
    //else
      //Switch to editmode
      //input value becomes labels text

    //Toggle editMode on the parent  
}      

//Delete an existing task
var deleteTask = function() {
  console.log("Delete Task......")
  ////When the delete button is pressed
    //Remove parent list item from the ol 
}
//Mark a task as complaet
var taskCompleted = function() {
  console.log("Task Complete......")
  //When the check box is checked
    //Append the task list item to the complete tasks
}


//Mark a task as incomplete
var taskinComplete = function() {
  console.log("Task Incomplete......")
  //When the check box is unchecked
    //Append the task list item to the incomplete tasks
}






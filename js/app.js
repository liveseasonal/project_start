//Problem is user interaction doesnt provide desired results//
// Add user activaity so user can do basic tasks//
var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
  //Create List Item
  var listItem = document.createElement("li");

  //input (checkbox)
  var checkBox = document.createElement("input"); // checkbox
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input"); // text
  //button.edit
  var editButton = document.createElement("button");
  //button.delete
  var deleteButton = document.createElement("button");

  //Each element needs modifying

   //Each element needs modifying
  
  checkBox.type = "checkbox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;

  //Each item needs appending
  //Input checkbox
    //Label
    //Input(text)
    //button.edit
    //button.delete



  //Each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}




// Add a new task  
var addTask = function() {
  console.log("Add Task......")
  //When the button is pressed 
  //Create a new list itemwith the text from new task

   //Create a new list item with the text from #new-task:
  var listItem = createNewTaskElement(taskInput.value);
  // var listItem = createNewTaskElement("Some new text");
  //Append listItem to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

    
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
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  
  //Remove the parent list item from the ul
  ul.removeChild(listItem);  
}
//Mark a task as complaet
var taskCompleted = function() {
  console.log("Task Complete......")
  //When the check box is checked
    //Append the task list item to the complete tasks
  var listItem = this.parentNode;
  // console.log(parentNode)
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  
}


//Mark a task as incomplete
var taskinComplete = function() {
  console.log("Task Incomplete......")
  //When the check box is unchecked
    //Append the task list item to the incomplete tasks
  var listItem = this.parentNode;
  // console.log(parentNode)
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskinComplete);

}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  //select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

   //bind editTask to edit button
  editButton.onclick = editTask;
  
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  
  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;

  }


//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
// addButton.addEventListener("click", ajaxRequest);

//cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}  






var todos = []

function init()
{
  var leftPaneDiv = document.createElement("div");
  var rightPaneDiv = document.createElement("div");

  // best practice to set attributes
  leftPaneDiv.setAttribute("id","leftDiv");
  
  var heading = document.createElement("h1");
  heading.innerHTML = "Task List";
  leftPaneDiv.appendChild(heading);

  var subHeading = document.createElement("h3");
  subHeading.innerHTML = "add task by typing in the right and press enter, it should show task in list below";
  leftPaneDiv.appendChild(subHeading);


  // bad practice to set attributes
  // leftPaneDiv.id = "abcd"
  rightPaneDiv.setAttribute("id","rightDiv");

  document.body.appendChild(leftPaneDiv);
  document.body.appendChild(rightPaneDiv);

  var inputTodo = document.createElement("textarea");

  //inputTodo.placeholder = "enter something";
  inputTodo.setAttribute("placeholder","its the right eay to set attributes")
  inputTodo.setAttribute("class","textbox")
  inputTodo.setAttribute("id","todoBox")
  rightPaneDiv.appendChild(inputTodo);

  inputTodo.addEventListener("keydown", eventHnadler );


}


function eventHnadler( event )
{


  var keyCode = event.code;
  var todoBox = document.getElementById("todoBox");

  var value = todoBox.value;

  if(keyCode === "Enter" && value !== "")
  {
    event.preventDefault();
    var container = document.createElement("div");
    var taskHeading = document.createElement("p");
    var readButton = document.createElement("button");
    var deleteButton = document.createElement("button");


    container.appendChild(taskHeading);
    container.appendChild(readButton);
    container.appendChild(deleteButton);

    container.setAttribute("class","todoContainer")

    readButton.innerHTML = "read";
    deleteButton.innerHTML = "delete"

    

    taskHeading.innerHTML = value;

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos) )

    var leftDiv = document.getElementById("leftDiv");
    leftDiv.appendChild(container);

    todoBox.value = "";

  }
}


init();


let storedTodos = localStorage.getItem("todos");

if(storedTodos !== null)
{
  todos = JSON.parse(storedTodos);
}

todos.forEach(function(value)
{

    var container = document.createElement("div");
    var taskHeading = document.createElement("p");
    var readButton = document.createElement("button");
    var deleteButton = document.createElement("button");


    container.appendChild(taskHeading);
    container.appendChild(readButton);
    container.appendChild(deleteButton);

    container.setAttribute("class","todoContainer")

    readButton.innerHTML = "read";
    deleteButton.innerHTML = "delete"

    taskHeading.innerHTML = value;

    var leftDiv = document.getElementById("leftDiv");
    leftDiv.appendChild(container);

})
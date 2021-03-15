const titleNameTextBox = document.getElementById("title");
const priorityNameTextBox = document.getElementById("priority");
const todoBtn = document.getElementById("todoBtn");
const contentDiv = document.getElementById("content");
const todosUL = document.getElementById("todosUL");

todoBtn.addEventListener("click", function () {
  let title = titleNameTextBox.value;
  let priority = priorityNameTextBox.value;
  fetch("http://localhost:3000/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      priority: priority,
      date: new Date(),
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .then(fetchTodos());
});

function fetchTodos() {
  fetch("http://localhost:3000/todos")
    .then((response) => response.json())
    .then((data) => {
      data.map((item) => {
        let todo = `<li>${item.title}</li>
                    <li>${item.priority}</li>
                    <li>${item.date}</li>    
        `;
        todosUL.insertAdjacentHTML('beforeend', todo);
      });
    });
}

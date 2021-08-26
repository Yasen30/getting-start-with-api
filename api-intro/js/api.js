// data api
const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
};
//user api
const loadUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayUser(data));
};
//post api
const loadPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
const displayUser = (data) => {
  const ul = document.getElementById("users");
  for (const user of data) {
    const { name, email } = user;
    console.log(name);
    const li = document.createElement("li");
    li.innerText = `name : ${name}  email : ${email}`;
    ul.appendChild(li);
  }
};

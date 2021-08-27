const loadUsers = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
};
loadUsers();
const displayUsers = (buddies) => {
  const users = buddies.results;
  const usersDiv = document.getElementById("users");
  for (const user of users) {
    const p = document.createElement("p");
    p.innerHTML = `name : ${user.name.title} ${user.name.first} ${user.name.last}  
     email : ${user.email}
    `;
    usersDiv.appendChild(p);
    console.log(user);
  }
};

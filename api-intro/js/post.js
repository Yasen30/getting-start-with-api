const loadPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
};
loadPost();
const displayPost = (posts) => {
  const postsContainer = document.getElementById("posts-container");
  for (const post of posts) {
    const { title, body } = post;
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
    <h3>${title}</h3>
    <p>${body}</p>
    `;
    postsContainer.appendChild(div);
  }
};
const addAPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    body: JSON.stringify({
      title: "my new Post",
      body: "This is my new posts",
      userID: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

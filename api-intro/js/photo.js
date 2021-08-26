const loadImages = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => displayImages(data));
};

loadImages();

const displayImages = (images) => {
  const imagesContainer = document.getElementById("images-container");
  for (const image of images) {
    const { url, id } = image;
    const div = document.createElement("div");
    div.innerHTML = `
    <img class="me-5 mt-5 mb-2 img" src="${url}" />
    <h2>id : ${id}</h2>
    `;
    imagesContainer.appendChild(div);
    // img.classList.add("img", "m-5");
    // img.src = image.url;
    // imagesContainer.appendChild(img);
    // console.log(img.src);
  }
};

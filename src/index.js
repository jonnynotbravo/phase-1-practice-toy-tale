let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });


});

const toyCollection = document.querySelector('#toy-collection');




function getImage() {

  fetch(' http://localhost:3000/toys')
  .then(response => response.json())
   .then(data => renderImages(data));

}

function renderImages(images) {

   images.forEach(elem => {
    const card = document.createElement('div');
    card.className = 'card';
    
    const img = document.createElement('img');
    img.src = elem.image;
   
    const toyName = document.createElement('h2');
    toyName.innerText = elem.name;
    
    const numLikes = document.createElement('p');
    numLikes.innerText = elem.likes + ' Likes';

    const btn = document.createElement('button');
    btn.className = 'like-btn';
    btn.id = `${elem.id}`
    btn.innerText = 'Like ❤️';
    btn.addEventListener('click', () => {
      elem.likes ++
    })
    

    //card.appendChild(img);

    // toyCollection.append(img);
    
    

 })

}

getImage();
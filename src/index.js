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
    const img = document.createElement('img');
    img.src = elem.image;
    toyCollection.append(img);
    
    

 })

}

getImage();
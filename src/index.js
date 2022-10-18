let addToy = false;

//document.addEventListener('DOMContentLoaded', () => {

const addBtn = document.querySelector('#new-toy-btn');
const toyFormContainer = document.querySelector('.container');
addBtn.addEventListener('click', () => {
	// hide & seek with the form
	addToy = !addToy;
	if (addToy) {
		toyFormContainer.style.display = 'block';
	} else {
		toyFormContainer.style.display = 'none';
	}
});

//});

const toyCollection = document.querySelector('#toy-collection');

function getImage() {
	fetch(' http://localhost:3000/toys')
		.then((response) => response.json())
		.then((data) => renderImages(data));
}

function renderImages(images) {
	images.forEach((elem) => {
		const card = document.createElement('div');
		card.className = 'card';

    const toyName = document.createElement('h2');
		toyName.textContent = elem.name;

		const img = document.createElement('img');
		img.className = 'toy-avatar';
		img.src = elem.image;

		const numLikes = document.createElement('p');
		numLikes.innerText = elem.likes + ' Likes';

		const btn = document.createElement('button');
		btn.className = 'like-btn';
		btn.id = `${elem.id}`;
		btn.innerText = 'Like ❤️';

		btn.addEventListener('click', () => {
			numLikes.innerText = ++elem.likes + ' Likes';
		});
		//need to append toyName, img, numLikes, btn to div card
    //if you use .append you can append all in one go, appendChild is done one by one
		//then need to append div card to toyCollection
		card.append(toyName, img, numLikes, btn);
		// card.appendChild(toyName);
		// card.appendChild(numLikes);
		// card.appendChild(btn);
		toyCollection.appendChild(card);
	});
}

getImage();

// TEST COMMENT FOR JONNY

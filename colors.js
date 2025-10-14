const colorsArray = [
	"https://i.pinimg.com/736x/d9/df/f1/d9dff11a4f969a8da579fa8e6c2a8dc9.jpg",
	"https://i.pinimg.com/736x/b3/4f/f4/b34ff40267b6b8e88c9dfc7a98da8be1.jpg",
	"https://i.pinimg.com/736x/f7/f5/25/f7f5250f60588c2da80eef94c1ef096a.jpg",
	"graphs4web/plots-04.svg",
	"graphs4web/plots-05.svg",
	"graphs4web/plots-06.svg",
	
  
];

const image = document.querySelector("img");
const colorsbutton = document.querySelector(".colors");

window.onload = () => generateRandomPicture(colorsArray);

colorsbutton.addEventListener("click", () => generateRandomPicture(colorsArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}
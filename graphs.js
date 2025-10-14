const imageArray = [
	"graphs4web/plots-01.svg",
	"graphs4web/plots-02.svg",
	"graphs4web/plots-03.svg",
	"graphs4web/plots-04.svg",
	"graphs4web/plots-05.svg",
	"graphs4web/plots-06.svg",
	"graphs4web/plots-07.svg",
	"graphs4web/plots-08.svg",
	"graphs4web/plots-09.svg",
	"graphs4web/plots-10.svg",
	"graphs4web/plots-11.svg",
	"graphs4web/plots-12.svg",
	"graphs4web/plots-13.svg",
	"graphs4web/plots-14.svg",
	"graphs4web/plots-15.svg",
	"graphs4web/plots-16.svg",
    "graphs4web/plots-17.svg",
    "graphs4web/plots-18.svg",
    "graphs4web/Untitled-1-01.svg",
    "graphs4web/Untitled-1-02.svg",
    "graphs4web/Untitled-1-03.svg",
    "graphs4web/Untitled-1-04.svg",
    "graphs4web/Untitled-1-05.svg",
    "graphs4web/Untitled-1-06.svg",
    "graphs4web/Untitled-1-07.svg",
    "graphs4web/Untitled-1-08.svg",
    "graphs4web/Untitled-1-09.svg",
    "graphs4web/Untitled-1-10.svg",
    "graphs4web/Untitled-1-11.svg",
    "graphs4web/Untitled-1-12.svg",
    "graphs4web/Untitled-1-13.svg",
    "graphs4web/Untitled-1-14.svg",
    "graphs4web/Untitled-1-15.svg",
    "graphs4web/Untitled-1-16.svg",
    "graphs4web/Untitled-1-17.svg",
    "graphs4web/Untitled-1-18.svg",
];

const image = document.querySelector("img");
const button = document.querySelector(".graphs");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}
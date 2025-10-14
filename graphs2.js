// Define image arrays for each category
const imageCategories = {
    graphs: [
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
    ],
    colors: [
        "https://i.pinimg.com/736x/d9/df/f1/d9dff11a4f969a8da579fa8e6c2a8dc9.jpg",
        "https://i.pinimg.com/736x/b3/4f/f4/b34ff40267b6b8e88c9dfc7a98da8be1.jpg",
        "https://i.pinimg.com/736x/f7/f5/25/f7f5250f60588c2da80eef94c1ef096a.jpg",
        "https://i.pinimg.com/736x/f9/e6/5e/f9e65e3af23466b3922af97271530e7d.jpg",
        "https://i.pinimg.com/736x/f5/bb/16/f5bb160e2c1289852a0f204b7c01054a.jpg",
        "https://i.pinimg.com/736x/13/86/03/138603a81884cc5e01638a9e4bfbd8da.jpg",
        "https://i.pinimg.com/736x/3c/4b/d2/3c4bd298dcb60cb2658a914f203726c1.jpg",
        "https://i.pinimg.com/736x/78/be/3a/78be3a053ea9eea41a187d0d467449f1.jpg",
        "https://i.pinimg.com/736x/b9/3a/47/b93a47f90c0f7b260b6be8abfad761b1.jpg",
        "https://i.pinimg.com/736x/53/42/4f/53424f4173b84e677663acc9e3123e21.jpg",
        "https://i.pinimg.com/736x/69/ed/1a/69ed1ab24a3b7bdbdf261362ec13cb3e.jpg",
        "https://i.pinimg.com/736x/f7/42/f9/f742f946030eef163388b132e1e474d2.jpg",
        "https://i.pinimg.com/736x/79/64/62/79646299ba3516a6cfc96ab8807b60a3.jpg",
        "https://i.pinimg.com/736x/b4/60/f2/b460f2c2edb4115de2f313fe92712a9f.jpg",
        "https://i.pinimg.com/736x/53/18/4f/53184fb2ee206294e784ba2feb0c46db.jpg",
    ],

};

// Select DOM elements
const categorySelect = document.getElementById("category-select");
const generateButton = document.getElementById("generate-btn");
const imageElement = document.getElementById("random-image");

// Function to generate a random picture
function generateRandomPicture(category) {
    const images = imageCategories[category];
    if (images) {
        const randomIndex = Math.floor(Math.random() * images.length);
        imageElement.src = images[randomIndex];
    } else {
        console.error("Invalid category selected");
    }
}

// Add event listener to the "Generate" button
generateButton.addEventListener("click", () => {
    const selectedCategory = categorySelect.value; // Get the selected category
    generateRandomPicture(selectedCategory);
});
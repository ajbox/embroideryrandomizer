const colorArray = [
    "#f3e84e",
    "#d34c3d",
    "#663972",
    "#e4b0bd",
    "#8b2a5d",
    "#b789b5",
    "#b789b5",
    "#f1dfc4",
    "#2b623b",
    "#5d4a3f",
    "#21509a",
    "#21509a",
    "#f5f5f5",
    "#000000"
];

// Function to calculate luminance of a color
function getLuminance(hex) {
    // Remove the '#' if present
    hex = hex.replace("#", "");

    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    // Apply the sRGB luminance formula
    const a = [r, g, b].map((v) => {
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

// Function to determine text color based on luminance
function getTextColor(backgroundColor) {
    const luminance = getLuminance(backgroundColor);
    return luminance > 0.5 ? "#000000" : "#ffffff"; // Black text for light backgrounds, white text for dark
}

// Function to generate a random color and update the background and text color
function updateColors() {
    const randomColorIndex = Math.floor(Math.random() * colorArray.length);
    const backgroundColor = colorArray[randomColorIndex];
    const textColor = getTextColor(backgroundColor);

    // Update the background and text color
    $("body").css("background-color", backgroundColor);
    $("#text").css("color", textColor);
}

// Call the function on button click
$("#random").click(updateColors);

// Call the function on page load
updateColors();
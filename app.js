// Function to generate a random color
 generateRandomColor = onclick = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color of the box
changeColor = onclick = () => {
    let colorBox = document.getElementById('color-box');
    let randomColor = generateRandomColor();
    colorBox.style.backgroundColor = randomColor;
}

// Add event listener to the button
    document.getElementById('generate-btn').addEventListener('click', changeColor);


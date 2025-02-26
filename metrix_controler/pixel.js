//access the canvas element
const canvas = document.getElementById('mediaCanvas');

//a 2D rendering context, which is an object that provides methods and properties for drawing and manipulating images on the canvas.
const ctx = canvas.getContext('2d');

//load your image
const img = new Image();
img.src = 'image.jpg';
//onload event handler is defined to ensure that the subsequent code runs only after the image has fully loaded
img.onload = () => {
    // draws the loaded image onto the canvas. It stretches the image to fill the entire canvas area.
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    //process the pixel data of the drawn image
    processPixels();
};

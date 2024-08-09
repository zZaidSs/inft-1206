/**
 * Name: Muhammad zaid siddiqui
File: filename.html
Date: 09/08/2024
assignment-4 image gallery

 */


// Waits for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {

  // Array containing filenames of the images
  const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

  // Object mapping each image filename to its corresponding alt text
  const altTexts = {
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'Rock that looks like a wave',
    'pic3.jpg': 'Purple and white pansies',
    'pic4.jpg': 'Section of wall from a pharaoh’s tomb',
    'pic5.jpg': 'Large moth on a leaf'
  };

  // Selects the element with class 'thumb-bar' where the thumbnails will be added
  const thumbBar = document.querySelector('.thumb-bar');

  // Loop through each image filename
  imageFilenames.forEach((filename) => {
    // Create a new img element for each filename
    const newImage = document.createElement('img');
    
    // Set the src and alt attributes for the new image
    newImage.setAttribute('src', `images/${filename}`);
    newImage.setAttribute('alt', altTexts[filename]);
    
    // Append the new image to the thumb-bar element
    thumbBar.appendChild(newImage);

    // Add an event listener to the new image for click events
    newImage.addEventListener('click', () => {
      // Select the currently displayed image
      const displayedImage = document.querySelector('.displayed-img');
      
      // Update the displayed image's src and alt attributes to match the clicked thumbnail
      displayedImage.setAttribute('src', `images/${filename}`);
      displayedImage.setAttribute('alt', altTexts[filename]);
    });
  });

  // Selects the button element
  const btn = document.querySelector('button');
  
  // Selects the overlay element
  const overlay = document.querySelector('.overlay');

  // Add an event listener to the button for click events
  btn.addEventListener('click', () => {
    // Get the current class of the button (either 'dark' or 'light')
    const currentClass = btn.getAttribute('class');
    
    // If the button has the 'dark' class, switch to 'light' mode
    if (currentClass === 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Darken the overlay
    } else {
      // If the button has the 'light' class, switch to 'dark' mode
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Remove the dark overlay
    }
  });
});

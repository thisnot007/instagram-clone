// JavaScript code for making the Instagram Clone interactive

// Function to handle the like button click
function addLike() {
    const heartIcons = document.querySelectorAll('.heart span');
    heartIcons.forEach((heartIcon) => {
      heartIcon.addEventListener('click', () => {
        heartIcon.classList.toggle('liked');
      });
    });
  }
  
  // Call the addLike function to handle like button clicks
  addLike();
  
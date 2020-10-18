const menuToggle = document.querySelector(".toggle-img");
const linksContainer = document.querySelector(".links-container");

/***
 * `toggleMenu` function - Toggles the visibility of the menu when the toggle button (only visible on view widths below 768px) is clicked.
 */
function toggleMenu () {
  menuToggle.addEventListener("click", (event) => {
    console.log(event);
    if(linksContainer.style.transform != 'translateX(0%)') {
      menuToggle.style.transform = 'rotate(90deg)';
      linksContainer.style.transform = 'translateX(0%)';
    } else {
      menuToggle.style.transform = 'rotate(0deg)';
      linksContainer.style.transform = 'translateX(-100%)';
    }
  });
}
toggleMenu();
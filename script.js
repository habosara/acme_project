// Get the current page URL
const currentPageUrl = window.location.pathname;
console.log(currentPageUrl)

// Find all menu items
const menuItems = document.querySelectorAll('.menu-item');

// Loop through each menu item
menuItems.forEach(item => {
    // Compare the href of each menu item with the current page URL
    if (item.getAttribute('href') === currentPageUrl) {
        // If they match, add the 'active' class to the menu item
        item.classList.add('active');
    }
});
document.querySelectorAll('.action-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(`You clicked ${button.classList.contains('dislike') ? 'Dislike' : button.classList.contains('like') ? 'Like' : 'Star'}`);
    });
});
// Get the search icon
const searchIcon = document.querySelector('.navbar i:nth-child(4)');

// Get the search input element
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search...';
searchInput.classList.add('search-input');

// Insert the search input after the navbar
document.querySelector('.navbar').appendChild(searchInput);

// Toggle visibility of the search input on click
searchIcon.addEventListener('click', () => {
  searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
});

// Change color of search icon when cursor is on search input
searchInput.addEventListener('mouseover', () => {
  searchIcon.classList.add('search-hover');
});

searchInput.addEventListener('mouseout', () => {
  searchIcon.classList.remove('search-hover');
});

// Hide search input after typing something or pressing Enter
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchInput.blur(); // Remove focus from the input
    searchInput.style.display = 'none';
  }
});

// Hide search input when clicking outside of it
document.addEventListener('click', (e) => {
  if (!searchInput.contains(e.target) && e.target !== searchIcon) {
    searchInput.style.display = 'none';
  }
});

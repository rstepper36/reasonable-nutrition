// public/scripts.js

// Add event listener to delete forms
const deleteForms = document.querySelectorAll('.delete-form');
deleteForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    const confirmDelete = confirm('Are you sure you want to delete this post?');
    if (!confirmDelete) {
      event.preventDefault();
    }
  });
});

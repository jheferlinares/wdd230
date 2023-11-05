const form = document.getElementById('myForm');
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('password-confirm');
    const passwordError = document.getElementById('password-error');

    form.addEventListener('submit', function(event) {
      if (password.value !== passwordConfirm.value) {
        event.preventDefault();
        passwordError.textContent = 'Passwords do not match. Please try again.';
        password.value = '';
        passwordConfirm.value = '';
        password.focus();
      }
    });

    const pageRating = document.getElementById('page-rating');
    const output = document.querySelector('output[for="page-rating"]');
    pageRating.addEventListener('input', function() {
      output.textContent = pageRating.value;
    });
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // const height = parseInt(document.querySelector('#height').value);
    // const weight = parseInt(document.querySelector('#weight').value);
    // const result = document.querySelector('.result');

    // result.innerHTML = height;
    const height = document.querySelector('#height');
    console.log(height);
}) 
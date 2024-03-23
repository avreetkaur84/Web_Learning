// For search box
const searchBox = document.getElementById('search-box');
const categoryDropdown = document.getElementById('category');
const autoSuggestContainer = document.getElementById('auto-suggest');

searchBox.addEventListener('input', updateAutoSuggest);

function updateAutoSuggest() {
    const searchText = searchBox.value.toLowerCase();
    const selectedCategory = categoryDropdown.value;

    autoSuggestContainer.innerHTML = '';

    if (selectedCategory !== '') {
        let apiUrl = '';

        if (selectedCategory === 'jokes') {
            apiUrl = 'https://v2.jokeapi.dev/joke/Any?safe-mode';
        } else if (selectedCategory === 'quotes') {
            apiUrl = 'https://quote-garden.onrender.com/api/v3/quotes';
        } else if (selectedCategory === 'cat-facts') {
            apiUrl = 'https://cataas.com';
        } else if (selectedCategory === 'food-facts') {
            apiUrl = 'https://world.openfoodfacts.org/api/v0/product/737628064502.json';
        }
    }
}
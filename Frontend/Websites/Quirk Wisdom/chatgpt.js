// This part tells the computer which elements on the webpage we want to work with.
// We give them names like 'searchBox', 'categoryDropdown', and 'autoSuggestContainer'.
// It's like telling the computer what tools we'll use.
const searchBox = document.getElementById('search-box');
const categoryDropdown = document.getElementById('category');
const autoSuggestContainer = document.getElementById('auto-suggest');

// This part listens for when you type something in the search box.
// Whenever you type, it calls the 'updateAutoSuggest' function to help you find things.
searchBox.addEventListener('input', updateAutoSuggest);

// This is the function that helps you find things when you type.
function updateAutoSuggest() {
    // It remembers what you're looking for (search text) and which category you picked.
    const searchText = searchBox.value.toLowerCase();
    const selectedCategory = categoryDropdown.value;

    // Now, we'll clear any previous suggestions in case you change what you're typing.
    autoSuggestContainer.innerHTML = '';

    // If you picked a category, we'll get things from the right place to help you.
    if (selectedCategory !== '') {
        // We'll use special places on the internet (APIs) to get the right things.
        // Depending on the category, we'll use different places to find jokes, quotes, etc.
        let apiUrl = '';

        if (selectedCategory === 'jokes') {
            apiUrl = 'https://v2.jokeapi.dev/joke/Any?safe-mode';
        } else if (selectedCategory === 'quotes') {
            apiUrl = 'https://quote-garden.onrender.com/api/v3/quotes';
        } else if (selectedCategory === 'cat-facts') {
            apiUrl = 'https://cataas.com';  // Note: This is a placeholder, cat facts API URL might be different
        } else if (selectedCategory === 'food-facts') {
            apiUrl = 'https://world.openfoodfacts.org/api/v0/product/737628064502.json';  // Note: This is a placeholder, food facts API URL might be different
        }


        // If we know where to look, we'll get the stuff and show you suggestions.
        if (apiUrl !== '') {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // We'll find things that match what you're typing.
                    const matchingData = data.filter(item =>
                        item.toLowerCase().includes(searchText)
                    );

                    // If we found some matching things, we'll show them to you.
                    if (searchText !== '' && matchingData.length > 0) {
                        const suggestions = matchingData.map(item => `<div>${item}</div>`).join('');
                        autoSuggestContainer.innerHTML = suggestions;
                    }
                })
                .catch(error => {
                    console.error('Error fetching data from API:', error);
                });
        }
    }
}

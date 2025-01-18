const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

function showResults() {
    if (searchInput.value.trim().toLowerCase() === '또냥이') {
        results.style.display = 'block';
    }
}

searchButton.addEventListener('click', showResults);
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        showResults();
    }
});

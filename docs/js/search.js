document.getElementById('searchInput').addEventListener('keyup', function(e) {
    var searchTerm = e.target.value.toLowerCase();
    var allArticles = [...document.querySelectorAll('.article')]; // Asume que tus artículos tienen la clase 'article'
    var searchResults = allArticles.filter(article => {
    return article.textContent.toLowerCase().includes(searchTerm);
    });

    displayResults(searchResults); // Función para mostrar los resultados
});

function displayResults(results) {
    var resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Limpia los resultados anteriores
    results.forEach(result => {
      resultsContainer.appendChild(result); // Agrega los resultados filtrados al contenedor
    });
}

/**
 * RUSH eSports - Live Search Engine
 * Inicializa a busca nos grids especificados.
 */
function initRushSearch(inputId, gridIds) {
    const searchInput = document.getElementById(inputId);
    
    if (!searchInput) return;

    searchInput.addEventListener('keyup', function(e) {
        const term = e.target.value.toLowerCase();
        
        gridIds.forEach(gridId => {
            const grid = document.getElementById(gridId);
            if(grid) {
                const cards = grid.querySelectorAll('.rush-card');
                cards.forEach(card => {
                    const title = card.querySelector('.r-title') ? card.querySelector('.r-title').textContent.toLowerCase() : "";
                    const snippet = card.querySelector('.r-snippet') ? card.querySelector('.r-snippet').textContent.toLowerCase() : "";
                    
                    if(title.includes(term) || snippet.includes(term)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    });
}

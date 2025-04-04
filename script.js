document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    
    searchInput.addEventListener('input', function(event) {
        console.log('검색어:', event.target.value);
    });
});

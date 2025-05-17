document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const searchBtn = document.getElementById('search-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    searchInput.addEventListener('input', function(event) {
        console.log('검색어:', event.target.value);
    });

    searchBtn.addEventListener('click', function() {
        let query = searchInput.value.trim();
        if (query) {
            window.location.href = `https://www.google.com/search?q=${query}`;
        }
    });

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchBtn.click();
        }
    });

    menuItems.forEach(item => {
        const toggle = item.querySelector('.menu-toggle');

        toggle.addEventListener('click', function(event) {
            event.preventDefault();
            menuItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.menu-item')) {
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});

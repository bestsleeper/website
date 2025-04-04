document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const searchBtn = document.getElementById('search-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    // 검색어 입력 감지 및 콘솔 출력
    searchInput.addEventListener('input', function(event) {
        console.log('검색어:', event.target.value);
    });

    // 검색 버튼 클릭 시 검색 실행
    searchBtn.addEventListener('click', function() {
        let query = searchInput.value.trim();
        if (query) {
            window.location.href = `https://www.google.com/search?q=${query}`;
        }
    });

    // Enter 키로 검색 실행
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchBtn.click();
        }
    });

    // 메뉴 클릭 시 서브메뉴 표시
    menuItems.forEach(item => {
        const toggle = item.querySelector('.menu-toggle');

        toggle.addEventListener('click', function(event) {
            event.preventDefault();
            // 다른 메뉴 닫기
            menuItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // 현재 메뉴 토글
            item.classList.toggle('active');
        });
    });

    // 문서 클릭 시 메뉴 닫기
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.menu-item')) {
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});

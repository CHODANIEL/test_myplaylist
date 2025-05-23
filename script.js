document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.querySelector('.search-results');

    // 모바일 메뉴 토글
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // 메뉴 링크 클릭 시 메뉴 닫기
    const menuLinks = document.querySelectorAll('.nav-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuBtn) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // 검색 기능
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            if (searchTerm.length > 0) {
                searchResults.classList.add('active');
            } else {
                searchResults.classList.remove('active');
            }
            
            // 여기에 실제 검색 로직을 구현합니다
            // 예시 데이터
            const mockData = [
                { title: '오늘의 K-POP', type: '플레이리스트', image: 'images/k-pop.jpeg' },
                { title: '잔잔한 재즈', type: '플레이리스트', image: 'images/td_jazz.jpeg' },
                { title: '힙합 클래식', type: '플레이리스트', image: 'images/td_hiphop.jpeg' }
            ];

            // 검색 결과 필터링
            const filteredResults = mockData.filter(item => 
                item.title.toLowerCase().includes(searchTerm)
            );

            // 검색 결과 표시
            displaySearchResults(filteredResults);
        });

        // 검색창 외부 클릭 시 결과 숨기기
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.remove('active');
            }
        });
    }

    // 검색 결과 표시 함수
    function displaySearchResults(results) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">검색 결과가 없습니다.</div>';
            return;
        }

        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <img src="${result.image}" alt="${result.title}">
                <div class="search-result-info">
                    <h3>${result.title}</h3>
                    <p>${result.type}</p>
                </div>
            `;
            searchResults.appendChild(resultItem);
        });
    }
}); 
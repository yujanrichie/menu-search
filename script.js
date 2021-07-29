function showSearchModal() {
    let modalPositionX = 0;
    let modalPositionY = 0;

    //get position of search icon
    const mainSearchElement = document.getElementById('main-search-icon');
    const searchRect = mainSearchElement && mainSearchElement.getBoundingClientRect();
    if (searchRect != null) {
        modalPositionX = searchRect.x;
        modalPositionY = searchRect.y;
    }

    
    const searchModalElement = document.getElementById('search-modal');
    if (searchModalElement != null) {
        showPopularSearch(); //include showing popular search by default

        //display modal on position of search icon
        searchModalElement.style.position = 'absolute';
        searchModalElement.style.left = `${modalPositionX}px`;
        searchModalElement.style.top = `${modalPositionY}px`;
        searchModalElement.style.display = 'block';
    }

    //clear the search input
    const searchInputElements = searchModalElement && searchModalElement.getElementsByTagName('input');
    const searchInputElement = searchInputElements && searchInputElements[0];
    if (searchInputElement != null) {
        searchInputElement.value = '';
    }

}

function closeSearchModal() {
    const searchModalElement = document.getElementById('search-modal');
    if (searchModalElement != null) {
        searchModalElement.style.display = 'none';
    }
    hidePopularSearch();
    hideExpandedSearch();
}

function showPopularSearch() {
    const searchModalElement = document.getElementById('search-modal');
    const searchPopularElements = searchModalElement && searchModalElement.getElementsByClassName('search__popular');
    const searchPopularElement = searchPopularElements && searchPopularElements[0];

    if (searchPopularElement != null) {
        searchPopularElement.style.display = 'block';
    }
}

function hidePopularSearch() {
    const searchModalElement = document.getElementById('search-modal');
    const searchPopularElements = searchModalElement && searchModalElement.getElementsByClassName('search__popular');
    const searchPopularElement = searchPopularElements && searchPopularElements[0];

    if (searchPopularElement != null) {
        searchPopularElement.style.display = 'none';
    }
}

function showExpandedSearch() {
    const searchModalElement = document.getElementById('search-modal');
    const searchExpandedElements = searchModalElement && searchModalElement.getElementsByClassName('search__expanded');
    const searchExpandedElement = searchExpandedElements && searchExpandedElements[0];

    if (searchExpandedElement != null) {
        searchExpandedElement.style.display = 'block';
    }
}

function hideExpandedSearch() {
    const searchModalElement = document.getElementById('search-modal');
    const searchExpandedElements = searchModalElement && searchModalElement.getElementsByClassName('search__expanded');
    const searchExpandedElement = searchExpandedElements && searchExpandedElements[0];

    if (searchExpandedElement != null) {
        searchExpandedElement.style.display = 'none';
    }
}

function handleSearchInput(inputValue) {
    if ((inputValue != null) && (inputValue.length > 0)) {
        //there is a search input, hide popular search and show expanded search
        hidePopularSearch();
        showExpandedSearch();
    } else {
        showPopularSearch();
        hideExpandedSearch();
    }
}
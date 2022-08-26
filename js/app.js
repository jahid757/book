const searchIcon = document.getElementById('search_icon');
searchIcon.addEventListener('click', () => {
    const search = document.getElementById('search');
    search.classList.toggle('active');
})
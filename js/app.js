// const searchIcon = document.getElementById('search_icon');
// searchIcon.addEventListener('click', () => {
    
// })
const searchToggle = () => {
    const search = document.getElementById('search');
    search.classList.toggle('active');
}


const menu_id = document.getElementById('menu_icon');
menu_id.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active')
})
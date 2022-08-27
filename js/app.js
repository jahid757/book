// const searchIcon = document.getelemententById('search_icon');
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

// full screen mode

const element = document.getElementById("fullScreen");
function openFullscreen() {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

//  mood change

const moodChanger = (mood) => {
    const p = document.querySelectorAll('.text');
    const reader = document.getElementById('fullScreen')
    if(mood === 'dark'){
        for (let i = 0; i < p.length; i++) {
            const element = p[i];
            element.classList.remove('reading')
            element.classList.toggle('dark')
            reader.classList.toggle('dark')
            reader.classList.remove('reading')
        }
    }else{
        for (let i = 0; i < p.length; i++) {
            const element = p[i];
            element.classList.toggle('reading')
            element.classList.remove('dark')
            reader.classList.toggle('reading')
            reader.classList.remove('dark')
        }
    }
}

// control font size

let fontSize = 15;
const handelFontSize = (condition) => {
    if(condition === 'up'){
        fontSize = fontSize + 1;
        console.log('plus',condition,fontSize)
    }else if(condition==='down' && fontSize >= 15){
        fontSize = fontSize - 1;
    }
    upDownFont()
}

function upDownFont () {
    const text = document.querySelectorAll('.text');
    for (let i = 0; i < text.length; i++){
        const singleText = text[i];
        singleText.style.fontSize = `${fontSize}px`;
    }
}

// JavaScript для навигационнго меню
// Автор: Бекташов Бекназар
let navHide = document.getElementsByClassName('nav');
let navFix = document.getElementsByClassName('topnav');

window.onscroll = function(){
    let pos = pageYOffset;
    
    if(pos > 50){
        navHide[0].classList.add('active-hide');
        navFix[0].classList.add('active-fix');
    }else if(pos < 50){
        navHide[0].classList.remove('active-hide');
        navFix[0].classList.remove('active-fix');
    }
}

// Необходимые CSS настройки
/*.nnb
} */
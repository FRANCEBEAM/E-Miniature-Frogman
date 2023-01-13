
const navtoggle = document.querySelector('#navtoggle').addEventListener('click', ()=>{

    //Menu Opens
    navOpen = document.querySelector('.nav-li')
    navOpen.classList.toggle('open')

    burgerMenu = document.querySelector('#navtoggle')
    burgerMenu.classList.toggle('active')


});


// const navtoggle = document.querySelector('#navtoggle').addEventListener('click', ()=>{

//     //Menu Opens
//     navOpen = document.querySelector('.navli-container')
//     navOpen.classList.toggle('open')

//     burgerMenu = document.querySelector('#navtoggle')
//     burgerMenu.classList.toggle('active')


// });
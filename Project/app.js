let burger = document.querySelector('.burger__wrapp');

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
})

let scrollList = document.querySelector('.scroll__wrap');
let wrapper = document.querySelector('.wrapper');

scrollList.addEventListener('click', (e)=> {
    e.preventDefault();
    window.scrollBy(0, wrapper.offsetHeight);
    console.log(wrapper.offsetHeight);
})
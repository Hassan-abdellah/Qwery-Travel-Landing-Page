const bars = document.querySelector('.bars');
const menu = document.querySelector('.middle-nav');

bars.addEventListener('click', () => {
    bars.classList.toggle('active');
    menu.classList.toggle('active');
})
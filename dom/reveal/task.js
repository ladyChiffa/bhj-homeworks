
document.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll(".reveal");
    
    for (let i = 0; i < reveals.length; i++) {
        const {top, bottom} = reveals[i].getBoundingClientRect();
        if (top >= 0 && bottom <= window.innerHeight) {
            reveals[i].classList.add('reveal_active');
        }
        else {
            reveals[i].classList.remove('reveal_active');
        }
    }
});

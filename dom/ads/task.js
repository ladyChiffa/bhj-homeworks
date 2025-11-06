const rotators = document.querySelectorAll('.rotator');

function rotate(rotator) {
    const active = rotator.querySelector('.rotator__case_active');
    let next = active.nextElementSibling;
    
    if (next == null) {
        next = rotator.firstElementChild;
    }
    active.classList.remove('rotator__case_active');

    let speed = next.dataset.speed;
    if (speed == undefined) {
        speed = 1000;
    }
    let color = next.dataset.color;
    if (color == undefined) {
        color = "maroon";
    }
        
    next.classList.add('rotator__case_active');
    next.style.color = color;
        
    setTimeout( () => {
        rotate(rotator);
    }, speed);
}

for (i = 0; i < rotators.length; i++) {
    const rotator = rotators[i];
    const active = rotator.querySelector('.rotator__case_active');
    
    let speed = active.dataset.speed;
    if (speed == undefined) {
        speed = 1000;
    }
    let color = active.dataset.color;
    if (color == undefined) {
        color = "maroon";
    }
    active.style.color = color;
    
    setTimeout( () => {
        rotate(rotator);
    }, speed);    
}


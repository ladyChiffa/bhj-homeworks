const bookContent = document.querySelector('.book__content');
const fontControls = document.querySelector('.book__control_font-size').children;
const colorControls = document.querySelector('.book__control_color').children;
const bgControls = document.querySelector('.book__control_background').children;

function switchFonts (e) {
        const parent = e.target.closest('.book__control_font-size');
        for (let j = 0; j < parent.children.length; j++){
            if(parent.children[j] === e.target) {
                parent.children[j].classList.add('font-size_active');
                
                bookContent.classList.remove('book_fs-small', 'book_fs-big');
                let fontSize = parent.children[j].dataset.size;
                if (fontSize) {
                    bookContent.classList.add(`book_fs-${fontSize}`);
                }
            }
            else {
                parent.children[j].classList.remove('font-size_active');
            }
        }
        
        return false;
}

function switchColors (e) {
        const parent = e.target.closest('.book__control_color');
        for (let j = 0; j < parent.children.length; j++){
            if(parent.children[j] === e.target) {
                parent.children[j].classList.add('color_active');
                
                bookContent.classList.remove('book_color-whitesmoke', 'book_color-black', 'book_color-gray');
                let color = parent.children[j].dataset.textColor;
                if (color) {
                    bookContent.classList.add(`book_color-${color}`);
                }
            }
            else {
                parent.children[j].classList.remove('color_active');
            }
        }
        
        return false;
}


function switchBg (e) {
        const parent = e.target.closest('.book__control_background');
        for (let j = 0; j < parent.children.length; j++){
            if(parent.children[j] === e.target) {
                parent.children[j].classList.add('color_active');
                
                bookContent.classList.remove('book_bg-white', 'book_bg-black', 'book_bg-gray');
                let color = parent.children[j].dataset.bgColor;
                if (color) {
                    bookContent.classList.add(`book_bg-${color}`);
                }
            }
            else {
                parent.children[j].classList.remove('color_active');
            }
        }
        
        return false;
}



for (let i = 0; i < fontControls.length; i++) {
    fontControls[i].onclick = switchFonts;
}
for (let i = 0; i < colorControls.length; i++) {
    if (colorControls[i].tagName == "SPAN") {
        continue;
    }
    colorControls[i].onclick = switchColors;
}
for (let i = 0; i < bgControls.length; i++) {
    if (bgControls[i].tagName == "SPAN") {
        continue;
    }
    bgControls[i].onclick = switchBg;
}

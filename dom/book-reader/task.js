const bookContent = document.querySelector('.book__content');
const fontControls = document.querySelector('.book__control_font-size').children;
const colorControls = document.querySelector('.book__control_color').children;
const bgControls = document.querySelector('.book__control_background').children;

function switchFonts (e) {
        const parent = e.target.closest('.book__control_font-size');
        for (let j = 0; j < parent.children.length; j++){
            if(parent.children[j] === e.target) {
                parent.children[j].classList.add('font-size_active');
                let fontSize = parent.children[j].dataset.size;
                if (fontSize == "small") {
                    bookContent.classList.remove('book_fs-big');
                    bookContent.classList.add('book_fs-small');
                }
                else if (fontSize == "big") {
                    bookContent.classList.remove('book_fs-small');
                    bookContent.classList.add('book_fs-big');
                }
                else {
                    bookContent.classList.remove('book_fs-big');
                    bookContent.classList.remove('book_fs-small');
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
                let color = parent.children[j].dataset.textColor;
                if (color == "gray") {
                    bookContent.classList.remove('book_color-whitesmoke');
                    bookContent.classList.remove('book_color-black');
                    bookContent.classList.add('book_color-gray');
                }
                else if (color == "whitesmoke") {
                    bookContent.classList.remove('book_color-black');
                    bookContent.classList.remove('book_color-gray');
                    bookContent.classList.add('book_color-whitesmoke');
                }
                else {
                    bookContent.classList.remove('book_color-gray');
                    bookContent.classList.remove('book_color-whitesmoke');
                    bookContent.classList.add('book_color-black');
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
                let color = parent.children[j].dataset.bgColor;
                if (color == "gray") {
                    bookContent.classList.remove('book_bg-white');
                    bookContent.classList.remove('book_bg-black');
                    bookContent.classList.add('book_bg-gray');
                }
                else if (color == "white") {
                    bookContent.classList.remove('book_bg-black');
                    bookContent.classList.remove('book_bg-gray');
                    bookContent.classList.add('book_bg-white');
                }
                else {
                    bookContent.classList.remove('book_bg-gray');
                    bookContent.classList.remove('book_bg-white');
                    bookContent.classList.add('book_bg-black');
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

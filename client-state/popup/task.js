function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value);
}

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find( p => p.startsWith(name + "=") );
    if (!cookie) {
        return undefined;
    }
    return cookie.substring(name.length + 1);
}

function deleteCookie(name) {
    document.cookie = name + '=; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
}


const modal = document.getElementById('subscribe-modal');
const modalX = modal.querySelector(".modal__close");
modalX.onclick = () => {
    setCookie("modal_closed", "true");
    modal.classList.remove("modal_active");
};

const modalClosed = getCookie("modal_closed");
if (modalClosed != "true") {
    modal.classList.add("modal_active");    
}

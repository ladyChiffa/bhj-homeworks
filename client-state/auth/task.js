const form   = document.getElementById("signin__form");
const logout = document.getElementById("logout");

function switchLoggedIn (){
    const signInBlock  = document.getElementById("signin");
    const welcomeBlock = document.getElementById("welcome");
    const userIdBlock  = document.getElementById("user_id");
    
    signInBlock.classList.toggle("signin_active");
    welcomeBlock.classList.toggle("welcome_active");
    if (localStorage.userId) {
        userIdBlock.innerText = localStorage.userId;
    }
    else {
        userIdBlock.innerText = "";
    }
}

if (localStorage.userId) {
    switchLoggedIn();
}

form.onsubmit = () => {
    const formData = new FormData(form);
    
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = (e) => {
        if(xhr.readyState != xhr.DONE) {
            return;
        }
        const response = JSON.parse(xhr.responseText);
        
        form.reset();
        if (!response.success) {
            alert("Неверный логин/пароль");
            return;
        }
        
        localStorage.userId = response.user_id;
        switchLoggedIn();
    }

    xhr.open("POST", form.action);
    xhr.send(formData)
    
    return false;
}

logout.onclick = () => {
    delete localStorage.userId;
    switchLoggedIn();
}

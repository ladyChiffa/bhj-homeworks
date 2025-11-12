const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.onsubmit = (e) => {
    const formData = new FormData(form);
    
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = (e) => {
        progress.value = e.loaded / e.total;
        
    };
    
    xhr.upload.onload = (e) => {
        console.log("finished");
    };
    
    xhr.open("POST", form.action);
    xhr.send(formData)
    
    return false;
}
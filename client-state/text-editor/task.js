const editor = document.getElementById("editor");
const resetButton = document.getElementById("reset");

editor.value = localStorage.getItem("Editor");
if (!editor.value) editor.value = '';

editor.oninput = () => {
    localStorage.setItem("Editor", editor.value);
}

resetButton.onclick = () => {
    editor.value = '';
    localStorage.setItem("Editor", editor.value);
    return false;
}

const dropdown = document.getElementsByClassName("dropdown__value").item(0);
const dropdown__list = document.getElementsByClassName("dropdown__list").item(0);

dropdown.onclick = function () {
    dropdown__list.classList.toggle("dropdown__list_active");
}

function selectItem () {
    dropdown.textContent = this.textContent;
    const parent = this.closest('.dropdown__list');
    parent.classList.remove("dropdown__list_active");
    return false;
}

const item_array = Array.from(document.getElementsByClassName("dropdown__link"));
for (i = 0; i < item_array.length; i++) {
    item_array[i].onclick = selectItem;
}

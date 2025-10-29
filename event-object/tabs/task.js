const tabs = Array.from(document.getElementsByClassName("tab"));
const tab_pages = Array.from(document.getElementsByClassName("tab__content"));

function tabSwitch(e) {
    let n = tabs.indexOf(this);
    for (i = 0; i < tabs.length; i++) {
        if (i == n) {
            tabs[i].classList.add("tab_active");
            tab_pages[i].classList.add("tab__content_active");
        }
        else {
            tabs[i].classList.remove("tab_active");
            tab_pages[i].classList.remove("tab__content_active");
        }
    }
}

for (i = 0; i < tabs.length; i++) {
    tabs[i].onclick = tabSwitch;
}

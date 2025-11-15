let tooltip = document.querySelector(".tooltip");
if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    const body = document.querySelector("body");
    body.appendChild(tooltip);
}

function toggleTooltip(e) {
    let tooltip = document.querySelector(".tooltip");
    
    if (tooltip.innerText == e.target.title) {
        tooltip.classList.remove('tooltip_active');
        return false;
    }
    
    tooltip.classList.add('tooltip_active');
    tooltip.innerText = e.target.title;
    
    const rect = e.target.getBoundingClientRect();
    
    tooltip.style.top = rect.bottom;
    tooltip.style.left = rect.left;
    
    return false;
}

const links = document.querySelectorAll('.has-tooltip');
for (let i = 0; i < links.length; i++) {
    links[i].onclick = toggleTooltip;
}

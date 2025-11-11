const links = document.querySelectorAll('.has-tooltip');

function showTooltip(e) {
    let tooltips = document.querySelectorAll('.tooltip');
    for (let i = 0; i < tooltips.length; i++) {
        tooltips[i].classList.remove('tooltip_active');
    }

    let tooltip = e.target.querySelector('.tooltip');
    tooltip.classList.add('tooltip_active');
    return false;
}

for (let i = 0; i < links.length; i++) {
    let tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.innerText = links[i].title;
    links[i].append(tooltip);
    
    links[i].onclick = showTooltip;
}



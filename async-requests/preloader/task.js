const items = document.getElementById("items");
const loader = document.getElementById("loader");
let cache = JSON.parse(localStorage.getItem("Currencies"));

if(cache) {
    fillCurrencies(cache);
}

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = (e) => {
    if(xhr.readyState != xhr.DONE) {
        return;
    }
    
    items.innerHTML = "";
    
    const response = JSON.parse(xhr.responseText);
    fillCurrencies(response.response.Valute);
    localStorage.setItem("Currencies", JSON.stringify(response.response.Valute));
    
    loader.classList.remove("loader_active");
};

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

function fillCurrencies(currencySet) {
    for(let currency in currencySet) {
        const itemCurrency = document.createElement("div");
        itemCurrency.className = "item";
        itemCurrency.innerHTML = '<div class="item__code">' + currencySet[currency].CharCode + '</div>' + 
                                 '<div class="item__value">' + currencySet[currency].Value + '</div>' + 
                                 '<div class="item__currency">руб.</div>';
        items.appendChild(itemCurrency);
    }
    
}
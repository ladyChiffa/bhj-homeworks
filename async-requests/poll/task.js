const title = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");
let voteId;

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = (e) => {
    if(xhr.readyState != xhr.DONE) {
        return;
    }
    
    const response = JSON.parse(xhr.responseText);
    voteId = response.id;
    title.innerText = response.data.title;
    answers.innerHTML = "";
    for (let i = 0; i < response.data.answers.length; i++) {
        const answerElement = document.createElement("button");
        answerElement.className = "poll__answer";
        answerElement.innerText = response.data.answers[i];
        answerElement.dataset.id = i;
        answers.appendChild(answerElement);
        
        answerElement.onclick = getVote;
    }
};

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

function getVote (e) {
    alert("Спасибо, ваш голос засчитан!");
    
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = (e) => {
        if(xhr.readyState != xhr.DONE) {
            return;
        }
        const response = JSON.parse(xhr.responseText);
        
        answers.classList.remove("poll__answers_active");
        let total = response.stat.reduce( 
                       (acc, item) => acc + item.votes,
                       0 
                    );
        let percents = response.stat.map(
                           (item) => '<div>' + item.answer + ' <b>' + (item.votes * 100 / total).toFixed(2) + '%</b></div>'
                       ).reduce(
                           (acc, item) => acc + item,
                           ""
                       );
       title.innerHTML += percents;
    }

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('vote=' + voteId + '&answer=' + e.target.dataset.id);
    
}
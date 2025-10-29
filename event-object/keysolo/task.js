class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timer = 0;
    this.timerElement = container.querySelector('.status__timer');
    this.timerId = 0;

    this.reset();
    this.setNewWord();
    this.registerEvents();
  }

  secondsToString (secondsTotal) {
      let hours   = Math.floor(secondsTotal / 3600);
      let minutes = Math.floor((secondsTotal - hours * 3600) / 60);
      let seconds = secondsTotal - hours * 3600 - minutes * 60;
    
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  
  reset() {
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
     const game = this;
     document.body.onkeyup = function (e) {
         if(e.keyCode < 65 || e.keyCode > 90) {
            return;
         }
         
         if (e.key.toLowerCase() == game.currentSymbol.childNodes[0].textContent) {
             game.success();
         }
         else {
             game.fail();
         }
         
     }
     
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }
  
  checkTimer () {
      this.timer--;
      if (this.timer <= 0 ) {
          this.fail();
      }
      else {
        this.timerElement.textContent = this.secondsToString(this.timer);
        this.timerId = setTimeout(this.checkTimer.bind(this), 1000);
      }
  }

  setNewWord() {
    clearTimeout(this.timerId);
    const word = this.getWord();
    this.timer = word.length;
    this.timerElement.textContent = this.secondsToString(this.timer);

    this.renderWord(word);
    this.timerId = setTimeout(this.checkTimer.bind(this), 1000);
    
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))


const cards = document.querySelectorAll(".card");
var openCardName;
var lockBoard = false;

startGame();

function startGame() {
    cards.forEach(card => card.addEventListener('click', flipCard));  
}

function unflipCards() {
  cards.forEach(card => card.classList.remove('flip'));
  cards.forEach(card => card.childNodes[1].classList.replace('frontBlue', 'front'));
  lockBoard = false;
}

function flipCard() {
  if (lockBoard) unflipCards();
  this.classList.add('flip');
  this.childNodes[1].classList.replace('front', 'frontBlue');
  calc(this.id);
  lockBoard = true;
}

function calc(position) {
  
  var y = position.substr(1,1);       
  var x = position.substr(0,1);
  
  switch (x) {
    case 'A': x = 1; break;
    case 'B': x = 2; break;
    case 'C': x = 3; break;
    case 'D': x = 4; break;
    case 'E': x = 5; break;
    case 'F': x = 6; break;
    case 'G': x = 7; break;
    case 'H': x = 8; break;
  }
  
  function numToChar(num) {
    var num;
    switch (num) {
      case 1: num = 'A'; break;
      case 2: num = 'B'; break;
      case 3: num = 'C'; break;
      case 4: num = 'D'; break;
      case 5: num = 'E'; break;
      case 6: num = 'F'; break;
      case 7: num = 'G'; break;
      case 8: num = 'H'; break;
    }
    return num;
  }

  x=+x;
  y=+y;
  
  if (0<(x+2)&&(x+2)<=8) {
    if (0<(y+1)&&(y+1)<=8) document.getElementById(numToChar((x+2))+(y+1)).classList.add('flip');//1
    if (0<(y-1)&&(y-1)<=8) document.getElementById(numToChar((x+2))+(y-1)).classList.add('flip');//8
  }
  if (0<(x+1)&&(x+1)<=8) {
    if (0<(y+2)&&(y+2)<=8) document.getElementById(numToChar((x+1))+(y+2)).classList.add('flip');//2
    if (0<(y-2)&&(y-2)<=8) document.getElementById(numToChar((x+1))+(y-2)).classList.add('flip');//7
  }
  if (0<(x-1)&&(x-1)<=8) {
    if (0<(y+2)&&(y+2)<=8) document.getElementById(numToChar((x-1))+(y+2)).classList.add('flip');//3
    if (0<(y-2)&&(y-2)<=8) document.getElementById(numToChar((x-1))+(y-2)).classList.add('flip');//6
  }
  if (0<(x-2)&&(x-2)<=8) {
    if (0<(y+1)&&(y+1)<=8) document.getElementById(numToChar((x-2))+(y+1)).classList.add('flip');//4
    if (0<(y-1)&&(y-1)<=8) document.getElementById(numToChar((x-2))+(y-1)).classList.add('flip');//5
  }
}

// function flipCard() { //переворачиваем карточку
//     if (lockBoard) return;
//     if (this === firstCard) return;

//     this.classList.add('flip');
//     if (!flippedCard) {
//        flippedCard = true;
//        firstCard = this; //если не была перевернута, запоминаем
//        return;
//     }
//     secondCard = this; //если одна карточка уже открыта, получаем вторую
//     checkForMatch(); //сравниваем карточки
// }

// function checkForMatch() {
//   var isMatch = firstCard.dataset.type === secondCard.dataset.type;
  
//   isMatch ? disableCards() : unflipCards(); //если одинаковые, отключаем, иначе переворачиваем обратно
// }

// function disableCards() { 
//   firstCard.removeEventListener('click', flipCard);
//   secondCard.removeEventListener('click', flipCard);
//   counter++; //счетчик перевернутых пар
//   if (counter == 8) { //останавливаем секундомер
//       findTIME();
//       alert("Вы выиграли!\nЗатраченное время: " + time); //вывод результата
//       location.reload(); //рестарт игры
//     }
//   resetBoard();
// }

// function unflipCards() { 
//   lockBoard = true;

//   setTimeout(() => {
//     firstCard.classList.remove('flip');
//     secondCard.classList.remove('flip');

//     resetBoard();
//   }, 1000);
// }

// function resetBoard() {
//   [flippedCard, lockBoard] = [false, false];
//   [firstCard, secondCard] = [null, null];
// }
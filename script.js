const container = document.querySelector('.container');
let dives = container.querySelectorAll('div');
const popup = document.querySelector('.popup');

let value = 12;
let i = 11;

let help = true;
let first = false;
let firstName = '';
let firstIdx = '';
let second = false;
let secName = '';
let secIdx = '';
let attempt = 0;

function add() {
  popup.classList.remove('popupAdd');
  colors = [
    'red',
    'green',
    'red',
    'green',
    'blue',
    'blue',
    'pink',
    'pink',
    'orange',
    'orange',
    'black',
    'black',
  ];

  for (var i = dives.length - 1; i >= 0; i--) {
    dives[i].className = '';
    dives[i].setAttribute('name', '');
    dives[i].classList.add('card');
  }

  setTimeout(() => {
    for (var i = dives.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * colors.length);
      dives[i].classList.add(colors[rand]);
      dives[i].setAttribute('name', colors[rand]);
      dives[i].classList.add('close');
      colors.splice([rand], 1);
    }
  }, 1000);

  help = true;
  first = false;
  firstName = '';
  firstIdx = '';
  second = false;
  secName = '';
  secIdx = '';
  attempt = 0;
}

function openCard(idx) {
  if (help === false) {
  } else if (dives[idx].classList.contains('close')) {
    if (first === false) {
      dives[idx].classList.remove('close');
      first = true;
      firstName = dives[idx].getAttribute('name');
      firstIdx = idx;
    } else if (first === true && idx !== firstIdx) {
      dives[idx].classList.remove('close');
      second = true;
      help = false;
      secName = dives[idx].getAttribute('name');
      secIdx = idx;
    }

    if (second === true) {
      if (firstName == secName) {
        help = true;
        first = false;
        firstName = '';
        second = false;
        secName = '';
        firstIdx = '';
        secIdx = '';
      } else {
        first = false;
        firstName = '';
        second = false;
        secName = '';
        setTimeout(() => {
          dives[firstIdx].classList.add('close');
          firstIdx = '';
          dives[secIdx].classList.add('close');
          secIdx = '';
          help = true;
        }, 1000);
      }
      attempt++;
      setTimeout(() => {
        finnalRes(attempt);
      }, 500);
    }
  }
}

function finnalRes(att) {
  for (var j = dives.length - 1; j >= 0; j--) {
    if (dives[j].classList.contains('close')) return;
  }
  console.log('hello', att);
  popup.classList.add('popupAdd');
  popup.textContent = `You win in ${att}  moves`;
}

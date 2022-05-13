const buttons = document.querySelectorAll('.buttons');
const upLight = document.querySelector('.up-light');
const downLight = document.querySelector('.down-light');
const floorNumber = document.querySelector('.floor-number');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('btn-waiting');
    floorNumber.innerText = `${button.innerText}`;
  });
});

// Illuminate up or down arrows
let oldValue = 0;
let newValue = 0;
window.addEventListener('scroll', (e) => {
  newValue = window.pageYOffset;
  if (oldValue < newValue) {
    downLight.classList.add('down-light-on');
  } else if (oldValue > newValue) {
    upLight.classList.add('up-light-on');
  }
  oldValue = newValue;
});

// Turn off button lights and direction arrows
function lightsOff() {
  downLight.classList.remove('down-light-on');
  upLight.classList.remove('up-light-on');
  buttons.forEach((btn) => {
    btn.classList.remove('btn-waiting');
  });
}
setInterval(lightsOff, 750);


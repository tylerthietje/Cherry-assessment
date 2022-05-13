const buttons = document.querySelectorAll('.buttons');
const upLight = document.querySelector('.up-light');
const downLight = document.querySelector('.down-light');
const floorNumber = document.querySelector('.floor-number');
const flr1 = document.querySelector("#floor1");
const flr2 = document.querySelector("#floor2");
const flr3 = document.querySelector("#floor3");
const flr4 = document.querySelector("#floor4");

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('btn-waiting');
    floorNumber.innerText = `${button.innerText}`;
  });
});

// Illuminate up or down arrows 
let oldValue = 0
let newValue = 0
window.addEventListener('scroll', (e) => {
  newValue = window.pageYOffset;
  if (oldValue < newValue) {
    console.log("Down");
    downLight.classList.add("down-light-on");
  } else if (oldValue > newValue) {
    console.log("Up");
    upLight.classList.add("up-light-on");
  }
  oldValue = newValue;
});







// const lastScrollTop = "";

// window.addEventListener("scroll", function () {

//         const st = window.pageYOffset || document.documentElement.scrollTop; 
//     if (st < lastScrollTop) {
//       // downscroll code
//       downLight.classList.add("down-light-on");
//     } else {
//       // upscroll code
//       upLight.classList.add("up-light-on");
//     }
// },
// );

// Turn off button lights and direction arrows
function lightsOff() {
  downLight.classList.remove("down-light-on");
  upLight.classList.remove("up-light-on");
  buttons.forEach((btn) => {
    btn.classList.remove("btn-waiting");
  })
}

setInterval(lightsOff, 1000);
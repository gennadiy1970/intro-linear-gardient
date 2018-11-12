const box = document.querySelector('.two-color')
const boxOk = document.querySelector('.two-color-ok')
const boxSelect = document.querySelector('.two-color-select')
const boxStart = document.querySelector('.two-color-1')
const boxStop = document.querySelector('.two-color-2')

const box3 = document.querySelector('.three-color')
const boxOk3 = document.querySelector('.three-color-ok')
const boxSelect3 = document.querySelector('.three-color-select')
const boxStart31 = document.querySelector('.three-color-1')
const boxStart32 = document.querySelector('.three-color-2')
const boxStart33 = document.querySelector('.three-color-3')
const boxStop3 = document.querySelector('.three-color-4')

const box3Step1 = document.querySelector('.three-percent-1')
const box3Step2 = document.querySelector('.three-percent-2')

boxOk.addEventListener('click', setTwoBox)
boxOk3.addEventListener('click', setThreeBox)

function setTwoBox(e) {
    // e.preventDefault();
    const text =  boxSelect.options[boxSelect.selectedIndex].textContent;
    const string = `linear-gradient(${text}, ${boxStart.value}, ${boxStop.value});`;
    console.log(string);
    box.style.cssText = `background-image: ${string}`;
}

function setThreeBox(e) {
    const text =  boxSelect3.options[boxSelect3.selectedIndex].textContent;
    const string = "linear-gradient("
    + text  + ","
    + boxStart31.value  + ","
    + boxStart32.value + " " + +box3Step1.value + "%" + ","
    + boxStart33.value + " " + +box3Step2.value + "%" + ","
    + boxStop3.value
    +");";
    console.log(string);
    box3.style.cssText = `background-image: ${string}`;
}
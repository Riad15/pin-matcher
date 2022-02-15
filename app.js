function getPin() {
    const newPin = Math.round(Math.random() * 10000);
    const stringPin = newPin + '';
    if (stringPin.length == 4) {
        let display = document.getElementById('display-pin');
        display.value = stringPin;

    } else {
        getPin();
    }
}
function generatePin() {
    getPin();

}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const pin = event.target.innerText;
    const display = document.getElementById('pin-numbers');
    if (isNaN(pin)) {
        if (pin == 'C') {
            display.value = '';
        }
        // else {
        //     const priNumber = display.value;
        //     const arrToPin = priNumber.split('')
        //     const lastNumber = arrToPin.pop();
        //     updatePin = lastNumber.toString();

        //     display.value = updatePin;

        // }

    } else {

        const priNumber = display.value;
        const lastNumber = priNumber + pin;
        display.value = lastNumber;


    }

})

function submitBtn() {
    const randomPin = document.getElementById('display-pin').value;
    const matchPin = document.getElementById('pin-numbers').value;
    const succesMsg = document.getElementById('pin-match');
    const errorMsg = document.getElementById('pin-not-match');
    if (randomPin == matchPin) {
        succesMsg.style.display = 'block';
        errorMsg.style.display = 'none';
    } else {

        errorMsg.style.display = 'block';
        succesMsg.style.display = 'none';
    }

}
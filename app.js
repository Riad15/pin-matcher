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

    } else {

        const priNumber = display.value;
        const lastNumber = priNumber + pin;
        display.value = lastNumber;


    }

})
document.getElementById('generate-pin-btn').addEventListener('click', function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const myNumber = document.getElementById('my-number');
    /* 
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return generatePin();
    }
    */
    if (pin >= 1000 && pin <= 9999) {
        const pinDisplay = document.getElementById('pin-display');
        pinDisplay.value = pin;
        const success = document.getElementById('success');
        success.style.display = 'none';
        const fail = document.getElementById('fail');
        fail.style.display = 'none';
        myNumber.value = '';
    }
    else {
        return generatePin();
    }
})

document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const myNumber = document.getElementById('my-number');
    if (isNaN(number)) {
        console.log(number);
        if (number == 'C') {
            myNumber.value = '';
        }
        else if (number == '<') {
            myNumber.value = myNumber.value.slice(0, -1);

        }
    }
    else {
        myNumber.value += number;
    }
})

//event listener of submit button
function verifyPin() {
    const pin = document.getElementById('pin-display').value;
    const myPin = document.getElementById('my-number').value;
    const success = document.getElementById('success');
    const fail = document.getElementById('fail');
    success.style.display = 'none';
    fail.style.display = 'none';

    if (pin == myPin) {
        success.style.display = 'block';
    }
    else {
        fail.style.display = 'block';
    }
}
const button = document.querySelector("#next-stop")

function* getStop() {
    yield "BBA";
    yield 'KAT';
    yield 'WRO';
    yield 'WWA';
    yield 'TOR';
    yield 'GDA';
}

const plTrainsLine = getStop()
button.addEventListener('click', () => {
    let currStop = plTrainsLine.next()
    if (currStop.done) {
        console.log('We made it');
        button.setAttribute('disabled', true)
    } else {
        console.log(currStop.value);
    }

})
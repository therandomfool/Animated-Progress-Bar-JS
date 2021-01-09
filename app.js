function updateProgressBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".progress__fill").style.width = `${value}%`;
    progressBar.querySelector(".progress__text").textContent = `${value}%`;
}

const myProgressBar = document.querySelector(".progress");

// finish progress

let count = 0;
setInterval(function () {
    for (let i = 0; i <= 100; i++) {

        updateProgressBar(myProgressBar, count);
    }
    if (count < 100) {

        count++
    } else{
        document.querySelector(".progress__fill").style.background = 'crimson';
        document.querySelector(".progress__text").style.color = 'gold';
        myProgressBar.style.transform='scale(1.69)';
    }
}, 225)
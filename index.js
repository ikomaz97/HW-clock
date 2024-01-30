let timerId = null;

const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
       if (timerId === null) {
        timerId = setInterval(updateClock, 1000);
    }
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function () {
    clearInterval(timerId);
    timerId = null;
});

function updateClock() {
    const clock = document.getElementById('clock');


    if (clock) {
        const now = new Date();
        const hours = formatTime(now.getHours());
        const minutes = formatTime(now.getMinutes());
        const seconds = formatTime(now.getSeconds());

        clock.textContent = hours + ':' + minutes + ':' + seconds;
    }
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}


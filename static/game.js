var clickCount = 0;
var seconds = 5;
var milli = 00;
var Interval;

function mouseDown(image) {
    image.src="/static/Button Down.png";
    clickCount++;
    if (seconds == 5) {
        startGame();
    }
    printScore();
}

function mouseUp(image) {
    image.src="/static/Button Up.png";
}

function printScore() {
    var s = document.getElementById("ScorePlace");
    s.innerHTML = clickCount;
}

function resetGame() {
    clickCount = 0;
    printScore();
    seconds = 5;
    milli = 0;
    document.getElementById("milli").innerHTML = milli;
    document.getElementById("sec").innerHTML = seconds;
}

function startGame() {
    clearInterval(Interval);
    Interval = setInterval(gameTimer, 10);
}

function gameTimer() {
    milli--;
    
    if (milli < 0) {
        milli = 99;
        seconds--;
        document.getElementById("milli").innerHTML = milli;
        document.getElementById("sec").innerHTML = seconds;
    }
    if (milli < 9) {
        document.getElementById("milli").innerHTML = 0 + milli;
    }
    if (milli > 9) {
        document.getElementById("milli").innerHTML = milli;
    }
    if (seconds <= 0 && milli <= 0) {
        document.getElementById("milli").innerHTML = 00;
        document.getElementById("sec").innerHTML = 0;
        endGame();
    }
}

function endGame() {
    clearInterval(Interval);
    var score = clickCount;
}

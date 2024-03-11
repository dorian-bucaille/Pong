const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

const paddleWidth = 10, paddleHeight = 75, ballRadius = 10;
let leftPaddleY = (canvas.height - paddleHeight) / 2, rightPaddleY = leftPaddleY;
let ballX = canvas.width / 2, ballY = canvas.height / 2;
let ballDeltaX = 2, ballDeltaY = -2;
let scoreLeft = 0, scoreRight = 0;
let upPressed = false, downPressed = false, zPressed = false, sPressed = false;

document.addEventListener("keydown", keyHandler, false);
document.addEventListener("keyup", keyHandler, false);

function keyHandler(e) {
    const isDown = e.type === "keydown";
    switch(e.key) {
        case "Up":
        case "ArrowUp":
            upPressed = isDown;
            break;
        case "Down":
        case "ArrowDown":
            downPressed = isDown;
            break;
        case "z":
        case "Z":
            zPressed = isDown;
            break;
        case "s":
        case "S":
            sPressed = isDown;
            break;
    }
}

function drawPaddle(x, y) {
    ctx.beginPath();
    ctx.rect(x, y, paddleWidth, paddleHeight);
    ctx.fillStyle = "#FFF";
    ctx.fill();
    ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#FFF";
    ctx.fill();
    ctx.closePath();
}

function displayScores() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#FFF";
    ctx.fillText("Left: " + scoreLeft, 8, 20);
    ctx.fillText("Right: " + scoreRight, canvas.width - 65, 20);
}

function updateGame() {
    movePaddles();
    checkCollisions();
    updateBallPosition();
    displayScores();
    requestAnimationFrame(updateGame);
}

function movePaddles() {
    if (upPressed) rightPaddleY = Math.max(rightPaddleY - 7, 0);
    if (downPressed) rightPaddleY = Math.min(rightPaddleY + 7, canvas.height - paddleHeight);
    if (zPressed) leftPaddleY = Math.max(leftPaddleY - 7, 0);
    if (sPressed) leftPaddleY = Math.min(leftPaddleY + 7, canvas.height - paddleHeight);
}

function checkCollisions() {
    if (ballY + ballDeltaY > canvas.height - ballRadius || ballY + ballDeltaY < ballRadius) ballDeltaY = -ballDeltaY;
    if (ballX + ballDeltaX > canvas.width - ballRadius - paddleWidth && ballY > rightPaddleY && ballY < rightPaddleY + paddleHeight ||
        ballX + ballDeltaX < ballRadius + paddleWidth && ballY > leftPaddleY && ballY < leftPaddleY + paddleHeight) ballDeltaX = -ballDeltaX;
}

function updateBallPosition() {
    ballX += ballDeltaX;
    ballY += ballDeltaY;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle(0, leftPaddleY);
    drawPaddle(canvas.width - paddleWidth, rightPaddleY);
    drawBall();
    updateScores();
}

function updateScores() {
    if (ballX + ballDeltaX > canvas.width - ballRadius) {
        scoreLeft++;
        resetBall();
    } else if (ballX + ballDeltaX < ballRadius) {
        scoreRight++;
        resetBall();
    }
}

function resetBall() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballDeltaX = -ballDeltaX;
    ballDeltaY = Math.random() > 0.5 ? 2 : -2; // Add a little randomness to the ball's vertical movement on reset
}

updateGame();
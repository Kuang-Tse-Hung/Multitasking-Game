var c1 = 0, c2 = 0,c3 = 0,c4 = 0 ,c5 = 0,c6 = 0,c7 = 1, start_v = 1, live = 10 , score = 0;

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth; // Set canvas width to match window width
    canvas.height = window.innerHeight; // Set canvas height to match window height
}

const drawCircle = (centerX, centerY, radius, color, lineWidth) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
};

class Ball {
    constructor() {
        this.color = 0;
        this.delay = 0;
        this.vx = 0.0;
        this.vy = 0.0;
        this.y = 0.0;
        this.x = 0.0;
        this.r1 = 0;
        this.r2 = 0;
        this.r3 = 0;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r1, 0, 2 * Math.PI);
        ctx.fill();
    }
}

const blist = Array(1000).fill(null).map(() => new Ball());
const b1 = blist[0];
const b2 = blist[1];
const b3 = blist[2];
const b4 = blist[3];
const b5 = blist[4];

// Set properties for b2
b1.x = 700;
b1.y = 10;
b1.r1 = 25;
b1.vy = 1;
b1.vx = 0;
const colors = ["rgb(0,100,150)", "rgb(100,150,0)", "rgb(150,50,50)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0, 255,255)"];
b1.color = colors[Math.floor(Math.random() * colors.length)];
setTimeout(function() {
    b2.x = 700;
    b2.y = 10;
    b2.r1 = 25;
    b2.vy = 1;
    b2.vx = 0;
    b2.color = colors[Math.floor(Math.random() * colors.length)];
}, 4000);
// Initialize b3 after 8 seconds
setTimeout(function() {
    b3.x = 700;
    b3.y = 10;
    b3.r1 = 25;
    b3.vy = 1;
    b3.vx = 0;
    b3.color = colors[Math.floor(Math.random() * colors.length)];
}, 8000);

// Initialize b4 after 12 seconds
setTimeout(function() {
    b4.x = 700;
    b4.y = 10;
    b4.r1 = 25;
    b4.vy = 1;
    b4.vx = 0;
    b4.color = colors[Math.floor(Math.random() * colors.length)];
}, 12000);

// Initialize b5 after 16 seconds
setTimeout(function() {
    b5.x = 700;
    b5.y = 10;
    b5.r1 = 25;
    b5.vy = 1;
    b5.vx = 0;
    b5.color = colors[Math.floor(Math.random() * colors.length)];
}, 16000);

let resetQueue = []; // Initialize an empty queue

function reset(ball) {
    resetQueue.push(ball); // Add the ball to the queue

    
    // Start processing the reset queue
}

function processResetQueue() {
    if (resetQueue.length > 0) {
        const ball = resetQueue.shift(); // Get the first ball from the queue
        ball.x = 700;
        ball.y = 10;
        ball.vx = 0;
        ball.vy = start_v; // Set initial velocity to 0
        ball.color = colors[Math.floor(Math.random() * colors.length)];
    }
}



function checkBallPosition(ball) {
    const scaleX = 0.7; // Scale factor in X direction
    const scaleY = 0.7;
    const x = ball.x;
    const y = ball.y;
        //r1
    if (x >= 700 && x <= 710 && y >= 171.5 && y <= 175) {
        
        if (c1 == 0) {
            ball.vx = start_v;
            ball.vy = 0;
        }else {
            ball.vx = -start_v;
            ball.vy = 0;
        }
    }else if(x >= 910 && x <= 915 && y >= 171.5 && y <= 175){ //r3
        
            ball.vx = 0;
            ball.vy = start_v;
        
    }else if (x >= 420 && x <= 425 && y >= 171.5 && y <= 174) {
        if (c2 == 0) {
            ball.vx = 0;
            ball.vy = start_v;
        }
    }else if (x >= 420 && x <= 425 && y >= 350 && y <= 355 ) {
        if (c3 == 0) {
            ball.vx = start_v;
            ball.vy = 0;
        }
    } else if (x >= 910 && x <=915 && y>=350 && y <= 355) {
        if (c4 == 0) {
            ball.vx = start_v;
            ball.vy = 0;
        } else{
            ball.vx = -start_v;
            ball.vy = 0;
        }
    } else if (x >= 1155 && x <= 1160 && y >= 350 && y <=355) {
        if (c5 == 0) {
            ball.vx = 0;
            ball.vy = -start_v;
        } else {
            ball.vx = 0;
            ball.vy = start_v;
        }
    } else if (x >= 735 && x <= 740 && y >= 350 && y <=355) {
        if (c6 == 1) {
            ball.vx = 0;
            ball.vy = start_v;
        }
    } else if(x >= 735 && x <= 740 && y >= 560 && y <= 565) {
        if (c7 == 0) {
            ball.vx = start_v;
            ball.vy = 0;
        } else {
            ball.vx = -start_v;
            ball.vy = 0;
        }
    }
    if (//blue
        (x >= scaleX * 450 - scaleX * 10 && x <= scaleX * 450 + scaleX * 10) &&
        (y >= scaleY * 250 - scaleX * 10 && y <= scaleY * 250 + scaleY * 10)
    ) {
        if(ball.color != colors[0]){
            live--;
            playFailedAudio();
            // console.log("live--");
        }else{
            score++;
            playGetScoreAudio();
            // console.log("score++");
        }
        ball.vx = 0;
        ball.vy = 0;
        ball.x = 700;
        ball.y = 5;
        ball.color = 'white';
        reset(ball);
    }
    if ( //green
        (x >= scaleX * 600 - scaleX * 10 && x <= scaleX * 600 + scaleX * 10) &&
        (y >= scaleY * 810 - scaleX * 10 && y <= scaleY * 810 + scaleY * 10)
    ) {
        if(ball.color != colors[1]){
            live--;
            playFailedAudio();
            // console.log("live--");
        }else{
            score++;
            playGetScoreAudio();
            // console.log("score++");
        }
        ball.vx = 0;
        ball.vy = 0;
        ball.x = 700;
        ball.y = 5;
        ball.color = 'white';
        reset(ball);

    }
    
    else if ( //brown
        (x >= scaleX * 1300 - scaleX * 10 && x <= scaleX * 1300 + scaleX * 10) &&
        (y >= scaleY * 800 - scaleX * 10 && y <= scaleY * 800 + scaleY * 10)
    ) {
        if(ball.color != colors[2]){
            live--;
            playFailedAudio();
            // console.log("live--");
        }else{
            score++;
            playGetScoreAudio();
            // console.log("score++");
        }
        ball.vx = 0;
        ball.vy = 0;
        ball.x = 700;
        ball.y = 5;
        ball.color = 'white';
        reset(ball);
    }
    else if ( //yellow
        (x >= scaleX * 940 - scaleX * 10 && x <= scaleX * 940 + scaleX * 10) &&
        (y >= scaleY * 500 - scaleX * 10 && y <= scaleY * 500 + scaleY * 10)
    ) {
        if(ball.color != colors[3]){
            live--;
            playFailedAudio();
            // console.log("live--");
        }else{
            score++;
            playGetScoreAudio();
            // console.log("score++");
        }
        ball.vx = 0;
        ball.vy = 0;
        ball.x = 700;
        ball.y = 5;
        ball.color = 'white';
        reset(ball);
    }
    else if ( //pink
        (x >= scaleX * 1650 - scaleX * 10 && x <= scaleX * 1650 + scaleX * 10) &&
        (y >= scaleY * 200 - scaleX * 10 && y <= scaleY * 200 + scaleY * 10)
    ) {
        if(ball.color != colors[4]){
            live--;
            playFailedAudio();
            // console.log("live--");
        }else{
            score++;
            playGetScoreAudio();
            // console.log("score++");
        }
        ball.vx = 0;
        ball.vy = 0;
        ball.x = 700;
        ball.y = 5;
        ball.color = 'white';
        reset(ball);
    }
    else if ( //light blue
        (x >= scaleX * 1650 - scaleX * 10 && x <= scaleX * 1650 + scaleX * 10) &&
        (y >= scaleY * 800 - scaleX * 10 && y <= scaleY * 800 + scaleY * 10)
    ) {
        if(ball.color != colors[5]){
            live--;
            playFailedAudio();
            // console.log("live--");
        }else{
            score++;
            playGetScoreAudio();
            // console.log("score++");
        }
        ball.vx = 0;
        ball.vy = 0;
        ball.x = 700;
        ball.y = 5;
        ball.color = 'white';
        reset(ball);
    }    
}

function playFailedAudio() {
    const audio = document.createElement("audio");
    audio.src = "failed.mp3";
    audio.play();
};

function playGetScoreAudio() {
    const audio = document.createElement("audio");
    audio.src = "getScore.mp3";
    audio.play();
};

function playSwitchDirectionAudio() {
    const audio = document.createElement("audio");
    audio.src = "switchDirection.mp3";
    audio.play();
};

canvas.addEventListener('click', function(event) {
    const scaleX = 0.7; // Scale factor in X direction
    const scaleY = 0.7;
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (mouseX >= 650 && mouseX <= 750 && mouseY >= 130 && mouseY <= 220) {
        c1 = (c1 + 1) % 2; // Toggle r1 between 0 and 1
        playSwitchDirectionAudio();
    }else if(mouseX >= 370 && mouseX <= 470 && mouseY >= 130 && mouseY <= 220) {
        c2 = (c2 + 1) % 2; // Toggle r1 between 0 and 1
        playSwitchDirectionAudio();
    }else if(mouseX >= 370 && mouseX <= 470 && mouseY >= 310 && mouseY <= 390) {
        c3 = (c3 + 1) % 2; // Toggle r1 between 0 and 1
        playSwitchDirectionAudio();
    }else if(mouseX >= 860 && mouseX <= 960 && mouseY >= 310 && mouseY <= 390) {
        c4 = (c4 + 1) % 2; // Toggle r1 between 0 and 1
        playSwitchDirectionAudio();
    }else if(mouseX >= 1105 && mouseX <= 1200 && mouseY >= 310 && mouseY <= 390) {
        c5 = (c5 + 1) % 2; // Toggle r1 between 0 and 1
        playSwitchDirectionAudio();
    }else if(mouseX >= 690 && mouseX <= 780 && mouseY >= 310 && mouseY <= 390) {
        c6 = (c6 + 1) % 2; // Toggle r1 between 0 and 1
        playSwitchDirectionAudio();
    }else if(mouseX >= 690 && mouseX <= 780 && mouseY >= 510 && mouseY <= 610) {
        c7 = (c7 + 1) % 2; // Toggle r1 between 0 and 1
        playSwitchDirectionAudio();
    }            
});

function animate() {
    window.addEventListener('resize', resizeCanvas); // Listen for window resize events
    resizeCanvas();
    
    const drawLine = (startX, startY, endX, endY, color, lineWidth) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    };
    const scaleX = 0.7; // Scale factor in X direction
    const scaleY = 0.7; // Scale factor in Y direction
    requestAnimationFrame(animate);
    start_v = 1 + 0.02 * score;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Add scaleX and scaleY directly in the drawLine and drawCircle calls
    drawCircle(scaleX * 1000, scaleY * 250, scaleX * 10, "black");
    if(c1 == 0){
        drawLine(scaleX * 950, scaleY * 200, scaleX * 950, scaleY * 300, "black", 4);    
    }else{
        drawLine(scaleX * 1050, scaleY * 200, scaleX * 1050, scaleY * 300, "black", 4);
    }
    drawCircle(scaleX * 600, scaleY * 250, scaleX * 10, "black");

    if(c2 == 0){
        drawLine(scaleX * 550, scaleY * 200, scaleX * 550, scaleY * 300, "black", 4);
    }else{
        drawLine(scaleX * 550, scaleY * 300, scaleX * 650, scaleY * 300, "black", 4);
    }
    drawCircle(scaleX * 600, scaleY * 500, scaleX * 10, "black");
    if(c3 == 0){
        drawLine(scaleX * 550, scaleY * 550, scaleX * 650, scaleY * 550, "black", 4);
    }else{
        drawLine(scaleX * 650, scaleY * 450, scaleX * 650, scaleY * 550, "black", 4);
    }
    drawCircle(scaleX * 1300, scaleY * 500, scaleX * 10, "black");
    if(c4 == 0){
        drawLine(scaleX * 1250, scaleY * 450, scaleX * 1250, scaleY * 550, "black", 4);
        
    }else{
        drawLine(scaleX * 1350, scaleY * 450, scaleX * 1350, scaleY * 550, "black", 4);
    }
    drawCircle(scaleX * 1650, scaleY * 500, scaleX * 10, "black");
    if(c5 == 1){
        drawLine(scaleX * 1600, scaleY * 450, scaleX * 1700, scaleY * 450, "black", 4);
        
    }else{
        drawLine(scaleX * 1600, scaleY * 550, scaleX * 1700, scaleY * 550, "black", 4);
    }
    drawCircle(scaleX * 1050, scaleY * 500, scaleX * 10, "black");
    if(c6 == 1){
        drawLine(scaleX * 1000, scaleY * 450, scaleX * 1000, scaleY * 550, "black", 4);
        
    }else{
        drawLine(scaleX * 1000, scaleY * 550, scaleX * 1100, scaleY * 550, "black", 4);
    }
    drawCircle(scaleX * 1050, scaleY * 800, scaleX * 10, "black");
    if(c7 == 1){
        drawLine(scaleX * 1100, scaleY * 750, scaleX * 1100, scaleY * 850, "black", 4);
        
    }else{
        drawLine(scaleX * 1000, scaleY * 750, scaleX * 1000, scaleY * 850, "black", 4);
    }
    
    //drawLine(scaleX * 1250, scaleY * 450, scaleX * 1250, scaleY * 550, "black", 4);
    //drawLine(scaleX * 1600, scaleY * 450, scaleX * 1700, scaleY * 450, "black", 4);
    //drawLine(scaleX * 1000, scaleY * 450, scaleX * 1000, scaleY * 550, "black", 4);
    //drawLine(scaleX * 650, scaleY * 450, scaleX * 650, scaleY * 550, "black", 4);
    //drawLine(scaleX * 1100, scaleY * 750, scaleX * 1100, scaleY * 850, "black", 4);

    drawLine(scaleX * 950, scaleY * 0, scaleX * 950, scaleY * 200, "black", 4);
    drawLine(scaleX * 1050, scaleY * 0, scaleX * 1050, scaleY * 200, "black", 4);
    drawLine(scaleX * 1050, scaleY * 200, scaleX * 1250, scaleY * 200, "black", 4);
    drawLine(scaleX * 950, scaleY * 300, scaleX * 1250, scaleY * 300, "black", 4);
    drawLine(scaleX * 650, scaleY * 300, scaleX * 1050, scaleY * 300, "black", 4);
    drawLine(scaleX * 950, scaleY * 200, scaleX * 550, scaleY * 200, "black", 4);

    drawCircle(scaleX * 490, scaleY * 250, scaleX * 40, "rgb(0,100,150)", scaleX * 10);

    drawLine(scaleX * 650, scaleY * 300, scaleX * 650, scaleY * 450, "black", 4);
    drawLine(scaleX * 550, scaleY * 300, scaleX * 550, scaleY * 750, "black", 4);
    drawLine(scaleX * 650, scaleY * 550, scaleX * 650, scaleY * 750, "black", 4);

    drawCircle(scaleX * 600, scaleY * 810, scaleX * 40, "rgb(100,150,0)", scaleX * 10);

    drawLine(scaleX * 650, scaleY * 450, scaleX * 880, scaleY * 450, "black", 4);
    drawLine(scaleX * 650, scaleY * 550, scaleX * 880, scaleY * 550, "black", 4);

    drawLine(scaleX * 1250, scaleY * 200, scaleX * 1350, scaleY * 200, "black", 4);
    drawLine(scaleX * 1250, scaleY * 300, scaleX * 1250, scaleY * 450, "black", 4);
    drawLine(scaleX * 1350, scaleY * 200, scaleX * 1350, scaleY * 450, "black", 4);

    drawLine(scaleX * 1250, scaleY * 450, scaleX * 1000, scaleY * 450, "black", 4);
    drawLine(scaleX * 1600, scaleY * 550, scaleX * 1100, scaleY * 550, "black", 4);

    drawLine(scaleX * 1100, scaleY * 550, scaleX * 1100, scaleY * 750, "black", 4);
    drawLine(scaleX * 1000, scaleY * 550, scaleX * 1000, scaleY * 750, "black", 4);

    drawLine(scaleX * 1000, scaleY * 850, scaleX * 1100, scaleY * 850, "black", 4);

    drawLine(scaleX * 1100, scaleY * 850, scaleX * 1250, scaleY * 850, "black", 4);
    drawLine(scaleX * 1100, scaleY * 750, scaleX * 1250, scaleY * 750, "black", 4);


    drawCircle(scaleX * 1300, scaleY * 800, scaleX * 40, "rgb(150,50,50)", scaleX * 10);

    drawLine(scaleX * 1000, scaleY * 850, scaleX * 670, scaleY * 850, "black", 4);
    drawLine(scaleX * 1000, scaleY * 750, scaleX * 670, scaleY * 750, "black", 4);

    drawLine(scaleX * 1350, scaleY * 450, scaleX * 1600, scaleY * 450, "black", 4);

    drawLine(scaleX * 1600, scaleY * 250, scaleX * 1600, scaleY * 450, "black", 4);
    drawLine(scaleX * 1600, scaleY * 750, scaleX * 1600, scaleY * 550, "black", 4);
    drawLine(scaleX * 1700, scaleY * 250, scaleX * 1700, scaleY * 750, "black", 4);

    drawCircle(scaleX * 940, scaleY * 500, scaleX * 40, "rgb(255,255,0)", scaleX * 10);
    drawCircle(scaleX * 1650, scaleY * 200, scaleX * 40, "rgb(255,0,255)", scaleX * 10);
    drawCircle(scaleX * 1650, scaleY * 800, scaleX * 40, "rgb(0,255,255)", scaleX * 10);

    //b1.y += 3;
    b1.draw();
    bv(b1);
    b2.draw();
    bv(b2);
    b3.draw();
    bv(b3);
    b4.draw();
    bv(b4);
    b5.draw();
    bv(b5);
    checkBallPosition(b1);
    checkBallPosition(b2);
    checkBallPosition(b3);
    checkBallPosition(b4);
    checkBallPosition(b5);
    ctx.font = '40px Arial'; // Set the font size and style
    ctx.fillStyle = 'black'; // Set the text color
    const text = 'Welcome to Multitasking Game'; // The text you want to display
    const scoreNumber = 'Score  : ';
    const liveNumber = 'Live  : ';
    const speed = 'Ball Speed : ';
    const x = 25; // Center the text horizontally
    const y = 30; // Adjust the vertical position as needed
    ctx.fillText(text, x, y); // Draw the text at the specified position
    ctx.fillText(scoreNumber, 1250, 100); // Draw the text at the specified position
    ctx.fillText(liveNumber, 1250, 300);
    ctx.fillText(score, 1400, 100); // Draw the text at the specified position
    ctx.fillText(live, 1370, 300);
    ctx.fillText(speed, 1250, 500); // Draw the text at the specified position
    ctx.fillText(start_v, 1480, 500);
    if (live === 0) {
        clearInterval(resetInterval); // Stop the reset interval
        window.location.href = `endGame.html?score=${score}`; // Redirect to end game page
        return; // Exit the animate function
    }
}

let resetInterval = setInterval(() => {
    processResetQueue(); 
}, 2500 - 10 * score );

function bv(ball){
    ball.y += ball.vy;
    ball.x += ball.vx;
}

animate();

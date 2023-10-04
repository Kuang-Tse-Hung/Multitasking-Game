 // Retrieve the high score from localStorage
 let highScore = parseInt(localStorage.getItem('highScore'))|| 0;
 document.getElementById('highScoreValue').innerText = highScore;

 const urlParams = new URLSearchParams(window.location.search);
 const score = parseInt(urlParams.get('score'));
 // Display the score
 document.getElementById('scoreValue').innerText = score;

 // Check if the current score is higher than the stored high score
 console.log(score);
 console.log(highScore);
 if (score > highScore) {
     //console.log("hihi");
     highScore = score;
     localStorage.setItem('highScore', highScore);
     document.getElementById('highScoreValue').innerText = highScore;
 }
 //console.log(highScore);

 playEndGameAudio();

 function restartGame() {
     // Redirect to the game page
     window.location.href = "index.html";
 }

let homeScoreboard = document.getElementById('homescoreboard');
let guestScoreboard = document.getElementById('guestscoreboard');


function updateHomeScore(scoreboard, points) {
    let currentScore = Number(scoreboard.innerHTML);
    let newScore = currentScore + points;
    scoreboard.innerHTML = newScore;
    }
function updateGuestScore(scoreboard, points) {
    let currentScore = Number(scoreboard.innerHTML);
    let newScore = currentScore + points;
    scoreboard.innerHTML = newScore;
    }
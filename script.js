const homeTeam = ["Ajax", "PSV", "Feyenoord", "Vitesse", "AZ", "Twente"];
const awayTeam = ["Dortmund", "Benfica", "Juventus", "Barcelona", "Liverpool", "Besiktas", "Inter"];
const score = ["0-0", "1-0", "0-1", "1-1", "2-1", "1-2", "2-2", "5-0", "0-5"];


function randomNumber(array) {
    const randomNumber = Math.floor(Math.random() * array.length);
    return randomNumber;
}

function selectMatch(array) {
    const homeTeam = array[randomNumber(array)];
    return homeTeam
}

function generateMatch() {
    const home = selectMatch(homeTeam);
    const away = selectMatch(awayTeam);
    const finalScore = selectMatch(score);
    console.log(`${home} played against ${away} and the final score was ${finalScore}`)
}

generateMatch();
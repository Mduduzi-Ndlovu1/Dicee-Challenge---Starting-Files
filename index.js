
document.getElementById("startButton").addEventListener("click",startGame);

function startGame () {
    const randomNum1 = Math.floor(Math.random() * 6) + 1;
const randomNum2 = Math.floor(Math.random() * 6) + 1;

const randomImg1 = "images/dice" + randomNum1 + ".png";

const randomImg2 = "images/dice" + randomNum2 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src",randomImg1);

document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

if (randomNum1 > randomNum2) {
        document.querySelector("h1").textContent = "Player 1 Wins"
    }
else if (randomNum1 < randomNum2) {
        document.querySelector("h1").textContent = "Player 2 Wins"
    }
else {
        document.querySelector("h1").textContent = "Its a Draw"
    }
}

var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;
function generateRandomImage(num1, num2) {
    document.querySelector(".p1 img").setAttribute("src", "./images/dice" + num1 + ".png");
    document.querySelector(".p2 img").setAttribute("src", "./images/dice" + num2 + ".png");
    if (num1 > num2) 
        { document.querySelector(".title").innerHTML = "Player 1 wins"; }
    else if(num2 > num1)
    {
        document.querySelector(".title").innerHTML = "Player 2 wins";
    }
    else
    {
        document.querySelector(".title").innerHTML = "Draw";
    }
}
generateRandomImage(num1, num2)
document.getElementById("refresh-btn").addEventListener("click", function () {
    window.location.reload();
});
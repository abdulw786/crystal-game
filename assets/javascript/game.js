//Selects a random number 
$(document).ready(function () {
    //The random number shown at the start of the game should be between 19 - 120.

    // var Random = Math.floor(Math.random() * 101 + 19)
    //  Decaring variables for tallies
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var random = Math.floor(Math.random() * 101 + 19);
    //get refrence
    $("#RandomNumber").text(random);
    $("#totalwins").text(wins);
    $("#totallosses").text(losses);


    function winner() {
        alert("You win");
        wins++
        $("#totalwins").text(wins);
        resetGame();
    }
    function lose() {
        alert("you lost");
        losses++;
        $("#totallosses").text(losses);
        resetGame();
    }
    var resetGame = function () {
        random = Math.floor(Math.random() * 101 + 19);
        totalScore = 0;
        $("#RandomNumber").text(random);
        $("#Guess").empty(totalScore);

        // }
    }
    //setting up the onclick function
    $(".crystals").on("click", function () {
        // Each crystal should have a random hidden value between 1 - 12.
        randomNumber = Math.floor(Math.random() * 12);
        totalScore = totalScore + randomNumber;
         $("#Guess").text(totalScore);
        if (totalScore === random) {
            winner();
            resetGame();
        } else if (totalScore > random) {
            lose();
            resetGame();
        }
    }); 
});

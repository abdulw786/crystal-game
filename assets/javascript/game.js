//Selects a random number 
$(document).ready(function () {
    //The random number shown at the start of the game should be between 19 - 120.
    var Random = Math.floor(Math.random() * 101 +19)
    $("#RandomNumber").text(Random);
    //  Decaring variables for tallies
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    //append to the html id
    $("#totalwins").text(wins);
    $("#totallosses").text(losses);


    function winner() {
        alert("You win");
        wins++
        $("#totalwins").text(wins);
        resetGame();

    }
    // increases the loss column whenever you loose  
    function lose() {
        alert("you lost");
        losses++;
        $("#totallosses").text(losses);
        resetGame();


    }var resetGame = function(){
        if (Totalscore =>randomNumber){
        $("#Guess").empty();
}}
    //setting up the onclick function
    $("#crystals").on("click", function () {
        // Each crystal should have a random hidden value between 1 - 12.
        randomNumber = Math.floor(Math.random() * 12);
        console.log(randomNumber);
        totalScore = totalScore + randomNumber;
        $("#Guess").text(totalScore);
        if (totalScore === Random) {
            winner();


        }
        else if (totalScore > Random) {
            lose();            


        }
    });
    resetGame();    


});

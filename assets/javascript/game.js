// Selects a random number to be shown at the start of the game
// Number should be should be between 19 - 120
var Random = Math.floor(Math.random() * 101 + 19)

// Appending random number to the number-to-guess id in the html doc
$('#number-to-guess').text(Random);

// Each image number should be between 1-12
var image1 = Math.floor(Math.random() * 11 + 1)
var image2 = Math.floor(Math.random() * 11 + 1)
var image3 = Math.floor(Math.random() * 11 + 1)
var image4 = Math.floor(Math.random() * 11 + 1)

var wins = 0;
var losses = 0;
var totalScore = 0;

//   Check ID in Html
$("#your-total-score-is").text(totalScore);

//list of all the global variables you want reset here
function ResetGlobalVariables() {

    Random = Math.floor(Math.random() * 101 + 19);
    console.log(Random)
    $('#number-to-guess').text(Random);
    totalScore = 0;
    image1 = Math.floor(Math.random() * 11 + 1);
    image2 = Math.floor(Math.random() * 11 + 1);
    image3 = Math.floor(Math.random() * 11 + 1);
    image4 = Math.floor(Math.random() * 11 + 1);
    

}

// Create a click function for each crystal using their separate IDs
$('#one').on('click', function () {
    totalScore = totalScore + image1;

    if (totalScore === Random) {
        wins++;
        ResetGlobalVariables();
        console.log("You won!");
    }

    if (totalScore >= Random) {
        losses++;
        ResetGlobalVariables();
        console.log("You lost!");
    }

    // Don't forget to input the html with the unit-4-game ID
    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.

    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Your Total Score is: " + totalScore + "</p>";



    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#unit-4-game").innerHTML = html;

    $('#two').on('click', function () {
        totalScore = totalScore + image2;

        if (totalScore === Random) {
            wins++;
            ResetGlobalVariables();
            console.log("You won!");
        }

        if (totalScore >= Random) {
            losses++;
            ResetGlobalVariables();
            console.log("You lost!");
        }

        var html =
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Your Total Score is: " + totalScore + "</p>";



        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#unit-4-game").innerHTML = html;

        $('#three').on('click', function () {
            totalScore = totalScore + image3;

            if (totalScore === Random) {
                wins++;
                ResetGlobalVariables();
                console.log("You won!");
            }

            if (totalScore >= Random) {
                losses++;
                ResetGlobalVariables();
                console.log("You lost!");
            }

            var html =
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Your Total Score is: " + totalScore + "</p>";



            // Set the inner HTML contents of the #game div to our html string
            document.querySelector("#unit-4-game").innerHTML = html;

            $('#four').on('click', function () {
                totalScore = totalScore + image4;

                if (totalScore === Random) {
                    wins++;
                    ResetGlobalVariables();
                    console.log("You won!");
                }

                if (totalScore >= Random) {
                    losses++;
                    ResetGlobalVariables();
                    console.log("You lost!");
                }



                var html =
                    "<p>Wins: " + wins + "</p>" +
                    "<p>Losses: " + losses + "</p>" +
                    "<p>Your Total Score is: " + totalScore + "</p>";



                // Set the inner HTML contents of the #game div to our html string
                document.querySelector("#unit-4-game").innerHTML = html;

            });

        });
    });
});





var targetNumber = 40;

  $("#number-to-guess").text(targetNumber);

  var counter = 0;

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  var numberOptions = [10, 6, 4, 5];
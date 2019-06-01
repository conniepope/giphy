//create an array of strings with a variable called "topics"

var topics = ["skydiving", "spelunking", "rock climbing", "scuba diving", "hang gliding", "surfing"]

// create buttons with the array of "topics"

for (var i = 0; i < topics.length; i++) {
    var adventureButtons = $("<button>");
    adventureButtons.addClass("advButtons").attr("data-name", topics[i]).text(topics[i]);
    $(".buttons").append(adventureButtons)
}


// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
$("button").on("click", function() {
    // getting and storing the data value from the button
    var activity = $(this).attr("data-name");
    // create a queryURL using the activity name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + activity + "&api_key=mUoRt2tkVvyg0eUh1M9as1Bk33Gn3aS0&limit=10";
    // use AJAX
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // then function
    .then(function(response){
        var results = response.data

        
    })

// // When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// // Under every gif, display its rating (PG, G, so on).
// //    * This data is provided by the GIPHY API.
// //    * Only once you get images displaying with button presses should you move on to the next step.

// // Add a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.

//___________ example to reference_______________
//       // After data comes back from the request
//       .then(function(response) {
//         console.log(queryURL);

//         console.log(response);
//         // storing the data from the AJAX request in the results variable
//         var results = response.data;

//         // Looping through each result item
//         for (var i = 0; i < results.length; i++) {

//           // Creating and storing a div tag
//           var animalDiv = $("<div>");

//           // Creating a paragraph tag with the result item's rating
//           var p = $("<p>").text("Rating: " + results[i].rating);

//           // Creating and storing an image tag
//           var animalImage = $("<img>");
//           // Setting the src attribute of the image to a property pulled off the result item
//           animalImage.attr("src", results[i].images.fixed_height.url);

//           // Appending the paragraph and image tag to the animalDiv
//           animalDiv.append(p);
//           animalDiv.append(animalImage);

//           // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
//           $("#gifs-appear-here").prepend(animalDiv);
//         }
//       });
//   });
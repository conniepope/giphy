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
        console.log(queryURL);
        console.log(response);

    // Looping through each result
        for (var i = 0; i < topics.length; i++) {
        // Creating a div tag with variable
            var adventure = $("<div>");
        // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating)
        // Creating an image tag with variable
            var photo = $("<img>")
        // Setting the src attribute of the image to a property pulled off the result item
            photo.attr("src", results[i].images.fixed_width_still.url)
            $(this).attr("data-state", "still");
            console.log(this)

        // Appending the paragraph and image tag to the div
            adventure.append(photo);
            adventure.append(p);     
        // Prependng the div to the HTML page in the ".pictures" div
            $(".pictures").prepend(adventure)

        // When the still image is clicked, it should animate. 

            // photo.on("click", function() {
            //     var state = $(this).attr("data-state");
            //     if ("data-state" === "still"){
            //         $(this).attr("src", results[i].images.fixed.width.url)
            //         $(this).attr("data-state", "animate");

            //         // user clicks the gif again, it should stop playing.
            //     } else {
            //         $(this).attr("src", results[i].images.fixed_width_still.url)
            //         $(this).attr("data-state", "still");

            //     }
            // })
        }
    })
});






//    * Only once you get images displaying with button presses should you move on to the next step.

// Add a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.


 
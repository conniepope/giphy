$( document ).ready(function() {

    //create an array of strings with a variable called "topics"

    var topics = ["skydiving", "spelunking", "rock climbing", "scuba diving", "hang gliding", "surfing"]

    // create buttons with the array of "topics"
    function displayButtons() {
        $(".buttons").empty();

        for (var i = 0; i < topics.length; i++) {
            var adventureButtons = $("<button>");
            adventureButtons.addClass("advButtons").attr("data-name", topics[i]).text(topics[i]);
            $(".buttons").append(adventureButtons)
        }
    }
    displayButtons();

    // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
    function createButtons() {
        $(".advButtons").on("click", function() {
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
            

            // Looping through each result
                for (var i = 0; i < results.length; i++) {
                // Creating a div tag with variable
                    var adventure = $("<div>");
                // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + results[i].rating)
                // Creating an image tag with variable
                    var photo = $("<img>")
                // Setting the src attribute of the image to a property pulled off the result item
                    photo.attr("src", results[i].images.fixed_width_still.url);
                    photo.attr("data-still", results[i].images.fixed_width_still.url);
                    photo.attr("data-animate",results[i].images.fixed_width.url);
                    photo.attr("data-state", "still");
                    photo.addClass("image");
                //save still and animate variables
            
                    // $(this).attr("data-still", results[i].images.fixed_width_still.url);
                    // $(this).attr("data-animate", results[i].images.fixed_width.url);
                    // $(this).attr("data-state", "still" )
                    // $(this).addClass("gif")

                    console.log(photo)

                // Appending the paragraph and image tag to the div
                    adventure.append(photo);
                    adventure.append(p);     
                // Prependng the div to the HTML page in the ".pictures" div
                    $(".pictures").prepend(adventure)

                // When the still image is clicked, it should be replaced with animate of the same dataset

                }

                $(".image").on("click", function() {
                    console.log("click")
                    var state = $(this).attr("data-state");
                    // "data-still" = photo.attr("src", results[i].images.fixed_width_still.url)
                    // "data-animate" = photo.attr("src", results[i].images.fixed_width.url)
                    if (state === "still"){
                        $(this).attr("src", $(this).data("animate"))
                        $(this).attr("data-state", "animate");

                    // user clicks the gif again, it should stop playing.
                    } else {
                        $(this).attr("src", $(this).data("still"))
                        $(this).attr("data-state", "still");

                    }
                })
            })
        });
    }
    // Add a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.
   $("#submit").on("click", function() {
        event.preventDefault();

        // take input value
        var input = $("input").val().trim();
        // and create a new button for it
        topics.push(input);
        displayButtons();
        createButtons();

   }) 





})
 
var url = "https://api.mongolab.com/api/1/databases/smart_tweet/collections/quotes?apiKey=dr473rVLCht9gesNAHYOMkI43FDkmGK9";
var apiRoot = '/api/v1/quotes/';

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

$(function() {

    $("#randomQuote").click(function() {
        console.log("click");
        randomQuotes();
    }); //close moreQuotes//


    $("#saveQuote").click(function() {
        addQuote();
        console.log("clicked!");

    });



    function randomQuotes() {
        $.ajax({
                url: apiRoot,
                type: 'GET',
                dataType: 'json',
                data: {
                    body: 'body',
                    author: 'author'
                },
            })
            .done(function(data) {
                console.log("randomQuotes.done hit");
                console.log(data);
                data = shuffle(data);
                console.log(data);
                console.log(data.body + " -" + data.author);
                $('#list').html("<li>" + data[0].body + " -" + data[0].author + "</li>");

            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            }); //close ajax get//

    }; //close showQuotes//



    function addQuote() {
        var author = $('#quoteAuthor').val();
        var body = $('#quoteBody').val();

        // console.log(author);
        console.log(body);

        $.ajax({
                url: apiRoot,
                type: 'POST',
                dataType: 'json',
                data: {
                    author: author,
                    body: body

                }
            })
            .done(function(data) {
                console.log("quote saved!");
                console.log(data);
                $('#quoteBody').val(" ");
                $('#quoteAuthor').val(" ");





            })
            .fail(function() {
                console.log("error");

            })
            .always(function() {
                // console.log("complete");
            }); //close ajax post//

    }; //close addQuote//



}); //close doc ready//

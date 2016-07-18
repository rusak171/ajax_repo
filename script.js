$("#search").keyup(function () {
    var searchValue = $("#search").val();
    var myRegExp = new RegExp(searchValue, "i");
    //console.log(searchValue);
    $.getJSON("data.json", function (data) {
        var output = '<ul class="searchresults">';
        $.each(data, function (key, val) {
            if (val.firstName.search(myRegExp) != -1
                    || val.lastName.search(myRegExp) != -1) {
                output += "<li>";
                output += "<h2>" + val.firstName + " " + val.lastName + "</h2>";
                output += '<img src="images/' + val.image + '" alt="' + val.lastName + '"/>';
                output += "<h4>" + val.instrument + "</h4>";
                output += "<p>" + val.text + "</p>";
                output += "</li>";
            }
        });
        output += "</ul>";
        $("#update").html(output);
    });
});


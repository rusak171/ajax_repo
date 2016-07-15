$.getJSON("data.json", function(data) {
    var output = "<ul>";
    $.each(data, function (key, val) {
        output += "<li>" + val.firstName + ' ' + val.lastName + "</li>";
    });
    output += "</ul>";
    //$('#update').html(output); //replase code
    //$('#update').append(output); //add code to the end
    $('#update').prepend(output); //add code to the begin
});
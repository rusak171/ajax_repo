var myButton = document.getElementById("loadbutton");
myButton.onclick = loadAJAX;

function loadAJAX() {
    var request;
//check for exist HAR-object
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open('GET', 'data.json'); //false => sync, true(default) => async
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var items = JSON.parse(request.responseText);
            var outputHTML = "<ul>";
            for (var key in items) {
                outputHTML += "<li>" + items[key].firstName + ' ' + items[key].lastName + "</li>";
            }
            outputHTML += "</ul";
            document.getElementById('update').innerHTML = outputHTML;
        }
    }
    request.send();

}
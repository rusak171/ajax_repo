var request;
//check for exist HAR-object
if(window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'data.xml'); //false => sync, true(default) => async
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        var modify = document.getElementById('update');
        var nodeArr = request.responseXML.getElementsByTagName('TITLE');
        var outputHTML = "<ul>";
        for(var i = 0; i < nodeArr.length; ++i) {
            outputHTML += "<li>" + nodeArr[i].firstChild.nodeValue + "</li>";
        }
        outputHTML += "</ul";
        modify.innerHTML = outputHTML;
    }
}
request.send();


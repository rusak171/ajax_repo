var request;
//check for exist HAR-object
if(window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'data.txt'); //false => sync, true(default) => async
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        var modify = document.getElementById("update");
        modify.innerHTML = request.responseText;        
    }
}
request.send();


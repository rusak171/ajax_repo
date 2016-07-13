var request = new XMLHttpRequest();
request.open('GET', 'data.txt', false); //false => sync, true(default) => async
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request);
        document.writeln(request.responseText);
    }
}
request.send();


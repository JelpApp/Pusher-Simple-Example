// Enable pusher logging - don't include this in production
Pusher.logToConsole = false;

// Identifying Buttons
var message = getId("message");
var btnGo = getId("btnGo");
var olList = getId("olItems");

// Functions
function getId(id) {
    return document.getElementById(id);
}

// Send Message
function sendMessage(message) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/message');
    //xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send("message=asdf");
    xhr.onload = function () {
        // TODO
    };

    xhr.onprogress = function (event) {
        // TODO
    };

    xhr.onerror = function () {
        // TODO
    };
}

//insert items
function insertItem(message) {
    newLI = document.createElement("li");
    newText = document.createTextNode(message);
    newLI.appendChild(newText);
    olList.appendChild(newLI);
}

// Init Pusher
var pusher = new Pusher('b4258bc489ab7ed787a5', {
    cluster: 'mt1',
    forceTLS: true
});

// Subrscription to channel
var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function (data) {
    alert(JSON.stringify(data.message));
    insertItem(data.message);
});

// On click button
btnGo.addEventListener("click", function () {
    console.log("Click: " + message.value);

    sendMessage(message.value);
});
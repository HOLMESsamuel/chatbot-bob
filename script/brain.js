const send = document.getElementById("send");
const reset = document.getElementById("reset");
var content = document.getElementById("content");
var message = document.getElementById("message");

send.addEventListener('click', function() {
    var message = document.getElementById("message").value;

    var userLine = document.createElement("p");
    userLine.setAttribute("class", "userLine");
    userLine.innerHTML = message;
    content.appendChild(userLine);

    var jump = document.createElement("span");
    jump.innerHTML = "<br><br>";
    content.appendChild(jump);

    var bobLine = document.createElement("p");
    bobLine.setAttribute("class", "bobLine");
    bobLine.innerHTML = "hello I am bob";
    content.appendChild(bobLine);

    var jump = document.createElement("span");
    jump.innerHTML = "<br><br>";
    content.appendChild(jump);

    //scroll down when something nex is written
    content.scrollTop = content.scrollHeight;


    document.getElementById("message").value = "";
});

//activate button send if user push the enter key when writing in message
message.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("send").click();
    }
});

reset.addEventListener('click', function() {
    content.innerHTML = "";
});


//below that line I am coding the chatbot part

var bot = new RiveScript();

bot.loadFile("script/brain.rive").then(brainReady).catch(brainError);

function brainReady() {
    console.log("Bob is ready !");
}

function brainError() {
    alert("There is an error with Rivescript");
}
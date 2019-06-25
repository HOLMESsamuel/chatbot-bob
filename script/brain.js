//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//between those lines I am preparing the chatbot 

var bot = new RiveScript();

bot.loadFile("script/brain.rive").then(brainReady).catch(brainError);

// All file loading operations are asynchronous, so you need handlers
// to catch when they've finished. If you use loadDirectory (or loadFile
// with multiple file names), the success function is called only when ALL
// the files have finished loading.
function brainReady() {
    console.log("Bob is ready !");
    bot.sortReplies(); //once every file is loaded replies need to be sorted
    let num = Math.floor(Math.random() * 20);
    let rep = bot.reply(username, "set " + num);
}

function brainError() {
    alert("There is an error with Rivescript");
}

// RiveScript remembers user data by their username and can tell
// multiple users apart.
let username = "local-user";

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


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
    content.appendChild(bobLine);

    bot.reply(username, message).then(function(reply) {

        bobLine.innerHTML = reply;
    });

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
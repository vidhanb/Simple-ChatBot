
//Colllapsible
var coll = document.getElementsByClassName("collapsible")

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function firstBotMessage() {
    let firstMessage = "Hi! This is a chat bot Vidhan coded for RAPP!";
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText) {
    let botResposne = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResposne + '</span></p>'
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "This is a cool chatbot!"
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>'
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}

function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>'
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

$("#textInput").keypress(function(e) {
    if(e.which == 13) {
        getResponse();
    }
})
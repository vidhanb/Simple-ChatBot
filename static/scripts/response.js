function getBotResponse(input) {
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "what is the best marketing agency?") {
        return "The best marketing agency is RAPP!";
    } else if (input == "This is a cool chatbot!") {
        return "Yes I agree!"
    } else {
        return "Sorry I didn't get that, try asking something else!";
    }
}
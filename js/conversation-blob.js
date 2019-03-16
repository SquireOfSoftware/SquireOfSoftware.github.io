function getConversation() {
    return [
        new ChatBurst(undefined,["hello world!","Tell me about some of the things you got up to"], AUTHORS.me),
        new ChatBurst(undefined,["There are a few projects which I have gotten myself involved over the years"], AUTHORS.you),
        new ChatBurst(undefined,
            ["The first is Orion Project that I first worked on at Uni",
            "In this project I helped coordinate about 24 other students in Automating the flight of a programmable drone"], 
            AUTHORS.you)
    ];
}

class ChatBurst {
    constructor(time = new Date(), chat = [], author = AUTHORS.me) {
        this.time = time;
        this.chat = chat;
        this.author = author;
    }
}

var AUTHORS = {
    you: "you",
    me: "me"
}
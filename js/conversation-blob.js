function getConversation() {
    return [
        new ChatBurst(undefined, chatBlock = ["hello world!","Tell me about some of the things you got up to"], author = AUTHORS.me),
        new ChatBurst(undefined,["There are a few projects which I have gotten myself involved over the years"], AUTHORS.you),
        new ChatBurst(undefined,
            ["The first is Orion Project that I first worked on at Uni",
            "In this project I helped coordinate about 24 other students in Automating the flight of a programmable drone"], 
            AUTHORS.you)
    ];
}

var AUTHORS = {
    you: "you",
    me: "me"
}

var CHAT_TYPE = {
    text: "text",
    photo: "photo",
    video: "video"
}

class ChatBurst {
    constructor(time = new Date(), chatBlock = [], author = AUTHORS.me) {
        this.time = time;
        this.chatBlock = chatBlock;
        this.author = author;
    }

    createBlurb() {
        let chatBurst = document.createElement(DIV);
        chatBurst.className = "chat-burst";

        console.log(this);

        this.chatBlock.forEach(sentence => {
            chatBurst.appendChild(this.createSentence(this.time, sentence, this.author));
        });
        return chatBurst;
    }

    createSentence(time, sentence, author, chatType) {
        let sentenceBlock = document.createElement(DIV);
        sentenceBlock.className = "bubble " +
            (author === AUTHORS.me ? "right-bubble me" : "left-bubble");
        sentenceBlock.innerText = sentence;
        return sentenceBlock;
    }
}

class ChatBlock {
    constructor(chatType = CHAT_TYPE.text, messageFunction = () => {}) {
        this.chatType = chatType;
        this.messageFunction = messageFunction;
    }
}


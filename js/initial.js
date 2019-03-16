console.log("hello world");
const DIV = "div";

const CONVERSATION = getConversation();

const CHATBOX = document.getElementById("chatbox");

CONVERSATION.forEach(chat => {
    let blurb = createBlurb(chat);
    CHATBOX.appendChild(blurb);
})

// me being the person who is type, you is joseph
function createBlurb(chat = undefined) {
    let blurb = document.createElement(DIV);
    blurb.className = "blurb";
    if (chat != undefined) {
        if (chat.author === AUTHORS.you) {
            blurb.appendChild(createProfilePic());
        }

        let chatBurst = document.createElement(DIV);
        chatBurst.className = "chat-burst";
        
        chat.chat.forEach(sentence => {
            chatBurst.appendChild(createSentence(chat.time, sentence, chat.author));
        });
        blurb.appendChild(chatBurst);
    }
    return blurb;
}

function createProfilePic() {
    let profilePic = document.createElement("img");
    profilePic.src = "img/profile-picture.png";
    profilePic.className = "profile-picture";
    return profilePic;
}

function createSentence(time, sentence, author) {
    let sentenceBlock = document.createElement(DIV);
    sentenceBlock.className = "bubble " + 
        (author === AUTHORS.me ? "right-bubble me" : "left-bubble");
    sentenceBlock.innerText = sentence;
    return sentenceBlock;
}
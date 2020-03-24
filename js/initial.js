console.log("hello world");
const DIV = "div";
const IMG = "img";

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

        let chatBurst = chat.createBlurb();
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

window.onload = function() {
    console.log(document.getElementById("chatbox").scrollTop);
    document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
    console.log(document.getElementById("chatbox").scrollTop);
}
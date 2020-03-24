function getConversation() {
    return [
        new ChatBurst(
            undefined,
            [
                new TextChatBlock(() => "hello world!", AUTHORS.me),
                new TextChatBlock(() => "Tell me about some of the things you got up to", AUTHORS.me)
            ],
            author = AUTHORS.me),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock(() => "There are a few projects which I have gotten myself involved over the years", AUTHORS.you)
            ],
            AUTHORS.you),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock(() => "The first is Orion Project that I first worked on at Uni", AUTHORS.you),
                new TextChatBlock(() => "In this project I helped coordinate about 24 other students in Automating the flight of a programmable drone", AUTHORS.you),
                new ImageChatBlock(
                "Orion gallery",
                [
                    new Image(
                        "https://www.parrot.com/files/s3fs-public/styles/se_block_thumbnail/public/ar_drone_power_edition_orange.png?itok=kbpTR9VK",
                        "https://www.parrot.com/files/s3fs-public/styles/product_teaser_hightlight/public/ar_drone_power_edition_orange.png?itok=mMioXD5X",
                        "The aim of the project is to have a Parrot AR Drone (picture taken from the official website) fly autonomously " +
                         "(that is, without any human directives apart from mapping a route)."
                    )
                ],
                AUTHORS.you)
            ],
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
    constructor(time = new Date(), chatBlocks = [], author = AUTHORS.me) {
        this.time = time;
        this.chatBlocks = chatBlocks;
        this.author = author;
    }

    createBlurb() {
        let chatBurst = document.createElement(DIV);
        chatBurst.className = "chat-burst";

        console.log(this);

        this.chatBlocks.forEach(chatBlock => {
            chatBurst.appendChild(chatBlock.createBlock());
        });
        return chatBurst;
    }
}

class ChatBlock {
    constructor(chatType = CHAT_TYPE.text, author) {
        this.chatType = chatType;
        this.author = author;
    }

    createBlock() {}
}

class TextChatBlock extends ChatBlock {
    constructor(messageFunction = () => {}, author) {
        super(CHAT_TYPE.text, author);
        this.messageFunction = messageFunction;
    }

    createBlock() {
        let sentenceBlock = document.createElement(DIV);
        sentenceBlock.className = "bubble " +
            (this.author === AUTHORS.me ? "right-bubble me" : "left-bubble") +
            " " + this.chatType;
        sentenceBlock.innerText = this.messageFunction();
        return sentenceBlock;
    }
}

class Image {
    constructor(thumbnailURL, mainImageURL, blurb, clickHandler = () => {}) {
        this.thumbnailURL = thumbnailURL !== undefined? thumbnailURL : mainImageURL;
        this.mainImageURL = mainImageURL;
        this.blurb = blurb;
    }

    createThumbnail() {
        let imageBlock = document.createElement(IMG);
        imageBlock.src = this.thumbnailURL;
        imageBlock.className = "clickableImage";
        return imageBlock;
    }

    createMainImage() {
        let imageBlock = document.createElement(IMG);
        imageBlock.src = this.mainImageURL;
        return imageBlock;
    }
}

class ImageChatBlock extends ChatBlock {
    constructor(title, images, clickHandler, author) {
        super(CHAT_TYPE.photo, author);
        this.title = title;
        this.images = images;
        this.clickHandler = clickHandler;
    }

    createBlock() {
        let imageChatBlock = document.createElement(DIV);
        for(let i = 0; i < this.images.length; i++) {
            let imageBlock = this.images[i].createThumbnail();
            imageBlock.onclick = () => {
                setGallery(this.title, this.images, i);
            };
            imageBlock.className = "clickableImage";
            imageChatBlock.appendChild(imageBlock);
        }
        return imageChatBlock;
    }
}

class Video {
    constructor(thumbnailURL, mainVideoURL, blurb, clickHandler = () => {}) {
        this.thumbnailURL = thumbnailURL;
        this.mainVideoURL = mainVideoURL;
        this.blurb = blurb;
        this.clickHandler = clickHandler;
    }

    createThumbnail() {
        let thumbnailBlock = document.createElement(IMG);
        thumbnailBlock.className = "clickableImage";
        thumbnailBlock.src = this.thumbnailURL;
        thumbnailBlock.onclick = this.clickHandler;
        return thumbnailBlock;
    }
}
function getConversation() {
    return [
        new ChatBurst(
            undefined,
            [
                new TextChatBlock(() => "hello world!"),
                new TextChatBlock(() => "Tell me about some of the things you got up to")
            ],
            author = AUTHORS.me),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock(() => "There are a few projects which I have gotten myself involved over the years")
            ],
            AUTHORS.you),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock(() => "The first is Orion Project that I first worked on at Uni"),
                new TextChatBlock(() => "In this project I helped coordinate about 24 other students in Automating the flight of a programmable drone"),
                new TextChatBlock(() => "The aim of the project is to have a Parrot AR Drone (picture taken from the official website) fly autonomously " +
                                         "(that is, without any human directives apart from mapping a route)."),
                new ImageChatBlock(
                    "Orion gallery",
                    [
                        new Image(
                            "https://www.parrot.com/files/s3fs-public/styles/se_block_thumbnail/public/ar_drone_power_edition_orange.png?itok=kbpTR9VK",
                            "https://www.parrot.com/files/s3fs-public/styles/product_teaser_hightlight/public/ar_drone_power_edition_orange.png?itok=mMioXD5X",
                            "This is the programmable drone that we were to use, we named it 'Sputnik'"
                        )
                    ]),
                new TextChatBlock(() => "We had an Angular JS front end (version 1)")
            ],
            AUTHORS.you),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock(() => "Ah cool, so what did you guys use to build the System?")
            ],
            AUTHORS.me
        ),
        new ChatBurst(
            undefined,
            [
                new ImageChatBlock(
                    "System design",
                    [
                        new Image(
                            undefined,
                            "img/Orion Infrastructure Diagram.png",
                            "This is the initial architecture that we designed"
                        ),
                        new Image(
                            undefined,
                            "img/Orion System Design.png",
                            "This is the design that we ended up following"
                        )
                    ]),
                new TextChatBlock(() => "We used Angular JS front end (version 1) for our client front end"),
                new TextChatBlock(() => "We used Django as our front end, backend which would centralise the web API calls to the database"),
                new TextChatBlock(() => "Follow by a MySQL database as the main communication channel, between the web API calls and the asynchronous drone control back end"),
                new TextChatBlock(() => "With ROS (Robot Operating System) as our drone control sub-system"),
                new TextChatBlock(() => "And some on board shell scripts running on the Drone to enable the pull and pushing of notifications")
            ],
            AUTHORS.you
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock(() => "Wow that sounds like a really large project."),
                new TextChatBlock(() => "What role did you play in this?")
            ],
            AUTHORS.me
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock(() => "Yeah it was a pretty large project, there were 25 people to be exact."),
                new TextChatBlock(() => "I play the project manager role and coordinated the project and liaised with the customer to get further details.")
            ],
            AUTHORS.you
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock(() => "Haha wow, did you guys manage to meet your targets?")
            ],
            AUTHORS.me
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock(() => "We just barely managed to get a demonstration up and running. You can see in the video below <Insert video here>"),
                new TextChatBlock(() => "If you want to have a read of our source code, you can read it here:"),
                new LinkChatBlock(() => "https://github.com/SquireOfSoftware/Orion")
            ],
            AUTHORS.you
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock(() => "I read on your resume that you have worked with a some Machine learning and neural networks"),
                new TextChatBlock(() => "Can you tell me about that project?")
            ],
            AUTHORS.me
        )
    ];
}

var AUTHORS = {
    you: "you",
    me: "me"
}

var CHAT_TYPE = {
    text: "text",
    photo: "photo",
    video: "video",
    link: "link"
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
            chatBurst.appendChild(chatBlock.createBlock(this.author));
        });
        return chatBurst;
    }
}

class ChatBlock {
    constructor(chatType = CHAT_TYPE.text, author) {
        this.chatType = chatType;
    }

    createBlock(author = AUTHORS.me) {}
}

class LinkChatBlock extends ChatBlock {
    constructor(externalURL, linkText) {
        super(CHAT_TYPE.link);
        this.externalURL = externalURL;
    }

    createBlock(author = AUTHORS.me) {
        let sentenceBlock = document.createElement(DIV);
        sentenceBlock.className = "bubble " +
            (author === AUTHORS.me ? "right-bubble me" : "left-bubble") +
            " " + this.chatType;

        let linkBlock = document.createElement(LINK);
        linkBlock.href = this.externalURL();
        linkBlock.target = "_blank";
        linkBlock.innerText = this.linkText === undefined ? this.externalURL() : this.linkText;

        sentenceBlock.appendChild(linkBlock);

        return sentenceBlock;
    }
}

class TextChatBlock extends ChatBlock {
    constructor(messageFunction = () => {}) {
        super(CHAT_TYPE.text);
        this.messageFunction = messageFunction;
    }

    createBlock(author = AUTHORS.me) {
        let sentenceBlock = document.createElement(DIV);
        sentenceBlock.className = "bubble " +
            (author === AUTHORS.me ? "right-bubble me" : "left-bubble") +
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

    getMainImageURL() {
        return this.mainImageURL;
    }

    getBlurb() {
        return this.blurb;
    }
}

class ImageChatBlock extends ChatBlock {
    constructor(title, images, clickHandler, author) {
        super(CHAT_TYPE.photo, author);
        this.title = title;
        this.images = images;
        this.clickHandler = clickHandler;
    }

    createBlock(author = AUTHORS.me) {
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

    createBlock(author = AUTHORS.me) {

    }
}
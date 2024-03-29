function getConversation() {
    return [
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("hello world!"),
                new TextChatBlock("Tell me about some of the things you got up to")
            ],
            author = AUTHORS.me),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("There are a few projects which I have gotten myself involved over the years")
            ],
            AUTHORS.you),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("The first is 'Orion' Project that I first worked on at Uni"),
                new TextChatBlock("In this project I helped coordinate about 24 other students in Automating the flight of a programmable drone"),
                new TextChatBlock("The aim of the project is to have a Parrot AR Drone (picture taken from the official website) fly autonomously " +
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
                new TextChatBlock("We had an Angular JS front end (version 1)")
            ],
            AUTHORS.you),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("Ah cool, so what did you guys use to build the System?")
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
                            "/archived/v1/img/Orion/Orion Infrastructure Diagram.png",
                            "This is the initial architecture that we designed"
                        ),
                        new Image(
                            undefined,
                            "/archived/v1/img/Orion/Orion System Design.png",
                            "This is the design that we ended up following"
                        )
                    ]),
                new TextChatBlock("We used Angular JS front end (version 1) for our client front end"),
                new TextChatBlock("We used Django as our front end, backend which would centralise the web API calls to the database"),
                new TextChatBlock("Followed by a MySQL database as the main communication channel, between the web API calls and the asynchronous drone control back end"),
                new TextChatBlock("With ROS (Robot Operating System) as our drone control sub-system"),
                new TextChatBlock("And some on board shell scripts running on the Drone to enable the pull and pushing of notifications")
            ],
            AUTHORS.you
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("In essence, we had the Django server submitting a 'mission' into the database and then constantly poll the database for updates."),
                new TextChatBlock("When a 'mission' was running or in progress, a ROS (Robot Operating System) process would constantly poll for an in progress 'mission' and have a drone follow the flight path laid out."),
                new TextChatBlock("All the while it is receiving photos from the drone as it flies around and storing in the database."),
                new TextChatBlock("The Django server would pick up the photos and display them to the user as the drone flies around.")
            ],
            AUTHORS.you
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("Wow that sounds like a really large and complex project."),
                new TextChatBlock("What role did you play in this?")
            ],
            AUTHORS.me
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("Yeah it was a pretty large project, there were 25 people to be exact."),
                new TextChatBlock("I play the project manager role and coordinated the project and liaised with the customer to get further details.")
            ],
            AUTHORS.you
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("Haha wow, did you guys manage to meet your targets?")
            ],
            AUTHORS.me
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("We just barely managed to get a demonstration up and running. You can see in the video below:"),
                new VideoChatBlock(
                    [
                        new Video(
                            "https://img.youtube.com/vi/wsdGvWEk0LM/1.jpg",
                            "https://www.youtube.com/watch?v=wsdGvWEk0LM&list=PLFE1soEirSeYSN21s1mMcTJl_1ayu5DAi&index=10&t=0s",
                            '<iframe width="560" height="315" src="https://www.youtube.com/embed/wsdGvWEk0LM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                            "This is our final presentation"
                        )
                    ]),
                new TextChatBlock("If you want to have a read of our source code, you can read it here:"),
                new LinkChatBlock("https://github.com/SquireOfSoftware/Orion"),
                new TextChatBlock("And our full video playlist of some of the stuff we tinkered with:"),
                new LinkChatBlock("https://www.youtube.com/playlist?list=PLFE1soEirSeYSN21s1mMcTJl_1ayu5DAi")
            ],
            AUTHORS.you
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("I read on your resume that you have worked with a some Machine learning and neural networks"),
                new TextChatBlock("Can you tell me about that project?")
            ],
            AUTHORS.me
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("Sure. Here is the link:"),
                new LinkChatBlock("https://github.com/SquireOfSoftware/NNFL/tree/master/Project"),
                new TextChatBlock("So basically this is a Matlab project where (as a team of 3) we had to find a use case for a neural network and develop a solution to it using Matlab"),
                new TextChatBlock("My group opted for a hand controlled music player, where we would make hand gestures and have the music player respond accordingly")
            ],
            AUTHORS.you
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("This came with a lot of challenges:"),
                new TextChatBlock("The first was identifying what our inputs and outputs would be (which turned out to be the raw positioning of all 5 fingers for 60 seconds, which comes out at about 300 data input points per recording (+ 1 additional input for the bias node))"),
                new TextChatBlock("The second was identifying which neural network type we would use (given our lack of understanding we opted for a back propagation network)"),
                new TextChatBlock("The third was identifying the activation function that we would use, we used a sigmoid function"),
                new TextChatBlock("The last challenge was obtaining 'enough' data to determine ")
            ],
            AUTHORS.you
        ),
        new ChatBurst(
            undefined,
            [
                new ImageChatBlock(
                    "Hand Controlled Music Player",
                    [
                        new Image(
                            undefined,
                            "https://raw.githubusercontent.com/SquireOfSoftware/NNFL/master/Project/graphs/100%20neurons%20200%20cycles%200-01%20n.png",
                            "This is a sample of the learning curve of the network"
                        ),
                        new Image(
                            undefined,
                            "/archived/v1/img/Neural Network/Sample Neural Network capture.gif",
                            "This is a sample capture of a handle gesture swiping right"
                        )
                    ]
                ),
                new TextChatBlock("We used LeapMotion to record hand gestures (which is 3 infrared sensors stitched together to triangulate rough 3 dimensional coordinates for anything that inside its sensor range)")
            ],
            AUTHORS.you
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("That's cool"),
                new TextChatBlock("So what did you learn from the project?")
            ],
            AUTHORS.me
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("Here are some of the slides from our presentation"),
                new ImageChatBlock(
                    "Neural Network presentation",
                    [
                        new Image(
                            undefined,
                            "/archived/v1/img/Neural Network/Neural Network design.png",
                            ""
                        ),
                        new Image(
                            undefined,
                            "/archived/v1/img/Neural Network/Neural Network implementation.png",
                            ""
                        ),
                        new Image(
                            undefined,
                            "/archived/v1/img/Neural Network/Training progress.png",
                            ""
                        ),
                        new Image(
                            undefined,
                            "/archived/v1/img/Neural Network/Training results.png",
                            ""
                        ),
                        new Image(
                            undefined,
                            "/archived/v1/img/Neural Network/Training results 2.png",
                            ""
                        ),
                        new Image(
                            undefined,
                            "/archived/v1/img/Neural Network/Lessons learnt.png",
                            ""
                        ),
                        new Image(
                            undefined,
                            "/archived/v1/img/Neural Network/Reflections.png",
                            ""
                        )
                    ]
                ),
                new TextChatBlock("We got it up to about a 47.5% recognition accuracy across 4 gestures.")
            ],
            AUTHORS.you
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("Wow, are there any extra curricular work that you have worked on?")
            ],
            AUTHORS.me
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("There is one project that I have worked on outside of work and university:"),
                new ImageChatBlock(
                    "JSPets",
                    [
                        new Image(
                            undefined,
                            "/archived/v1/img/JSPets/JSPets.gif",
                            "Here is a rough sample of what you can do"
                        )
                    ]
                ),
                new LinkChatBlock("https://squireofsoftware.github.io/JSPets/"),
                new TextChatBlock("This is just my attempt at recreating a digivice/tamagotchi in HTML5 with vanilla Javascript ECMA 6"),
                new TextChatBlock("The game follows a duckling which you can 'walk with' by tapping the screen and explore the wonderful world of Tasmania and 'battle' native animals that you encounter"),
                new TextChatBlock("As it stands it is minimally complete, there are a lot of other features which were never implemented, this includes:"),
                new TextChatBlock("- sound"),
                new TextChatBlock("- tweaking the user experience to make it nicer to play"),
                new TextChatBlock("It took me about 3 months to create all the sprites, research the Tasmanian fauna and weather patterns (to make sure that you encounter weather dependent animals) and learn enough about the Javascript browser loop and hook all of it up"),
                new TextChatBlock("And"),
                new LinkChatBlock("https://squireofsoftware.github.io/JSJax/"),
                new TextChatBlock("This is just a quick go at using Angular 1 (it was the only one available at the time) to recreate a card game in the browser using Angular bidirectional state management")
            ],
            AUTHORS.you
        ),
        new ChatBurst(
            undefined,
            [
                new TextChatBlock("Wow that cool, thanks for letting me know")
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
        let chatBlock = document.createElement(DIV);
        chatBlock.className = "bubble " +
            (author === AUTHORS.me ? "right-bubble me" : "left-bubble") +
            " " + this.chatType;

        let linkBlock = document.createElement(LINK);
        linkBlock.href = this.externalURL;
        linkBlock.target = "_blank";
        linkBlock.innerText = this.linkText === undefined ? this.externalURL : this.linkText;

        chatBlock.appendChild(linkBlock);

        return chatBlock;
    }
}

class TextChatBlock extends ChatBlock {
    constructor(message) {
        super(CHAT_TYPE.text);
        this.message = message;
    }

    createBlock(author = AUTHORS.me) {
        let chatBlock = document.createElement(DIV);
        chatBlock.className = "bubble " +
            (author === AUTHORS.me ? "right-bubble me" : "left-bubble") +
            " " + this.chatType;
        chatBlock.innerText = this.message;
        return chatBlock;
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
    constructor(thumbnailURL, mainVideoURL, iframe, blurb) {
        this.thumbnailURL = thumbnailURL;
        this.mainVideoURL = mainVideoURL;
        this.iframe = iframe;
        this.blurb = blurb;
    }

    createThumbnail() {
        let thumbnailImage = document.createElement(IMG);
        thumbnailImage.className = "clickableImage video-thumbnail-image";
        thumbnailImage.src = this.thumbnailURL;
        thumbnailImage.onclick = () => {};
        return thumbnailImage;
    }

    createOverlayPlayButton() {
        let thumbnailOverlay = document.createElement(LINK);

        thumbnailOverlay.className = "thumbnail-overlay";

        let playButton = document.createElement(SPAN);
        playButton.className = "fa fa-lg fa-play icon";
        thumbnailOverlay.append(playButton);
        thumbnailOverlay.href = this.mainVideoURL;
        thumbnailOverlay.target = "_blank";

        return thumbnailOverlay;
    }

    createThumbnailBlurb() {
        let thumbnailBlurb = document.createElement(DIV);
        thumbnailBlurb.innerText = this.blurb;
        thumbnailBlurb.className = "thumbnail-blurb";

        return thumbnailBlurb;
    }

    createBlock(author = AUTHORS.me) {
        let thumbnailBlock = document.createElement(DIV);

        let thumbnail = document.createElement(DIV);
        thumbnail.className = "thumbnail-block";

        console.log(this);
        thumbnail.appendChild(this.createThumbnail());

        thumbnail.appendChild(this.createOverlayPlayButton());

        thumbnailBlock.className = "thumbnail-block";
        thumbnailBlock.appendChild(thumbnail);
        thumbnailBlock.appendChild(this.createThumbnailBlurb());

        return thumbnailBlock;
    }

    createIframe(author = AUTHORS.me) {
        return new DOMParser().parseFromString(this.iframe, "text/xml");
    }
}

class VideoChatBlock extends ChatBlock {
    constructor(videos = []) {
        super(CHAT_TYPE.video);
        this.videos = videos;
    }

    createBlock(author = AUTHORS.me) {
        let chatBlock = document.createElement(DIV);
        chatBlock.className = "bubble " +
            (author === AUTHORS.me ? "right-bubble me" : "left-bubble") +
            " " + this.chatType;

        this.videos.forEach(video => {
            chatBlock.appendChild(video.createBlock(author));
        });

        return chatBlock;
    }
}
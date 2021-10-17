// gallery-overlay
// gallery-scroll
// previous-gallery-item
// current-gallery-item
// next-gallery-item

const GALLERY_OVERLAY = "gallery-overlay";
const GALLERY_SCROLL = "gallery-scroll";
const GALLERY_PREV_ITEM = "previous-gallery-item";
const GALLERY_NEXT_ITEM = "next-gallery-item";
const GALLERY_CURRENT_PICTURE = "current-gallery-picture";
const GALLERY_CURRENT_BLURB = "current-gallery-text";
const GALLERY_TITLE = "gallery-title";
const BUTTON_DISABLED_CSS = "button-disabled";

function setGallery(title = "Gallery", images = [], index = 0) {
    let galleryOverlay = document.getElementById(GALLERY_OVERLAY);
    if (galleryOverlay.style.display === "" ||
        galleryOverlay.style.display === "none") {
        document.getElementById(GALLERY_TITLE).innerText = title;

        setNewMainImage(images, index);

        setGalleryListing(images);

        galleryOverlay.style.display = "inherit";
    }
}

function setNavigationArrows(images = [], index = 0) {
    let previousItem = document.getElementById(GALLERY_PREV_ITEM);
    let nextItem = document.getElementById(GALLERY_NEXT_ITEM);

    if (index === 0) {
        previousItem.classList.add(BUTTON_DISABLED_CSS);
        previousItem.onclick = () => {};
    } else if (images.length > 1) {
        previousItem.classList.remove(BUTTON_DISABLED_CSS);
        previousItem.onclick = () => {
            setNewMainImage(images, index - 1);
        };
    }

    if (images.length === 0) {
        nextItem.classList.add(BUTTON_DISABLED_CSS);
        nextItem.onclick = () => {};
    } else if (index < images.length) {
        nextItem.classList.remove(BUTTON_DISABLED_CSS);
        nextItem.onclick = () => {
            setNewMainImage(images, index + 1);
        };
    }
}

function setMainImage(images = [], index = 0) {
    let mainGalleryPicture = document.getElementById(GALLERY_CURRENT_PICTURE);

    let currentImageURL = images[index].getMainImageURL();
    mainGalleryPicture.src = currentImageURL;

    let mainGalleryBlurb = document.getElementById(GALLERY_CURRENT_BLURB);
    mainGalleryBlurb.innerText = images[index].getBlurb();
}

function setNewMainImage(images = [], index = 0) {
    setMainImage(images, index);
    setNavigationArrows(images, index);
}

function setGalleryListing(images = [], index = 0) {
    let galleryListing = document.getElementById(GALLERY_SCROLL);

    while (galleryListing.lastElementChild) {
        galleryListing.removeChild(galleryListing.lastElementChild);
    }

    images.forEach((imageBlock, index) => {
        let image = imageBlock.createThumbnail();
        image.onclick = () => {
            setNewMainImage(images, index);
        };
        galleryListing.appendChild(image);
    });

    galleryListing.children[index].scrollIntoView();
}
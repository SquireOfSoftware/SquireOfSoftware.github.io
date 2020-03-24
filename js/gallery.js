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

function setGallery(title = "Gallery", images = [], index = 0) {
    let galleryOverlay = document.getElementById(GALLERY_OVERLAY);
    if (galleryOverlay.style.display === "" ||
        galleryOverlay.style.display === "none") {
        document.getElementById(GALLERY_TITLE).innerText = title;

        setMainImage(images, index);

        setGalleryListing(images);

        galleryOverlay.style.display = "inherit";
    }
}

function setMainImage(images = [], index = 0) {
    let mainGalleryPicture = document.getElementById(GALLERY_CURRENT_PICTURE);

    if (mainGalleryPicture.children.length > 0) {
        mainGalleryPicture.removeChild(mainGalleryPicture.lastElementChild);
    }

    let currentImage = images[index].createMainImage();
    mainGalleryPicture.appendChild(currentImage);

    let mainGalleryBlurb = document.getElementById(GALLERY_CURRENT_BLURB);
    mainGalleryBlurb.innerText = images[index].getBlurb();
}

function setGalleryListing(images = [], index = 0) {
    let galleryListing = document.getElementById(GALLERY_SCROLL);

    while (galleryListing.lastElementChild) {
        galleryListing.removeChild(galleryListing.lastElementChild);
    }

    images.forEach((imageBlock, index) => {
        let image = imageBlock.createThumbnail();
        image.onclick = () => {
            setMainImage(images, index);
        };
        galleryListing.appendChild(image);
    });

    galleryListing.children[index].scrollIntoView();
}
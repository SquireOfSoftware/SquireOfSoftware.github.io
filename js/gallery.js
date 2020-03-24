// gallery-overlay
// gallery-scroll
// previous-gallery-item
// current-gallery-item
// next-gallery-item

const GALLERY_OVERLAY = "gallery-overlay";
const GALLERY_SCROLL = "gallery-scroll";
const GALLERY_PREV_ITEM = "previous-gallery-item";
const GALLERY_NEXT_ITEM = "next-gallery-item";
const GALLERY_CURRENT_ITEM = "current-gallery-item";
const GALLERY_TITLE = "gallery-title";

function setGallery(title = "Gallery", images = [], index = 0) {
    let galleryOverlay = document.getElementById(GALLERY_OVERLAY);
    if (galleryOverlay.style.display === "" ||
        galleryOverlay.style.display === "none") {

        document.getElementById(GALLERY_TITLE).innerText = title;
        console.log(images);

        let galleryListing = document.getElementById(GALLERY_SCROLL);

        while (galleryListing.lastElementChild) {
            galleryListing.removeChild(galleryListing.lastElementChild);
        }

        images.forEach(imageBlock => {
            let image = imageBlock.createImage();
            image.onclick = () => {
                console.log("test");
            };
            galleryListing.appendChild(image);
        });
        galleryOverlay.style.display = "inherit";
    }
}
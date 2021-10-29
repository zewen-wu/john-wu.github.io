
function scroll_to_image(e) {
    if (e.target == this) {
        this.scrollIntoView({ behavior: "smooth", block: "center" });
        this.removeEventListener(e.type, scroll_to_image);
    }
}

function toggle_image(e) {
    const image_clicked = e.target;
    const image_wrapper = image_clicked.parentElement;

    if (image_clicked.style.opacity == "0") return;

    if (!image_wrapper.classList.contains("expanded-wrapper")) {
        const image_height = image_clicked.height;
        const image_width = image_clicked.width;

        const viewport_height = window.innerHeight*0.8;
        const viewport_width = window.innerWidth*0.8;

        const height_ratio = image_height/viewport_height;
        const width_ratio = image_width/viewport_width;

        const aspect_ratio = image_height/image_width;

        var new_wrapper_height, new_wrapper_width, new_image_height, new_image_width, new_wrapper_margin;

        if (height_ratio > width_ratio) {
            new_wrapper_height = viewport_height + "px";
            new_wrapper_width = viewport_height/aspect_ratio + "px";
            new_wrapper_margin = (viewport_width - viewport_height/aspect_ratio)/2 + "px";
            
            new_image_height = "100%";
            new_image_width = "auto";
        } else {
            new_wrapper_height = viewport_width*aspect_ratio + "px";
            new_wrapper_width = viewport_width + "px";
            new_wrapper_margin = "0px";
            
            new_image_height = "auto";
            new_image_width = "100%";
        }

        document.documentElement.style.setProperty("--expanded-wrapper-height", new_wrapper_height);
        document.documentElement.style.setProperty("--expanded-wrapper-width", new_wrapper_width);
        document.documentElement.style.setProperty("--expanded-image-height", new_image_height);
        document.documentElement.style.setProperty("--expanded-image-width", new_image_width);
        document.documentElement.style.setProperty("--expanded-wrapper-margin", new_wrapper_margin);

        image_wrapper.addEventListener("transitionend", scroll_to_image);
    }

    image_wrapper.classList.toggle("expanded-wrapper");
    image_clicked.classList.toggle("expanded-image");

    images.forEach(image => {
        if(image != image_clicked) {
        image.style.opacity != "0" ? image.style.opacity = "0" : image.style.opacity = "1";
    }});
};

const gallery_body = document.querySelector(".photo-wrap-before");
gallery_body.classList.add("photo-wrap-after")

const images = document.querySelectorAll(".image");
images.forEach(image => image.addEventListener("click", toggle_image));
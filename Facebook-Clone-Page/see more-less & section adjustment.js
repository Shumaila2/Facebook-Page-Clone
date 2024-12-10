function toggleOverflow() {
    var aboutSection = document.getElementById("about-section");
    var photoSection = document.querySelectorAll(".photo-section");
    var videoSection = document.querySelectorAll(".video-section");
    var lastSections = document.querySelectorAll(".page-transparency-section");
    var paragraph = document.querySelector('.about-text.text-preview');
    var seeMore = document.querySelector('.seemore');
    var seeLess = document.querySelector('.seeless');
    var postSections = document.querySelectorAll(".lowerside-right");

    if (paragraph.classList.contains('about-fulltext')) {
        // If the text is in full view, clicking "See more" should show truncated text
        paragraph.classList.remove('about-fulltext');
        seeMore.style.display = 'block';
        seeLess.style.display = 'none';

        // Reset the About section
        aboutSection.style.marginTop = "";
        photoSection.forEach(section => {
            section.style.marginTop = "";
        });
        videoSection.forEach(section => {
            section.style.marginTop = "";
        });
        lastSections.forEach(section => {
            section.style.marginTop = "24%";
        });
        postSections.forEach(section => {
            section.style.marginTop = "";
        });
    } else {
        // If the text is truncated, clicking "See more" should show the full text
        paragraph.classList.add('about-fulltext');
        seeMore.style.display = 'none';
        seeLess.style.display = 'block';

        // Adjust the About section
        aboutSection.style.marginTop = "-6%";

        // Use media queries to set different margin values for desktop and mobile
        if (window.matchMedia("(min-width: 1280px)").matches) {
            // Desktop view
            photoSection.forEach(section => {
                section.style.marginTop = "19%";
            });

            videoSection.forEach(section => {
                section.style.marginTop = "19%";
            });

            lastSections.forEach(section => {
                section.style.marginTop = "49%";
            });

            postSections.forEach(section => {
                section.style.marginTop = "-6%";
            });
        } else if (window.matchMedia("(min-width: 992px) and (max-width: 1200px)").matches) {
            //Large Mobile View
            photoSection.forEach(section => {
                section.style.marginTop = "23%";
            });

            videoSection.forEach(section => {
                section.style.marginTop = "23%";
            });

            postSections.forEach(section => {
                section.style.marginTop = "-6%";
            });
        } else if (window.matchMedia("(min-width: 768px) and (max-width: 992px)").matches) {
            //Medium Mobile View
            photoSection.forEach(section => {
                section.style.marginTop = "45%";
            });

            videoSection.forEach(section => {
                section.style.marginTop = "45%";
            });

            postSections.forEach(section => {
                section.style.marginTop = "45%";
            });
        } else if (window.matchMedia("(min-width: 600px) and (max-width: 768px)").matches) {
            //Small Mobile View
            photoSection.forEach(section => {
                section.style.marginTop = "33%";
            });

            videoSection.forEach(section => {
                section.style.marginTop = "33%";
            });

            postSections.forEach(section => {
                section.style.marginTop = "33%";
            });
        } else {
            // Extra Small Mobile view
            photoSection.forEach(section => {
                section.style.marginTop = "110%";
            });

            videoSection.forEach(section => {
                section.style.marginTop = "113%";
            });

            postSections.forEach(section => {
                section.style.marginTop = "115%";
            });
        }
    }
}

// Add an event listener for window resize to handle changes in screen width
window.addEventListener('resize', toggleOverflow);

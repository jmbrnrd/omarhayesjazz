
import glightbox from 'glightbox/dist/js/glightbox';

export default function () {

    const lightbox = glightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });
    console.log('lightbox loaded!');
}

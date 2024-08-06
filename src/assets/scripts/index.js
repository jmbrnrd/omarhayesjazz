
import scroll from './scroll';
import glightbox from './glightbox';

scroll();
glightbox();

/**
 * Randomly set the hero images
 */
function setHeroImage() {

    const heroImages = ["IMG_8292.jpg","IMG_0001.jpg","IMG_8286.jpg"];
    const hero = document.querySelector('.hero .bg')

    hero.src =
        'https://res.cloudinary.com/rdl/image/upload/c_scale,f_auto,w_1200/v1707550787/rcbb/images/' +
        heroImages[Math.floor(Math.random() * heroImages.length)];
}
setHeroImage();

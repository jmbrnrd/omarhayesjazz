import Lenis from '@studio-freight/lenis';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function () {

    const lenis = new Lenis();
    gsap.registerPlugin(ScrollTrigger);

    const rcbbHero = document.querySelector('.hero');
    const rcbbLogo = document.querySelector('.logo');

    // lenis.on('scroll', (e) => {
    //     //console.log(e)
    // });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    function onInit() {

        // const load = gsap.timeline()
        //     .to('.overlay', {
        //         duration: .75,
        //         opacity: 0,
        //         delay: .5,
        //     });


        const anchors = document.querySelectorAll('a');

        anchors.forEach((link) => {
            let href = link.getAttribute('href');
            if (href.indexOf('#') === 0) {
                link.addEventListener('click', () => lenis.scrollTo(link.getAttribute('href')));
            }
        });

    }

    window.addEventListener('load', () => {
        console.log('Window loaded!');
        onInit();
    });


}

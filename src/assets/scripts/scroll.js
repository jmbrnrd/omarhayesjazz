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

        if (!!rcbbLogo) {
            rcbbLogo.style.visibility = 'visible';
            const load = gsap.timeline()
                .to('.overlay', {
                    duration: .75,
                    opacity: 0,
                    delay: .3,
                })
                .from('.logo .rs', {
                    opacity: 0,
                    duration: .2,
                    stagger: .075,
                    y: -100,
                })
                .from('.the, .cbb', {
                    opacity: 0,
                    y: 50,
                    stagger: .3
                })
                .from('.lines', {
                    duration: .2,
                    scaleX: 0,
                    transformOrigin: 'center',
                })
                .from('.star', {
                    rotate: -520,
                    transformOrigin: 'center',
                    opacity: 0,
                    y: 20,
                    scale: 1
                })
        }

        if (!!rcbbHero) {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'center center',
                    end: 'bottom top',
                    scrub: true,
                    // markers: true
                }
            });
            tl.to('.bg', {
                scale: 1.05,
            });
        }




        const anchors = document.querySelectorAll('a');

        anchors.forEach((link) => {
            let href = link.getAttribute('href');
            if (href.indexOf('#') === 0) {
                link.addEventListener('click', () => lenis.scrollTo(link.getAttribute('href')));
            }
        });


        // ScrollTrigger.batch(".event", {
        //     start: 'top 80%',
        //     onEnter: batch => {
        //         gsap.to(batch, {
        //             autoAlpha: 1,
        //             duration: .3
        //         });
        //     },
        // });

    }

    window.addEventListener('load', () => {
        console.log('Window loaded!');
        onInit();
    })


}

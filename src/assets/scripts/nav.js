
export default function() {
    console.log('Navigation loaded!');

   //  const header = document.getElementById('header');
   //  const navPanel = document.querySelector('.nav-primary');
   //  const navBtn = document.getElementById('navButton');
   //  const scrollPadding = `${header.offsetHeight - 1}px`
   //
   //  // Adjust scroll-padding to allow for the header
   //  document.documentElement.style.setProperty('--scroll-padding', scrollPadding);
   //
   //  // Menu button
   //
   //  navBtn.addEventListener('click', openNavigation);
   //  // Navigation panel
   //  navPanel.addEventListener('click', closeNavigation);
   //
   //  // Open navigation panel
   //  function openNavigation() {
   //      navBtn.classList.toggle('is-active');
   //      const open = (navPanel.getAttribute('aria-expanded') === 'true');
   //      if (open) {
   //          navPanel.setAttribute('aria-expanded', 'false');
   //          return;
   //      }
   //      navPanel.setAttribute('aria-expanded', 'true');
   //  }
   //  function closeNavigation() {
   //      navPanel.setAttribute('aria-expanded', 'false');
   //      navBtn.classList.remove('is-active');
   //  }
   //
   //  // Activate the navigation bar when the page is scrolled away from the hero section
   //  const observer = new IntersectionObserver((entries, observer) => {
   //      entries.forEach(entry => {
   //          entry.isIntersecting
   //              ? header.classList.remove('active')
   //              : header.classList.add('active');
   //      });
   //  } );
   //
   // observer.observe(document.getElementById('scroll-watcher'));
}

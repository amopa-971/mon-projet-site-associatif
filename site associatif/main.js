gsap.from('.header', { duration: 0.5, y: '-100%' })
gsap.from('.links', { duration: 0.5, opacity: 0, delay: 1, stagger: .2 })
gsap.from('.Membres', { opacity: 0, duration: 1, x: '-100%', delay: 2 })
gsap.from('.administration', { opacity: 0,  duration: 1, x: '100%', delay: 2 })
gsap.from('.phras1', { opacity: 0,  duration: 1, x: '50vw', delay: 2, ease: 'power2.out' })
gsap.from('.phras2', { opacity: 0,  duration: 1.5, x: '-100vw', delay: 2.5, ease: 'power2.out' })
gsap.from('.phras3', { opacity: 0,  duration: 2, x: '100vw', delay: 3, ease: 'power2.out' })
gsap.from('.phras4', { opacity: 0,  duration: 2, x: '100vw', delay: 3.5, ease: 'power2.out' })

document.querySelectorAll('.box',).forEach(function(box) {}) ;

gsap.to('.memb1', {
    scrollTrigger: '.memb1', // start the animation when ".box" enters the viewport (once)
    x: -450, duration: 1, delay: 1
  })
gsap.to('.memb2', {
    scrollTrigger: '.memb2', // start the animation when ".box" enters the viewport (once)
    x: 450, duration: 1, delay: 1
  })
gsap.to('.memb3', {
    scrollTrigger: '.memb3', // start the animation when ".box" enters the viewport (once)
    x: 400, duration: 1, delay: 1
  })
gsap.to('.memb4', {
    scrollTrigger: '.memb4', // start the animation when ".box" enters the viewport (once)
    x: -400, duration: 1, delay: 1
  })
gsap.to('.memb5', {
    scrollTrigger: '.memb5', // start the animation when ".box" enters the viewport (once)
    x: -450, duration: 1, delay: 1
  })
gsap.to('.memb6', {
    scrollTrigger: '.memb6', // start the animation when ".box" enters the viewport (once)
    x: 450, duration: 1, delay: 1
  })
gsap.to('.memb7', {
    scrollTrigger: '.memb7', // start the animation when ".box" enters the viewport (once)
    x: 400, duration: 1, delay: 1
  })
gsap.to('.memb8', {
    scrollTrigger: '.memb8', // start the animation when ".box" enters the viewport (once)
    x: -400, duration: 1, delay: 1
  })

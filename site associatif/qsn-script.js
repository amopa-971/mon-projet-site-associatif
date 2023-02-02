gsap.from('.logo', { duration: 1, y: '-100%',opacity: 0, delay: 1, ease: 'bounce' })
gsap.from('.nom-assos', { duration: 0.5, y: '-100%',opacity: 0, delay: 1 })
gsap.from('.adresse', { duration: 0.5, y: '-100%',opacity: 0, delay: 1 })
gsap.from('.links', { duration: 1, opacity: 0, delay: 1, stagger: .3 })
gsap.from('.icone', { duration: 1, x: '-50', opacity: 0, delay: 1, stagger: .3 })

gsap.from('.phrase2', {opacity: 0, delay: 2, duration: 1.5, x: '-100vw', ease: 'power2.out' })
gsap.from('.phrase3', {opacity: 0, delay: 2, duration: 2, x: '100vw', ease: 'power2.out' })
gsap.from('.phrase4', {opacity: 0, delay: 2, duration: 2.5, x: '100vw', ease: 'power2.out' })
gsap.from('.cat-print', { duration: 1, opacity: 0, delay: 3.5, stagger: -.3, })

//section présentation1

gsap.from('.titrsection', { 
scrollTrigger: '.titrsection', y: -10, duration: 1, delay : 1
})
gsap.from('.titrsection', { 
scrollTrigger: '.h1', duration: 1, opacity: 0, delay: 1
})

gsap.to('.image1', {
    scrollTrigger: '.image1', x: 100, duration: 1, delay: 1
  })
 gsap.from('.image1', {
     scrollTrigger: '.image1', duration: 1, opacity: 0, delay: 1
  })

gsap.to('.text1', {
    scrollTrigger: '.text1', x: -100, duration: 1, delay: 1
})
gsap.from('.text1', {
    scrollTrigger: '.text1', duration: 1, opacity: 0, delay: 1
    })
gsap.to('.image2', {
    scrollTrigger: '.image2', x: -150, duration: 1, delay: 1
  })
 gsap.from('.image2', {
     scrollTrigger: '.image2', duration: 1, opacity: 0, delay: 1
  })

gsap.to('.text2', {
    scrollTrigger: '.text2', x: 100, duration: 1, delay: 1
})
gsap.from('.text2', {
    scrollTrigger: '.text2', duration: 1.5, opacity: 0, delay: 1.5
    })
    gsap.to('.image3', {
        scrollTrigger: '.image3', x: 100, duration: 1, delay: 1
      })
     gsap.from('.image3', {
         scrollTrigger: '.image3', duration: 1, opacity: 0, delay: 1
      })
    
    gsap.to('.text3', {
        scrollTrigger: '.text3', x: -100, duration: 1, delay: 1
    })
    gsap.from('.text3', {
        scrollTrigger: '.text3', duration: 1, opacity: 0, delay: 1
        })
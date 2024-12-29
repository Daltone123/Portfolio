gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
});

// toggleActions: "restart pause reverse pause",
var tl = gsap.timeline({
    defaults: {
        duration: 1,
    },
});

tl.from(".intro", {
    scrollTrigger: ".intro",
    x: 300,
    opacity: 0,
    // ease: "bounce",
});
tl.from(".main-title", {
    scrollTrigger: ".main-title",
    duration: 0.8,
    ease: "bounce",
    x: -200,
    opacity: 0,
});
tl.from(".more", {
    scrollTrigger: ".more",
    duration: 0.8,
    ease: "power1",
    // x: -200,
    opacity: 0,
});
tl.from(".button-container", {
    scrollTrigger: ".button-container",
    duration: 0.5,
    ease: "bounce",
    opacity: 0,
    scale: 0.2,
});

gsap.utils.toArray(".section-title").forEach(title => {
    var titleTl = gsap.timeline({
        duration: 0.8,
        scrollTrigger: {
            trigger: title,
            // start: "top center",
            toggleActions: "restart none restart none",
        },
    });
    titleTl.from(title, {
        x: -100,
        opacity: 0,
    });
});
let timeLine = gsap.timeline({ defaults: { duration: 1, ease: "power1.inOut" } });

timeLine
    .from('.slide_1 .element_2', { opacity: 0 })
    .from('.slide_1 .element_3', { x: 100, opacity: 0 }, "<")
    .from('.slide_1 .element_4', { x: -100, opacity: 0 }, "<")
    .fromTo(['.slide_1 .element_3', '.slide_1 .element_4'], { scale: 1, opacity: 1 }, { scale: 1.05, opacity: .9, repeat: -1, yoyo: true, stagger: .2 })

document.querySelectorAll(".slide_1 .team").forEach((team) => {
    team.addEventListener("click", () => {
        document.querySelector(".slide_2").classList.remove('hidden');
        onClickTeam();
    })
})


function onClickTeam() {
    var t1 = gsap.timeline({ defaults: { duration: 1, ease: "power1.inOut" } })
        .to('.slide_1 .element_1', { opacity: 0 }, "<")
        .from('.slide_2 .element_1', { opacity: 0 }, "<")
        .to('.slide_1 .element_2', { opacity: 0 }, "<")
        .to('.slide_1 .element_3', { x: 150, opacity: 0 }, "<")
        .to('.slide_1 .element_4', { x: -150, opacity: 0 }, "<")
        .to(['.slide_2 .element_2'], { opacity: 1 }, "<.5")
        .to(['.slide_2 .element_3'], { opacity: 1 }, "<");
    var t2 = gsap.timeline({ defaults: { ease: "power1.inOut" },repeat:-1 })
        // .to('.slide_2 .element_3',{opacity:0,delay:3})
        .fromTo('.slide_2 .element_4',{opacity:0},{opacity:1,delay:3,duration:1})
        .to('.slide_2 .element_5',{opacity:1,duration:1},">2.5")
        .to('.slide_2 .element_4',{opacity:0,duration:1},"<.5")
        .to('.slide_2 .element_3',{opacity:1,duration:1},">2.5")
        .to('.slide_2 .element_5',{opacity:0,duration:1},"<.5")


        // .to('.slide_2 .element_5',{opacity:1},)



    var master = gsap.timeline()
        .add(tl)
        .to(t2);
}


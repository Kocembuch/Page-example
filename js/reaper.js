const reaper = document.querySelector(".reaper");
const jaw = document.querySelector("#jaw");
const cutter = document.querySelector(".cutter")

//BOUNCE checkout

const slide = () => {
    const tl = new TimelineMax();
    tl.to(reaper, 2, {
        x: "11vw",
        repeat: 0,
        backgroundColor: "red",
    }, .5)
    return tl;
}

const talk = () => {
    const tl = new TimelineMax();
    tl.to(jaw, .5, {
        y: 10,
        yoyo: true,
        repeat: -1
    })
    return tl
}

const cutterRotation = () => {
    const tl = new TimelineMax();
    tl.to(cutter, 5, {
        rotation: 360,
    })
    return tl
}


//MASTER TIMELINE
const master = new TimelineMax({
    // animation: paused
});
master.add("start")
master.add(slide(), "start")
master.add(cutterRotation())
master.add(talk(), "start")


// TweenMax.to(reaper, 3, {
//     scale: 0.5,
//     yoyo: true,
//     repeat: -1
// })
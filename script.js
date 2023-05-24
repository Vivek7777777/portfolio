AOS.init();


//adding animation to front text and image
$(".intro_box1").addClass("animate__animated animate__fadeInLeft");
$(".intro_box2").addClass("animate__animated animate__fadeInRight");
;
setInterval(function () { $(".box2_svg").css({ "animation": "move 4s infinite" }) }, 1500);

// project

if ($(window).width() < 992) {
    $(".project_info_even").addClass("order-2");
}



// adding animation to project

let projectImages = $(".project_img");

projectImgOut();

for (let i = 0; i < projectImages.length; i++) {
    projectImages[i].addEventListener("mouseover", () => projectImgIn(i));
    projectImages[i].addEventListener("mouseout", projectImgOut);
}

function projectImgIn(x) {
    console.log("run");
    if(x == 0){
        $(".project_img1").css({ "scale": "1" });
    }
    else if(x == 1){
        $(".project_img2").css({ "scale": "1" });
    }
    else{
        $(".project_img3").css({ "scale": "1" });
    }
}

function projectImgOut() {
    $(".project_img").css({ "scale": ".95" });
}




// adding animation to skill section

gsap.to(".skill_project_heading", {

    scrollTrigger: {
        trigger: ".skill_project_heading",
        start: "top 80%",
        end: "top 0%",
        scrub: true,
    },
    left : "0"
});

gsap.to(".box", {

    scrollTrigger: {
        trigger: ".box",
        start: "top 50%",
        end: "top -250%",
        scrub: true,
    },
    ease: "none",
    height: "100%",
    opacity: 1,
    delay: 0
});

gsap.to(".react", {

    scrollTrigger: {
        trigger: ".react",
        start: "top 85%",
        end: "top 44%",
        scrub: true,
    },
    ease: "none",
    opacity: 1,
    scale: 1
});

gsap.to(".javascript", {

    scrollTrigger: {
        trigger: ".javascript",
        start: "top 85%",
        end: "top 44%",
        scrub: true,
    },
    ease: "none",
    opacity: 1,
    scale: 1
});

gsap.to(".node", {

    scrollTrigger: {
        trigger: ".node",
        start: "top 85%",
        end: "top 44%",
        scrub: true,
    },
    ease: "none",
    opacity: 1,
    scale: 1
});

gsap.to(".express", {

    scrollTrigger: {
        trigger: ".express",
        start: "top 85%",
        end: "top 44%",
        scrub: true,
    },
    ease: "none",
    opacity: 1,
    scale: 1
});

gsap.to(".jquery", {

    scrollTrigger: {
        trigger: ".jquery",
        start: "top 85%",
        end: "top 44%",
        scrub: true,
    },
    ease: "none",
    opacity: 1,
    scale: 1
});

gsap.to(".mongo", {

    scrollTrigger: {
        trigger: ".mongo",
        start: "top 85%",
        end: "top 44%",
        scrub: true,
    },
    ease: "none",
    opacity: 1,
    scale: 1
});


gsap.to(".mysql", {

    scrollTrigger: {
        trigger: ".mysql",
        start: "top 85%",
        end: "top 44%",
        scrub: true,
    },
    ease: "none",
    opacity: 1,
    scale: 1
});

gsap.to(".bootstarp", {

    scrollTrigger: {
        trigger: ".bootstarp",
        start: "top 85%",
        end: "top 44%",
        scrub: true,
    },
    ease: "none",
    opacity: 1,
    scale: 1
});

gsap.to(".api", {

    scrollTrigger: {
        trigger: ".api",
        start: "top 85%",
        end: "top 44%",
        scrub: true,
    },
    ease: "none",
    opacity: 1,
    scale: 1
});

gsap.to(".css", {

    scrollTrigger: {
        trigger: ".css",
        start: "top 85%",
        end: "top 44%",
        scrub: true,
    },
    ease: "none",
    opacity: 1,
    scale: 1
});


import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import ASScroll from "@ashthornton/asscroll";

export default class Controls {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        window.flag = false;
        //this.product = this.experience.world.product.actualProduct;
        //this.product.children.forEach((child) => {
         //   if (child.type === "RectAreaLight") {
         //       this.rectLight = child;
         //   }
        //});
        //this.wave = this.experience.world.wave;
        //this.circleFirst = this.experience.world.floor.circleFirst;
        //this.circleSecond = this.experience.world.floor.circleSecond;
        //this.circleThird = this.experience.world.floor.circleThird;

        GSAP.registerPlugin(ScrollTrigger);

        document.querySelector(".page").style.overflow = "visible";

        if (
            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            this.setSmoothScroll();
        }
        this.setScrollTrigger();
    }

    setupASScroll() {
        // https://github.com/ashthornton/asscroll
        const asscroll = new ASScroll({
            ease: 0.1,
            disableRaf: true,
        });

        GSAP.ticker.add(asscroll.update);

        ScrollTrigger.defaults({
            scroller: asscroll.containerElement,
        });

        ScrollTrigger.scrollerProxy(asscroll.containerElement, {
            scrollTop(value) {
                if (arguments.length) {
                    asscroll.currentPos = value;
                    return;
                }
                return asscroll.currentPos;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            fixedMarkers: true,
        });

        asscroll.on("update", ScrollTrigger.update);
        ScrollTrigger.addEventListener("refresh", asscroll.resize);

        requestAnimationFrame(() => {
            asscroll.enable({
                newScrollElements: document.querySelectorAll(
                    ".gsap-marker-start, .gsap-marker-end, [asscroll]"
                ),
            });
        });
        return asscroll;
    }

    setSmoothScroll() {
        this.asscroll = this.setupASScroll();
    }

    setScrollTrigger() {
        ScrollTrigger.matchMedia({
            //Desktop
            "(min-width: 969px)": () => {
                console.log("fired desktop");
                //this.product.scale.set(0.11, 0.11, 0.11);
                //this.rectLight.width = 0.5;
                //this.rectLight.height = 0.7;
                //this.camera.orthographicCamera.position.set(0, 4/*6.5*/, 10);
               ///this.product.position.set(0, this.product.position.y, 0);
                // First section -----------------------------------------
                this.timeline =  new GSAP.timeline();
                this.timeline.set(".animated-text", { y: 0, yPercent: 100 });

                /*this.timeline
                .to(".animated-text", {
                    yPercent: 0,
                    stagger: 0.05,
                    ease: "back.out(1.7)",
                });*/
                // if current position is more than 80% of document height
                
                console.log(window.innerHeight);
                window.direction = 1;
                window.progress = 0;
            
                $(window).scroll(function(){
                    window.st = document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
                    if (window.st > window.lastScrollTop) {
                        // downscroll code
                        window.direction = 1;
                        window.progress = ((window.progress + 1) >= 100) ? 100: window.progress + (100/window.docHeight*39.5);
                        console.log("progress: " + window.progress);
                    } else if (window.st < window.lastScrollTop) {
                        // upscroll code
                        window.direction = -1;
                        window.progress = ((window.progress - 1) <= 0) ? 0: window.progress - (100/window.docHeight*39.5);
                        console.log("progress: " + window.progress);
                    } // else was horizontal scroll
                    window.lastScrollTop = window.st <= 0 ? 0 : window.st;
                    $('.cloud1').css({
                        'top': window.innerHeight*.60,
                        //'left': $('.cloud1').position().left > 1960 ? -4: $('.cloud1').position().left,
                        //'left': $(this).scrollLeft() + 15 
                         //Why this 15, because in the CSS, we have set left 15, so as we scroll, we would want this to remain at 15px left
                    });
                    $('.cloud2').css({
                        'top': window.innerHeight*.60,
                        //'left': $('.cloud2').position().left > 1960 ? -10: $('.cloud2').position().left,
                        //'left': $(this).scrollLeft() + 15 
                         //Why this 15, because in the CSS, we have set left 15, so as we scroll, we would want this to remain at 15px left
                    });
                    $('.cloud3').css({
                        'top': window.innerHeight*.60,
                        //'left': $('.cloud3').position().left > 1960 ? -20: $('.cloud3').position().left,
                        //'left': $(this).scrollLeft() + 15 
                         //Why this 15, because in the CSS, we have set left 15, so as we scroll, we would want this to remain at 15px left
                    });
                    $('.cloud4').css({
                        'top': window.innerHeight*.60,
                        //'left': $('.cloud1').position().left > 1960 ? -4: $('.cloud1').position().left,
                        //'left': $(this).scrollLeft() + 15 
                         //Why this 15, because in the CSS, we have set left 15, so as we scroll, we would want this to remain at 15px left
                    });
                    $('.cloud5').css({
                        'top': window.innerHeight*.60,
                        //'left': $('.cloud2').position().left > 1960 ? -10: $('.cloud2').position().left,
                        //'left': $(this).scrollLeft() + 15 
                         //Why this 15, because in the CSS, we have set left 15, so as we scroll, we would want this to remain at 15px left
                    });
                    $('.cloud6').css({
                        'top': window.innerHeight*.60,
                        //'left': $('.cloud3').position().left > 1960 ? -20: $('.cloud3').position().left,
                        //'left': $(this).scrollLeft() + 15 
                         //Why this 15, because in the CSS, we have set left 15, so as we scroll, we would want this to remain at 15px left
                    });
                    $('.cloud7').css({
                        'top': window.innerHeight*.60,
                        //'left': $('.cloud1').position().left > 1960 ? -4: $('.cloud1').position().left,
                        //'left': $(this).scrollLeft() + 15 
                         //Why this 15, because in the CSS, we have set left 15, so as we scroll, we would want this to remain at 15px left
                    });
                    $('.cloud8').css({
                        'top': window.innerHeight*.60,
                        //'left': $('.cloud2').position().left > 1960 ? -10: $('.cloud2').position().left,
                        //'left': $(this).scrollLeft() + 15 
                         //Why this 15, because in the CSS, we have set left 15, so as we scroll, we would want this to remain at 15px left
                    });
                    $('.cloud9').css({
                        'top': window.innerHeight*.60,
                        //'left': $('.cloud3').position().left > 1960 ? -20: $('.cloud3').position().left,
                        //'left': $(this).scrollLeft() + 15 
                         //Why this 15, because in the CSS, we have set left 15, so as we scroll, we would want this to remain at 15px left
                    });
                    $('.first-section').css({
                        'top': window.innerHeight *.0001,
                    });
                    $('.progress').css({'width': window.progress + "%"});
                });

                let state = captureState(".cloud");
                //let tl = gsap.timeline({ onComplete: () => revertState(state)});

                // record the current inline styles of all the elements passed in
                function captureState(elements) {
                    let state = [];
                    GSAP.utils.toArray(elements).forEach(element => state.push(element, element.style.cssText));
                    return state;
                }

                // revert the inline styles
                function revertState(state) {
                    for (let i = 0; i < state.length; i+=2) {
                        state[i].style.cssText = state[i+1];
                    }
                }

                this.firstMoveCloudTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".clouds",
                        start: "top 100%",
                        //pin: ".hero",
                        end: "bottom 0%",
                        scrub: 0.6,
                        //markers: true,
                        invalidateOnRefresh: true,
                    },
                    //onComplete: () => revertState(state)
                }).call(()=>{
                
                });

                this.firstMoveCloudTimeline.to(
                    ".cloud1",
                    {
                        x: () => {
                            console.log(20 * window.direction);
                            return 2700; //* window.direction;
                        },
                    //    y: () => {
                    //        return vh *.8;
                    //    },
                        //z: ,
                    },
                    "same"
                ).to(
                ".cloud2",
                    {
                        x: () => {
                            return 21200;// * window.direction;
                        },
                      //  y: () => {
                       //     return vh *.8;
                      //  },
                        //y: ,
                        //z: ,   
                    },
                    "same"
                )
                .to(
                    ".cloud3",
                    {
                        x: () => {
                            return 12700;// * window.direction;
                        },
                      //  y: () => {
                      //      return vh * .8;
                      //  },
                        //y: ,
                        //z: ,
                    },
                    "same"
                ).to(
                ".cloud4",
                    {
                        x: () => {
                            console.log(20 * window.direction);
                            return 2200; //* window.direction;
                        },
                    //    y: () => {
                    //        return vh *.8;
                    //    },
                        //z: ,
                    },
                    "same"
                ).to(
                ".cloud5",
                    {
                        x: () => {
                            return 2500;// * window.direction;
                        },
                      //  y: () => {
                       //     return vh *.8;
                      //  },
                        //y: ,
                        //z: ,   
                    },
                    "same"
                )
                .to(
                    ".cloud6",
                    {
                        x: () => {
                            return 7700;// * window.direction;
                        },
                      //  y: () => {
                      //      return vh * .8;
                      //  },
                        //y: ,
                        //z: ,
                    },
                    "same"
                ).to(

                ".cloud7",
                    {
                        x: () => {
                            console.log(20 * window.direction);
                            return 2200; //* window.direction;
                        },
                    //    y: () => {
                    //        return vh *.8;
                    //    },
                        //z: ,
                    },
                    "same"
                ).to(
                ".cloud8",
                    {
                        x: () => {
                            return 2500;// * window.direction;
                        },
                      //  y: () => {
                       //     return vh *.8;
                      //  },
                        //y: ,
                        //z: ,   
                    },
                    "same"
                )
                .to(
                    ".cloud9",
                    {
                        x: () => {
                            return 2700;// * window.direction;
                        },
                      //  y: () => {
                      //      return vh * .8;
                      //  },
                        //y: ,
                        //z: ,
                    },
                    "same"
                );
                
                this.firstMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top 95%",
                        pin: ".hero",
                        end: "bottom 50%",
                        scrub: 0.6,
                        //markers: true,
                        invalidateOnRefresh: true,
                    },
                    //onComplete: () => revertState(state)
                }).call(()=>{
                
                });
                //this.firstMoveTimeline.set(".animated-text", { y: 0, yPercent: 100 });
                this.firstMoveTimeline.to(
                    ".first-section",
                    {
                        x: () => {
                            return -2900;
                        },
                    },
                    "same"
                )
                .to(
                    ".first-section .watch1", 
                    {
                        duration: .3,
                        x: () => {
                            return -422.2;
                        }
                    },
                    "same"
                )
                .to(
                    ".first-section .watch2", 
                    {
                        duration: .2,
                        x: () => {
                            return -.1;
                        }
                    },
                    "same"
                );

                //window.flag1 = false;
                //window.flag2 = false;

                GSAP.registerPlugin(ScrollTrigger);

                const secondMove = GSAP.timeline({
                    scrollTrigger: {
                            trigger: ".second-move",
                           // markers: true,
                            start: "top 100%",
                            scrub: 2,
                            onEnter: () => {
                                //$('.second-move .postcard').css({'opacity': 0});
                            },
                            onLeave: () => {  
                                //$('.second-move .postcard').css({'opacity': 1});
                            },
                        }
                    });

                secondMove.set(".second-move .postcard", {
                    opacity: 0
                })
                .add(() => {}, "+=.1")
                .to(".second-move .postcard", {
                    opacity: 1
                });

                GSAP.to(".second-move .postcard", {
                    scrollTrigger: {
                        trigger: ".second-move",
                        //markers: true,
                        start: "bottom 70%",
                        end: "+=22200",
                        pin: ".second-move",
                        scrub: 2,
                        onLeave: () => {  
                        },
                    },
                    opacity: 1,
                    //y: 200,
                    }
                );

                GSAP.to(".second-move .postcard", {
                    scrollTrigger: {
                        //trigger: ".second-move",
                        trigger: ".second-move-fadein",
                        //markers: true,
                        start: "bottom 10%",
                        end: "+=1700",
                        //end: 'bottom 100%',
                        //pin: ".second-move",
                        scrub: 2,
                    },
                    opacity: 1,
                    y: 1200,
                    }
                );

                GSAP.to(".details-tile .heading", {
                    scrollTrigger: {
                        trigger: ".details-tile",
                        //markers: true,
                        start: "bottom 20%",
                        end: "+=370",
                        pin: ".details-tile section",
                        scrub: 2,
                        onLeave: () => {  
                        },
                    },
                    opacity: 1,
                    //y: -200,
                    }
                );

                GSAP.to(".details-tile .heading", {
                    scrollTrigger: {
                        //trigger: ".second-move",
                        trigger: ".details-tile",
                        //markers: true,
                        start: "bottom 20%",
                        end: "+=1700",
                        //end: 'bottom 100%',
                        //pin: ".second-move",
                        scrub: 2,
                    },
                    opacity: 0,
                    y: -820,
                    }
                );

                GSAP.to(".details-tile p", {
                    scrollTrigger: {
                        //trigger: ".second-move",
                        trigger: ".details-tile",
                        //markers: true,
                        start: "bottom 20%",
                        end: "+=1700",
                        //end: 'bottom 100%',
                        //pin: ".second-move",
                        scrub: 2,
                    },
                    opacity: 0,
                    y: -220,
                    }
                );

                GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        //markers: true,
                        start: "bottom 60%",
                        end: "+=2200",
                        pin: ".third-move .postcard",
                        scrub: 2,
                    },
                    opacity: 1,
                    //y: 200,
                    }
                ).to(".third-move .postcard", {
                    opacity: 1,
                    x: -800,
                    }
                )
                .add(() => {}, "+=.3")
                .to(".third-move .postcard", {
                    opacity: 0,
                    x: 7,
                    }
                );

                GSAP.to(".generation-tile .heading", {
                    scrollTrigger: {
                        trigger: ".generation-tile",
                        //markers: true,
                        start: "bottom 20%",
                        end: "+=2770",
                        pin: ".generation-tile section",
                        scrub: 2,
                        onLeave: () => {  
                        },
                    },
                    opacity: 1,
                    //y: -200,
                    }
                );

                GSAP.to(".generation-tile .heading", {
                    scrollTrigger: {
                        //trigger: ".second-move",
                        trigger: ".generation-tile",
                        //markers: true,
                        start: "bottom 0%",
                        end: "+=1700",
                        //end: 'bottom 100%',
                        //pin: ".second-move",
                        scrub: 2,
                    },
                    opacity: 0,
                    y: -820,
                    }
                );

                GSAP.to(".generation-tile p", {
                    scrollTrigger: {
                        //trigger: ".second-move",
                        trigger: ".generation-tile",
                        //markers: true,
                        start: "bottom 0%",
                        end: "+=1700",
                        //end: 'bottom 100%',
                        //pin: ".second-move",
                        scrub: 2,
                    },
                    opacity: 0,
                    y: -220,
                    }
                );


                GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".fourth-move",
                        //markers: true,
                        start: "bottom 60%",
                        end: "+=7900",
                        pin: ".fourth-move .postcard",
                        scrub: 2,
                    },
                    opacity: 1,
                    //y: 200,
                    }
                ).to(".fourth-move .postcard", {
                    opacity: 1,
                    x: -800,
                    }
                )
                .add(() => {}, "+=.3")
                .to(".fourth-move .rounded-box .overlay", {
                    scale: 8,
                    opacity: .85,
                    backgroundColor: "#131313", 
                    }, 
                    "same"
                )
                .to(".clouds", {
                    ease: "sineIn",
                    zIndex: 3
                    }, 
                    "same"
                )
                .to(".fourth-move .rounded-box", {
                    scale: 8,
                    }, 
                    "same"
                )
                //.to(".fourth-move .rounded-box", {
                //    backgroundImage: 'url("assets/img/chaine_de_montage-2000.webp")' 
                //    }, 
               // )
                //.to(".fourth-move .rounded-box", {
                //    backgroundImage: 'url("assets/img/chaine_de_montage-2000.webp")',
                //    backgroundSize: 'cover' 
                //    }, 
                //    "same"
               // )
                .to(".fourth-move .postcard .airplane", {
                    opacity: .5,
                    x: 700,
                    }, 
                    "same"
                ).to(".fourth-move .postcard .card", {
                    opacity: 0,
                    x: 400
                    }, 
                    "same"
                )
                .to(".fourth-move .postcard h2", {
                    opacity: 0,
                    x: 400
                    }, 
                    "same"
                );

                GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".fifth-move",
                        //markers: true,
                        start: "top -30%",
                        end: "+=27900",
                        //pin: ".fifth-move",
                        pin: true,
                        //pin: ".scroll-timeline",
                        scrub: 2,
                    },
                    //onEnter: () => { $(".fifth-move").css({"opacity": 1});},
                    onLeave: () => { $('.clouds').css({"z-index": 1, "opacity": 0});},
                    }
                )
                .to(".fifth-move .postcard .airplane2", 
                    {
                        scaleX:2.3,
                        scaleY: 2.2,
                        rotation: -18,
                        opacity: 1,
                        x: 8400
                    },
                    "same"
                )
                .set(".fifth-move .scroll-timeline h2", 
                    {
                        x:0
                });
                //.to(".fifth-move .scroll-timeline h2", {
                    //xPercent: -100 * (GSAP.utils.toArray(".fifth-move .scroll-timeline h2").length+2),
                    //{
                    //    x: -3000
                    //}, 
                   // },
                   // "same"
                //)
                //.to(".fifth-move .scroll-timeline h2", {
                    //delay: 2,
                //    opacity: 0,   
                //    }, 
                //    "same"
                //);
                //let container = document.querySelector(".scroll-timeline");
                let container = document.querySelector(".scroll-timeline");
                let fakeHorizontal = GSAP.to(container, {
  
                    //ease: 'none',
                    x: () => -(container.scrollWidth - window.innerWidth),
                    
                    scrollTrigger: {
                      trigger: ".fifth-move",
                      //trigger: ".fifth-move .rounded-box",
                      start: "left left",
                      end: () => '+=20000',
                      scrub: true,
                      //pin: true,
                      //markers: true,
                      invalidateOnRefresh: true
                    }
                    
                });

                let years = document.querySelectorAll('.fifth-move .scroll-timeline h2.chain')

                years.forEach(year =>{
                    GSAP.to(year, {
                        opacity: 0,
                        //ease: "none",
                        //x: () => window.innerWidth * 2, // counter-animate the content of the section
                    
                        //scaleX: 1,
                    
                        scrollTrigger: {
                        containerAnimation: fakeHorizontal,
                        trigger: year,
                        //markers: true,
                        start: "left 40%",
                        //pin: true,
                        end: () => "left 20%",
                        scrub: true,
                        invalidateOnRefresh: true
                        }
                        
                    })
                });


                let lastYear = document.querySelectorAll('.fifth-move .scroll-timeline .chain-last')

                lastYear.forEach(year =>{
                    GSAP.timeline({
                        scrollTrigger: {
                            containerAnimation: fakeHorizontal,
                            trigger: year,
                            //markers: true,
                            start: "left 60%",
                            //pin: true,
                            end: () => "left 40%",
                            scrub: true,
                            invalidateOnRefresh: true
                        },
                    
                        }
                    )
                    .to(".fifth-move .scroll-timeline .chain-last span", 
                        {
                            y: 100,
                            opacity: 0,
                            stagger: 0.35,
                        },
                    )
                });

            


                /*GSAP.to(".fifth-move .scroll-timeline .y1", {
                    opacity: 0,
                    //duration: 2,
                    //ease: "elastic",
                    scrollTrigger: {
                      trigger: ".fifth-move",
                      //containerAnimation: scrollTween,
                      start: "left left",
                      markers: true,
                      //toggleActions: "play none none reset",
                      //id: "1",
                    }
                });

                GSAP.to(".fifth-move .scroll-timeline .y2", {
                    opacity: 0,
                    duration: 2,
                    ease: "elastic",
                    scrollTrigger: {
                      trigger: ".fifth-move",
                      //containerAnimation: scrollTween,
                      start: "+=1900",
                      //markers: true,
                      //toggleActions: "play none none reset",
                      //id: "1",
                    }
                });

                GSAP.to(".fifth-move .scroll-timeline .y3", {
                    opacity: 0,
                    duration: 2,
                    ease: "elastic",
                    scrollTrigger: {
                      trigger: ".fifth-move",
                      //containerAnimation: scrollTween,
                      start: "+=1900",
                      //markers: true,
                      //toggleActions: "play none none reset",
                      //id: "1",
                    }
                });

                GSAP.to(".fifth-move .scroll-timeline .y4", {
                    opacity: 0,
                    duration: 2,
                    ease: "elastic",
                    scrollTrigger: {
                      trigger: ".fifth-move",
                      //containerAnimation: scrollTween,
                      start: "+=1900",
                      //markers: true,
                      //toggleActions: "play none none reset",
                      //id: "1",
                    }
                });
                */
                
                /*GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".fifth-move",
                        markers: true,
                        start: "top -30%",
                        end: "+=17900",
                        pin: ".scroll-timeline",
                        scrub: 2,
                    },
                    //onEnter: () => { $(".fifth-move").css({"opacity": 1});},
                    }
                )*/
                //.to(".fifth-move", {
                //    opacity: 1,
                //})
                //.to(".fifth-move .rounded-box", {
                //    backgroundImage: 'url("assets/img/chaine_de_montage-2000.png")',
                //    backgroundSize: 'cover' 
                //    }, 
                //    "same"
                //)
                /*.fromTo(".fifth-move .scroll-timeline h2", 
                    {
                        x:0
                    },
                    {
                        x: -3000
                    }, 
                    "same"
                );*/
                //.add(() => {}, "+=3")
               
                //.set(".fourth-move .postcard .airplane2", {
                //        x: 100, 
                //        y: -100
                //    }
                //)
                

                GSAP.to(".journey-tile .heading", {
                    scrollTrigger: {
                        trigger: ".journey-tile",
                        //markers: true,
                        start: "bottom 10%",
                        end: "+=7770",
                        pin: ".journey-tile section",
                        scrub: 2,
                        onLeave: () => {  
                        },
                    },
                    opacity: 1,
                    //y: -200,
                    }
                );

                GSAP.to(".journey-tile .heading", {
                    scrollTrigger: {
                        //trigger: ".second-move",
                        trigger: ".journey-tile",
                        //markers: true,
                        start: "bottom 0%",
                        end: "+=1700",
                        //end: 'bottom 100%',
                        //pin: ".second-move",
                        scrub: 2,
                    },
                    opacity: 0,
                    y: -820,
                    }
                );

                GSAP.to(".journey-tile p", {
                    scrollTrigger: {
                        //trigger: ".second-move",
                        trigger: ".journey-tile",
                        //markers: true,
                        start: "bottom 0%",
                        end: "+=1700",
                        //end: 'bottom 100%',
                        //pin: ".second-move",
                        scrub: 2,
                    },
                    opacity: 0,
                    y: -220,
                    }
                );
                
                /*this.secondMoveTimelineInit = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top 100%",
                        //pin: ".second-tile",
                        end: "bottom 20%",
                        scrub: 0.6,
                        //markers: true,
                        invalidateOnRefresh: true,
                        onEnter: () =>{
                            //window.flag1 = true;
                            //$('.second-tile').addClass("fadeUp");
                            //$('.second-tile').removeClass("fadeDown");
                           // $('.second-tile').addClass("opacity-1");
                            //$('.second-tile').removeClass("opacity-0");
                            //$('.second-tile').css({"opacity": 1});
                            //$('.second-tile').removeClass("fadeDown");
                            //$('.second-tile').addClass("fadeUp");
                        },
                        onLeave: () => {
                            //window.flag1 = false;
                            //$('.second-tile').removeClass("fadeUp");
                            //$('.second-tile').addClass("fadeDown");
                            //alert("alert");
                            //$('.second-tile').css({"opacity": 0});
                            //$('.second-tile').css({"opacity": 0});
                            //$('.second-tile').addClass("opacity-0");
                            //$('.second-tile').removeClass("opacity-1");
                        },
                        onUpdate: () => {
                            
                        }
                    },
                }).to('.second-tile',
                        {   
                            //duration: 1,
                            y: () =>{ //if(window.flag1){
                                        return -790;
                                    //}
                                }
                        },
                );//.to('.second-tile', {duration: 1, y: 750});
                */

                /*this.secondMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top 40%",
                        pin: ".second-tile",
                        end: "bottom 0%",
                        scrub: 0.6,
                        markers: true,
                        invalidateOnRefresh: true,
                        onEnter: () =>{
                            //window.flag1 = true;
                            //$('.second-tile').addClass("opacity-1");
                            //$('.second-tile').removeClass("opacity-0");
                            //$('.second-tile').css({"opacity": 1});
                            //$('.second-tile').removeClass("fadeDown");
                            //$('.second-tile').addClass("fadeUp");
                        },
                        onLeave: () => {
                            //window.flag1 = false;
                            //$('.second-tile').removeClass("fadeUp");
                            //$('.second-tile').addClass("fadeDown");
                            //$('.second-tile').addClass("opacity-0");
                            //$('.second-tile').removeClass("opacity-1");
                            //alert("alert");
                            //$('.second-tile').css({"opacity": 0});
                            
                        },
                    },
                });//.to('.second-tile', {duration: 1, y: 600}, "<+=25%");//.call(()=>{*/
                //*/

                /*this.secondMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top 0%",
                        pin: ".second-tile",
                        end: "bottom 0%",
                        scrub: 0.6,
                        markers: true,
                        invalidateOnRefresh: true,
                        onEnter: () =>{
                            $('.second-tiles').css({"opacity": 1});
                            //$('.second-tile').removeClass("fadeDown");
                            //$('.second-tile').addClass("fadeUp");
                        },
                        onLeave: () => {
                            //$('.second-tile').removeClass("fadeUp");
                            //$('.second-tile').addClass("fadeDown");
                            //alert("alert");
                            $('.second-tile').css({"opacity": 0});
                            
                        },
                        onUpdate: () => {
                            
                        }
                    },
                });//.call(()=>{*/
                //gsap.registerPlugin(ScrollTrigger);

                /*this.secondMoveTimeline = gsap.to(".second-tile", {
                    scrollTrigger: {
                            //yPercent: -100, //* (sections.length - 1),
                            ease: "none", // <-- IMPORTANT!
                            scrollTrigger: {
                                trigger: ".second-move",
                                start: "top 0%",
                                pin: ".second-tile",
                                end: "bottom 0%",
                                scrub: 0.1,
                                markers: true,
                                //snap: directionalSnap(1 / (sections.length - 1)),
                                //end: "+=3000"
                            }
                    }
                });*/
                
                //});

                //this.secondMoveTimeline.call(() => {
                    /* This will executed midway through the timeline */
                //    return {y: 100};
                //this.secondMoveTimeline.to(
                 //   ".second-tile",
                 //   {y: -330}
                //);

               //   }, null, (this.secondMoveTimeline.duration() / 2));

                //this.secondMoveTimeline.to(
                //    ".second-tile",
                //    { y: 900 }
                //);
                //this.firstMoveTimeline.set(".animated-text", { y: 0, yPercent: 100 });
                //this.secondMoveTimeline.set(".second-tile", {  opacity: 0, yPercent: 100 });

                /*this.secondMoveTimeline2 = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".second-move-fadein",
                        start: "top 70%",
                        //pin: ".second-tile",
                        end: "bottom 0%",
                        scrub: 0.6,
                        //markers: true,
                        invalidateOnRefresh: true,
                        onEnter: () => {
                            //window.flag2 = true;
                            /*$('.second-tile').addClass("fadeUp");
                            $('.second-tile').removeClass("fadeDown");
                            $('.second-tile').addClass("opacity-1");
                            $('.second-tile').removeClass("opacity-0");
                             */                  
                            //alert("alert");
                            //$('.second-tile').css({"opacity": 0});
                            
                  /*      },
                        onLeave: () => {
                            //window.flag2 = false;

                            //$('.second-tile').removeClass("fadeDown");
                            //$('.second-tile').addClass("fadeUp");
                            //$('.second-tile').addClass("opacity-0");
                            //$('.second-tile').removeClass("opacity-1");

                            //alert("alert");
                            //$('.second-tile').css({"opacity": 0});
                            
                        },
                    },
                }).call(()=>{
                
                });*/
                
                /*this.secondMoveTimeline2
                        .from('.second-tile',
                        {y: 0},
                        {   
                            duration: 2,
                            y: () =>{ 
                                       //if(window.flag2){
                                            return 22430;
                                       //}
                                }
                        },
                );*/
                  

                /*this.thirdMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".details-tile",
                        start: "top 60%",
                        pin: ".postcard-details",
                        end: "bottom 100%",
                        scrub: 0.6,
                        //markers: true,
                        invalidateOnRefresh: true,
                    },
                }).call(()=>{
                    
                });*/

                //this.timeline.set(".animated-text", { y: 0, yPercent: 100 });


                /*this.thirdMoveTimeline.fromTo(
                    ".postcard-details .heading",
                    { 
                        y: -500,
                        opacity:0,
                    },
                    {
                        y: -750,
                        opacity:1,
                        duration: 2.5, 
                        //yPercent: 100,
                        //ease: 'sineIn',
                    }, 
                ).fromTo(
                    ".postcard-details p",
                    { 
                        y: -500,
                        opacity: 0,
                    },
                    {
                        y: -740,
                        opacity: 1,
                        duration: 1.5,
                        //ease: 'sineIn',
                    },
                );*/


                /*this.thirdMoveTimelineLeave = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".details-tile",
                        start: "top 55%",
                        pin: ".postcard-details",
                        end: "bottom 100%",
                        scrub: 0.6,
                        //markers: true,
                        invalidateOnRefresh: true,
                    },
                }).call(()=>{
                
                });
                */
               /*
                this.thirdMoveTimelineLeave.to(
                    ".postcard-details .heading",
                    { 
                        y: -950,
                        opacity:0,
                        duration: 2.5
                    },
                    "same" 
                ).to(
                    ".postcard-details p",
                    { 
                        y: -900,
                        opacity: 0,
                        duration: 2.5
                    },
                    "same"
                ).to(
                    ".postcard-details .heading",
                    { 
                        y: -950,
                        opacity:0,
                        duration: 2.5
                    },
                    "same" 
                );
;
                */
                /*.call(()=>{
                    var object = this.resources.items.product.scene;
                    object.traverse((node) => {
                        if (!node.isMesh) return;
                            node.material.wireframe = true;
                        }
                    );
                    this.resources.items.product.scene = object; 
                });*/

                // Second section -----------------------------------------
                /*this.secondMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                    .to(
                        this.product.position,
                        {
                            x: () => {
                                return 1;
                            },
                            z: () => {
                                return 4;//this.sizes.height * 0.0032;
                            },
                        },
                        "same"
                    )
                    .to(
                        this.product.scale,
                        {
                            x: 1.4,
                            y: 1.4,
                            z: 1.4,
                        },
                        "same"
                    )
                    .to(
                        this.rectLight,
                        {
                            width: 0.5 * 4,
                            height: 0.7 * 4,
                        },
                        "same"
                    );
                    /*.to(
                        //scene.add(object);  
                        //this.product.scene = object; 
                        this.product.position,
                        {
                            x: () => {
                                var object = this.product.scene;
                                object.traverse((node) => {
                                if (!node.isMesh) return;
                                node.material.wireframe = true;
                                });
                                this.product.scene = object;
                                return this.product.position.x;
                            },
                        },
                        "same"
                    );*/
                
                // Third section -----------------------------------------
                /*
                this.thirdMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                });
                /*.to(this.camera.orthographicCamera.position, {
                    y: 0,
                    x: -4.1,
                    z: 10
                });*/

                /*
                let cards = GSAP.utils.toArray(".card");

                let cardsTimeline = GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".cards",
                        start: "center center",
                        end: "max",
                        pin: true,
                        scrub: true,
                        snap: 1 / (cards.length - 1)
                    }
                });
                
                cards.forEach((card, i) => {
                    if(i === 0) return;
                    cardsTimeline.from(card,
                        {
                            opacity: 0,
                            ease: 'power1.in',
                            yPercent: 100,
                            duration: 1,
                        }
                    )
                });*/
            },

            // Mobile
            "(max-width: 968px)": () => {
                // console.log("fired mobile");

                // Resets
                /*this.product.scale.set(0.07, 0.07, 0.07);
                this.product.position.set(0, 0, 0);
                this.rectLight.width = 0.3;
                this.rectLight.height = 0.4;
                this.camera.orthographicCamera.position.set(0, 6.5, 10);

                // First section -----------------------------------------
                this.firstMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        // invalidateOnRefresh: true,
                    },
                }).to(this.product.scale, {
                    x: 0.1,
                    y: 0.1,
                    z: 0.1,
                });

                // Second section -----------------------------------------
                this.secondMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                    .to(
                        this.product.scale,
                        {
                            x: 0.25,
                            y: 0.25,
                            z: 0.25,
                        },
                        "same"
                    )
                    .to(
                        this.rectLight,
                        {
                            width: 0.3 * 3.4,
                            height: 0.4 * 3.4,
                        },
                        "same"
                    )
                    .to(
                        this.product.position,
                        {
                            x: 1.5,
                        },
                        "same"
                    );

                // Third section -----------------------------------------
                this.thirdMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                }).to(this.product.position, {
                    z: -4.5,
                });*/
            },

            // all
            all: () => {
               
                this.sections = document.querySelectorAll(".section");
                //this.curves =  document.querySelectorAll(".curve");

                /*GSAP.set(".card", {position: "absolute"});
                GSAP.to(".card", {
                                    yPercent: -19, 
                                    stagger: 0.5,
                                    scrollTrigger: {trigger: ".card",},
                                    markers: true,
                                    start: "top top",
                                    end: "top bottom",
                                    scrub: true, 
                                    pin: true,
                                });
                */

                /*this.sections.forEach((section) => {
                    this.progressWrapper =
                        section.querySelector(".progress-wrapper");
                    this.progressBar = section.querySelector(".progress-bar");

                    if (section.classList.contains("right")) {
                        GSAP.to(section, {
                            borderTopLeftRadius: 10,
                            scrollTrigger: {
                                trigger: section,
                                start: "top bottom",
                                end: "top top",
                                scrub: 0.6,
                            },
                        });
                        GSAP.to(section, {
                            borderBottomLeftRadius: 700,
                            scrollTrigger: {
                                trigger: section,
                                start: "bottom bottom",
                                end: "bottom top",
                                scrub: 0.6,
                            },
                        });
                    } else {
                        GSAP.to(section, {
                            borderTopRightRadius: 10,
                            scrollTrigger: {
                                trigger: section,
                                start: "top bottom",
                                end: "top top",
                                scrub: 0.6,
                            },
                        });
                        GSAP.to(section, {
                            borderBottomRightRadius: 700,
                            scrollTrigger: {
                                trigger: section,
                                start: "bottom bottom",
                                end: "bottom top",
                                scrub: 0.6,
                            },
                        });
                    }
                    GSAP.from(this.progressBar, {
                        scaleY: 0,
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 0.4,
                            pin: this.progressWrapper,
                            pinSpacing: false,
                        },
                    });
                });
            
                this.curves.forEach((curve) => { 
                    console.log(curve);                
                    GSAP.to(curve, {
                        "--before-curve-height": "100%",
                        scrollTrigger: {
                            trigger: curve,
                            start: "top bottom",
                            end: "top top",
                            scrub: 0.2,
                        },
                    });
                    GSAP.to(curve, {
                        //borderBottomRightRadius: 700,
                        "--before-curve-height": "10%",
                        scrollTrigger: {
                            trigger: curve,
                            start: "bottom bottom",
                            end: "bottom top",
                            scrub: 0.2,
                        },
                    });
                    GSAP.to(curve, {
                        "--after-curve-height": "100%",
                        scrollTrigger: {
                            trigger: curve,
                            start: "top bottom",
                            end: "top top",
                            scrub: 0.2,
                        },
                    });
                    GSAP.to(curve, {
                        //borderBottomRightRadius: 700,
                        "--after-curve-height": "10%",
                        scrollTrigger: {
                            trigger: curve,
                            start: "bottom bottom",
                            end: "bottom top",
                            scrub: 0.2,
                        },
                    });
                });
               

                // All animations
                // First section -----------------------------------------
                /*this.firstCircle = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    },
                }).to(this.circleFirst.scale, {
                    /*x: 3,
                    y: 3,
                    z: 3,
                    x: 0,
                    y: 0,
                    z: 0,
                })
                //.to(this.experience.world.floor.plane.position, {
                //    x: 0,
                //    y: 0,
                //    z: -10,
                //})
                .to(this.circleFirst.position, {
                    x: 0,
                    y: 0,
                    z: -1,
                })
                .to(
                    this.product.position,
                    {
                        z: 4,
                    },
                );

                // Second section -----------------------------------------
                this.secondCircle = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    },
                })
                    .to(
                        this.circleSecond.scale,
                        {
                            x: 3,
                            y: 3,
                            z: 3,
                        })
                    .to(
                        this.product.position,
                        {
                            // y: 0.7,
                            z: 4,
                        },
                        "same"
                    )
                    //.to(this.experience.world.floor.plane.position, {
                    //    x: 0,
                    //    y: 0,
                    //    z: 0,
                    //})
                    .to(
                        this.circleSecond.position,
                        {
                            x: 0,
                            y: 0,
                            z: -1,
                        });

                // Third section -----------------------------------------
                this.thirdCircle = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                    },
                }).to(this.circleThird.scale, {
                    x: 3,
                    y: 3,
                    z: 3,
                })
                //.to(this.experience.world.floor.plane.position, {
                //    x: 0,
                //    y: 0,
                //    z: 0,
                //})
                .to(this.circleThird.position, {
                    x: 0,
                    y: 0,
                    z: -1,
                    //x: 3,
                    //y: 3,
                })
                .to(
                    this.product.position,
                    {
                        z: 4,
                    },
                    "same"
                );

                // Mini Platform Animations
                this.secondPartTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "center center",
                    },
                });

                this.product.children.forEach((child) => {
                    if (child.name === "Mini_Floor") {
                        this.first = GSAP.to(child.position, {
                            x: -5.44055,
                            z: 13.6135,
                            duration: 0.3,
                        });
                    }
                    if (child.name === "Mailbox") {
                        this.second = GSAP.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                        });
                    }
                    if (child.name === "Lamp") {
                        this.third = GSAP.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2)",
                            duration: 0.3,
                        });
                    }
                    if (child.name === "FloorFirst") {
                        this.fourth = GSAP.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2)",
                            duration: 0.3,
                        });
                    }
                    if (child.name === "FloorSecond") {
                        this.fifth = GSAP.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                        });
                    }
                    if (child.name === "FloorThird") {
                        this.sixth = GSAP.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2)",
                            duration: 0.3,
                        });
                    }
                    if (child.name === "Dirt") {
                        this.seventh = GSAP.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2)",
                            duration: 0.3,
                        });
                    }
                    if (child.name === "Flower1") {
                        this.eighth = GSAP.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2)",
                            duration: 0.3,
                        });
                    }
                    if (child.name === "Flower2") {
                        this.ninth = GSAP.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2)",
                            duration: 0.3,
                        });
                    }
                });
                this.secondPartTimeline.add(this.first);
                this.secondPartTimeline.add(this.second);
                this.secondPartTimeline.add(this.third);
                this.secondPartTimeline.add(this.fourth, "-=0.2");
                this.secondPartTimeline.add(this.fifth, "-=0.2");
                this.secondPartTimeline.add(this.sixth, "-=0.2");
                this.secondPartTimeline.add(this.seventh, "-=0.2");
                this.secondPartTimeline.add(this.eighth);
                this.secondPartTimeline.add(this.ninth, "-=0.1");
            */
            },
        });
    }
    resize() {}

    update() {}
}
import { EventEmitter } from "events";
import Experience from "./Experience.js";
import GSAP from "gsap";

export default class Preloader extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.camera = this.experience.camera;
        this.world = this.experience.world;
        this.device = this.sizes.device;
        this.animationCompleteState = "start";
       // this.productRotate = {x:0, y:0, z:.1};

        this.sizes.on("switchdevice", (device) => {
            this.device = device;
        });

        this.world.on("worldready", () => {
            this.setColorChoosers();
            this.setAssets();
            this.playIntro();
            
        });
    }

    setColorChoosers(){
        
    }

    setAssets() {
        //this.product = this.experience.world.product.actualProduct;
        //this.productChildren = this.experience.world.product.productChildren;
        //console.log(this.productChildren);
        this.skyDome = this.world.SkyDome;
    }

    firstIntro() {
       return new Promise((resolve) => {
            this.timeline = new GSAP.timeline();
            this.timeline.set(".animatedis", { y: 0, yPercent: 100 });
            this.timeline.to(".preloader", {
                opacity: 0,
                delay: 1,
                onComplete: () => {
                    document
                        .querySelector(".preloader")
                        .classList.add("hidden");
                },
            });
            if (this.device === "desktop") {
                this.emit("enablecontrols");
                //this.productChildren["sketchfab_model"].position.x = -.1;
                //this.productChildren["sketchfab_model"].position.y = -5;
                
                //this.skyDome.position.x =-.1;
                //this.skyDome.position.y = 0;                
                //this.productChildren["sketchfab_model"].position.z = -1;
                //this.productRotate.z = Math.PI * this.productRotate.z;
                //this.timeline
                    //.to(this.productChildren.cube.scale, {
                    /*.to(this.productChildren["sketchfab_model"].scale, {
                        x: ()=>{  return .0037; },
                        y: .0037,
                        z: .0037,
                        onComplete: () => { /*console.log(this.product["sketchfab_model"].position);*///}
                    //});
                    /*.to(
                    this.productChildren["sketchfab_model"].rotation,
                    {
                        //y: Math.PI / 4,
                        z: this.productRotate.z, //Math.PI/this.world.experience.time.elapsedTime,
                    });*/
                    /* this.firstMoveTimeline.fromTo(
                        this.product.position,
                        { x: 0, y: 0, z: 0 },
                        {
                            x: () => {
                                return this.sizes.width * 0.0014;
                            },
                        }
                    ) */
                    /*this.timeline.fromTo(
                        this.productChildren["sketchfab_model"].position, 
                        { x: 0, y: 0, z: 0 },
                        {
                            y: 6,
                            z: 8,
                            x: () => {
                                return -7; //this.sizes.width * 0.1014;
                            },
                            ease: "back",
                            duration: 2,
                        }
                    )*/
                    /*.to(this.product.position, {
                        x: -8,
                        stagger: 0.05,
                        ease: "power1.out", //"power1.out",
                        duration: 1,
                    });*/
            } else {
                /*this.timeline
                  //  .to(this.productChildren.cube.scale, {
                    .to(this.productChildren["sketchfab_model"].scale, {
                        x: 1.4,
                        y: 1.4,
                        z: 1.4,
                        ease: "back.out(2.5)",
                        duration: 0.7,
                    })
                    .to(this.product.position, {
                        z: -1,
                        ease: "power1.out",
                        duration: 0.7,
                    });*/
            }
            /*this.timeline
                .to(".intro-text .animatedis", {
                    yPercent: 0,
                    stagger: 0.05,
                    ease: "back.out(1.7)",
                })
                .to(
                    ".arrow-svg-wrapper",
                    {
                        opacity: 1,
                    },
                    "same"
                )
                .to(
                    ".toggle-bar",
                    {
                        opacity: 1,
                        onComplete: resolve,
                        /*onComplete: () => { 
                                            this.animationCompleteState = "firstIntro";
                                            return resolve;
                                          },*/
              //      },
               //     "same"
               // );
        //});
    });
    }

    secondIntro() {
        return new Promise((resolve) => {
            this.secondTimeline = new GSAP.timeline();

            //if(this.experience.theme.theme == "light")
            //    this.experience.world.floor.plane.position.z = 0;
            //else
            //    this.experience.world.floor.plane.position.z = -100000;
               
            this.secondTimeline
                .to(
                    ".intro-text .animatedis",
                    {
                        yPercent: 100,
                        stagger: 0.05,
                        ease: "back.in(1.7)",
                    },
                    "fadeout"
                )
                .to(
                    ".arrow-svg-wrapper",
                    {
                        opacity: 1, //0,
                    },
                    "fadeout"
                )
                /*.to(
                    this.product.position,
                    {
                        x: 0,
                        y: 0,
                        z: 0,
                        ease: "power1.out",
                    },
                    "same"
                )*/
                /*.to(
                    //this.productChildren.cube.rotation,
                    this.productChildren["sketchfab_model"].rotation,
                    {
                        y: 2 * Math.PI + Math.PI / 4,
                    },
                    "same"
                )*/
                .to(
                    this.productChildren["sketchfab_model"].rotation,
                    {
                        z: 1,
                    },
                    "same")
                .to(
                    //this.productChildren.cube.scale,
                    this.productChildren["sketchfab_model"].scale,
                    {
                        x: 10,
                        y: 10,
                        z: 10,
                    },
                    "same"
                )
                .to(
                    this.camera.orthographicCamera.position,
                    {
                        y: 6.5,
                    },
                    "same"
                )
                .to(
                    //this.productChildren.cube.position,
                    this.productChildren["sketchfab_model"].position,
                    {
                        x: 0.638711,
                        y: 8.5618,
                        z: 1.3243,
                    },
                    "same"
                )
                .set(this.productChildren["sketchfab_model"].scale, {x: 8,y: 8,z: 8,})//.set(this.productChildren.body.scale, {
                /*.to(
                    //this.productChildren.cube.scale,
                    this.productChildren["sketchfab_model"].scale,
                    {
                        x: 0,
                        y: 0,
                        z: 0,
                        duration: 1,
                    },
                    "introtext"
                )*/
                .to(
                    ".hero-main-title .animatedis",
                    {
                        yPercent: 0,
                        stagger: 0.07,
                        ease: "back.out(1.7)",
                    },
                    "introtext"
                )
                .to(
                    ".hero-main-description .animatedis",
                    {
                        yPercent: 0,
                        stagger: 0.07,
                        ease: "back.out(1.7)",
                    },
                    "introtext"
                )
                .to(
                    ".first-sub .animatedis",
                    {
                        yPercent: 0,
                        stagger: 0.07,
                        ease: "back.out(1.7)",
                    },
                    "introtext"
                )
                .to(
                    ".second-sub .animatedis",
                    {
                        yPercent: 0,
                        stagger: 0.07,
                        ease: "back.out(1.7)",
                    },
                    "introtext"
                )
                /*.to(
                    this.productChildren.aquarium.scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        ease: "back.out(2.2)",
                        duration: 0.5,
                    },
                    ">-0.5"
                )
                .to(
                    this.productChildren.clock.scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        ease: "back.out(2.2)",
                        duration: 0.5,
                    },
                    ">-0.4"
                )
                .to(
                    this.productChildren.shelves.scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        ease: "back.out(2.2)",
                        duration: 0.5,
                    },
                    ">-0.3"
                )
                .to(
                    this.productChildren.floor_items.scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        ease: "back.out(2.2)",
                        duration: 0.5,
                    },
                    ">-0.2"
                )
                .to(
                    this.productChildren.desks.scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        ease: "back.out(2.2)",
                        duration: 0.5,
                    },
                    ">-0.1"
                )
                .to(
                    this.productChildren.table_stuff.scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        ease: "back.out(2.2)",
                        duration: 0.5,
                    },
                    ">-0.1"
                )
                .to(this.productChildren.computer.scale, {
                    x: 1,
                    y: 1,
                    z: 1,
                    ease: "back.out(2.2)",
                    duration: 0.5,
                })
                .set(this.productChildren.mini_floor.scale, {
                    x: 1,
                    y: 1,
                    z: 1,
                })
                .to(
                    this.productChildren.chair.scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        ease: "back.out(2.2)",
                        duration: 0.5,
                    },
                    "chair"
                )
                .to(
                    this.productChildren.fish.scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        ease: "back.out(2.2)",
                        duration: 0.5,
                    },
                    "chair"
                )
                .to(
                    this.productChildren.chair.rotation,
                    {
                        y: 4 * Math.PI + Math.PI / 4,
                        ease: "power2.out",
                        duration: 1,
                    },
                    "chair"
                )
                */
                .to(".arrow-svg-wrapper", {
                    opacity: 1,
                    onComplete: resolve,
                    /*onComplete: () => { 
                        this.animationCompleteState = "secondIntro";
                        return resolve;
                      },*/
                });
        });
    }
    
    /*keyDownArrowEvent(e) {
        e = e || window.event;

        if (e.keyCode == '38') {
            // up arrow
        }
        else if (e.keyCode == '40') {
            // down arrow
            this.removeEventListeners();
            this.playSecondIntro();
        }
        else if (e.keyCode == '37') {
        // left arrow
        }
        else if (e.keyCode == '39') {
        // right arrow
        }

    }*/
    onScroll(e) {
        if (e.deltaY > 0) {
            this.removeEventListeners();
            //this.playSecondIntro();
        }
    }

    onTouch(e) {
        this.initalY = e.touches[0].clientY;
    }

    onTouchMove(e) {
        let currentY = e.touches[0].clientY;
        let difference = this.initalY - currentY;
        if (difference > 0) {
            console.log("swipped up");
            this.removeEventListeners();
            //this.playSecondIntro();
        }
        this.intialY = null;
    }

    removeEventListeners() {
        window.removeEventListener("wheel", this.scrollOnceEvent);
        window.removeEventListener("onkeydown", this.keyDownArrowEvent);
        window.removeEventListener("touchstart", this.touchStart);
        window.removeEventListener("touchmove", this.touchMove);
    }

    async playIntro() {
        this.scaleFlag = true;
        //if(this.animationCompleteState == "start")
            await this.firstIntro();
        this.moveFlag = true;
        this.scrollOnceEvent = this.onScroll.bind(this);
        //this.keyDownArrowEvent = this.onKeyDown.bind(this);
        this.touchStart = this.onTouch.bind(this);
        this.touchMove = this.onTouchMove.bind(this);
        window.addEventListener("wheel", this.scrollOnceEvent);
        document.onkeydown = (e) => { 
            e = e || window.event;
    
            if (e.key == 'ArrowUp') {
                // up arrow
            }
            else if (e.key == 'ArrowDown') {
                // down arrow
                this.removeEventListeners();
                //if(this.animationCompleteState == "firstIntro")
                //if(this.moveFlag)
                //   this.playSecondIntro();
            }
            else if (e.key == 'ArrowLeft') {
            // left arrow
            }
            else if (e.key == 'ArrowRight') {
            // right arrow
            } 
        };
        //window.addEventListener("onkeydown", this.keyDownArrowEvent);
        window.addEventListener("touchstart", this.touchStart);
        window.addEventListener("touchmove", this.touchMove);
    }
    async playSecondIntro() {
        this.moveFlag = false;
        await this.secondIntro();
        this.scaleFlag = false;
        //this.emit("enablecontrols");
    }

    move() {
        if (this.device === "desktop") {
            this.product.position.set(-1, 0, 0);
        } else {
            this.product.position.set(0, 0, -1);
        }
    }

    scale() {
        this.productChildren.rectLight.width = 0;
        this.productChildren.rectLight.height = 0;

        if (this.device === "desktop") {
            this.product.scale.set(0.11, 0.11, 0.11);
        } else {
            this.product.scale.set(0.07, 0.07, 0.07);
        }
    }

    update() {
        if (this.moveFlag) {
            //this.move();
        }

        if (this.scaleFlag) {
            //this.scale();
        }
    }
}

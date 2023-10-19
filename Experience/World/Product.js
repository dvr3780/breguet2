import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

export default class Product {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.product = this.resources.items.product;
        this.actualProduct = this.product.scene;
        this.productChildren = {};

        this.lerp = {
            current: 0,
            target: 0,
            ease: 0.1,
        };
        this.previousLerp = 0;
        this.previousDelta = 0;
        this.pauseRotate = false;
        this.setModel();
        this.setAnimation();
        this.onMouseMove();
    }

    setModel() {


        //this.actualProduct.children[0].children[0].children[0].children[0].children.forEach((child) => {
        this.actualProduct.children[0].traverse( ( object ) => {

                if ( object.isGroup ) {
                    if(object.name === "Hoodie_Material3748_0"){
                        object.children[0].material.color.set( 0x00ff00 );
                    }
                    if(object.name === "Hoodie_Material3754_0"){
                        object.material.color.set( 0xff0000 );
                    }
                    if(object.name === "Hoodie_Material3758_0"){
                        object.material.color.set( 0x0000ff );
                    }
                }
            
            } );  
            //child.castShadow = true;
            //child.receiveShadow = true;

            /*if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    console.log(groupchild.material);
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            }*/

            // console.log(child);

            /* if (child.name === "Hoodie_Material3748_0") {
                // console.log(child);
                //child.children[0].material = new THREE.MeshPhysicalMaterial();
                //child.children[0].material.roughness = 0;
                //child.children[0].material.color.set(0x549dd2);
                //child.children[0].material.ior = 3;
                //child.children[0].material.transmission = 1;
                //child.children[0].material.opacity = 1;
                //child.children[0].material.depthWrite = false;
                //child.children[0].material.depthTest = false;
            }

            if (child.name === "Hoodie_Material3754_0") {
                //child.children[1].material = new THREE.MeshBasicMaterial({
                //    map: this.resources.items.screen,
                //});
                let clr = new THREE.Color();
                clr.setHex(0xff0000)
                child.material.color = clr.getHex();
            }

            if (child.name === "Hoodie_Material3758_0") {
                //child.position.x = -0.289521;
                //child.position.z = 8.83572;
            }

            // if (
            //     child.name === "Mailbox" ||
            //     child.name === "Lamp" ||
            //     child.name === "FloorFirst" ||
            //     child.name === "FloorSecond" ||
            //     child.name === "FloorThird" ||
            //     child.name === "Dirt" ||
            //     child.name === "Flower1" ||
            //     child.name === "Flower2"
            // ) {
            //     child.scale.set(0, 0, 0);
            // }

           // child.scale.set(0, 0, 0);
            /* if (child.name === "Cube") {
                // child.scale.set(1, 1, 1);
                child.position.set(0, -1, 0);
                child.rotation.y = Math.PI / 4;
            } */

            //this.productChildren[child.name.toLowerCase()] = child;
            //this.actualProduct.children[0].children[0].children[0].children[0].children
       // }); */

        this.actualProduct.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    console.log(groupchild.material);
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            }

            // console.log(child);

            /*if (child.name === "Aquarium") {
                // console.log(child);
                child.children[0].material = new THREE.MeshPhysicalMaterial();
                child.children[0].material.roughness = 0;
                child.children[0].material.color.set(0x549dd2);
                child.children[0].material.ior = 3;
                child.children[0].material.transmission = 1;
                child.children[0].material.opacity = 1;
                child.children[0].material.depthWrite = false;
                child.children[0].material.depthTest = false;
            }

            if (child.name === "Computer") {
                child.children[1].material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.screen,
                });
            }

            if (child.name === "Mini_Floor") {
                child.position.x = -0.289521;
                child.position.z = 8.83572;
            }

            // if (
            //     child.name === "Mailbox" ||
            //     child.name === "Lamp" ||
            //     child.name === "FloorFirst" ||
            //     child.name === "FloorSecond" ||
            //     child.name === "FloorThird" ||
            //     child.name === "Dirt" ||
            //     child.name === "Flower1" ||
            //     child.name === "Flower2"
            // ) {
            //     child.scale.set(0, 0, 0);
            // }
            */
            child.scale.set(0, 0, 0);
            
            /*
           if (child.name === "Cube") {
                // child.scale.set(1, 1, 1);
                child.position.set(0, -1, 0);
                child.rotation.y = Math.PI / 4;
            }
            */

            this.productChildren[child.name.toLowerCase()] = child;
        });

        const width = 0.5;
        const height = 0.7;
        const intensity = 1;
        const rectLight = new THREE.RectAreaLight(
            0xffffff,
            intensity,
            width,
            height
        );
        rectLight.position.set(7.68244, 7, 0.5);
        rectLight.rotation.x = -Math.PI / 2;
        rectLight.rotation.z = Math.PI / 4;
        this.actualProduct.add(rectLight);

        this.productChildren["rectLight"] = rectLight;

        // const rectLightHelper = new RectAreaLightHelper(rectLight);
        // rectLight.add(rectLightHelper);  
        // console.log(this.product);

        this.scene.add(this.actualProduct);
        //this.actualProduct.scale.set(1, 1, 1);
        this.actualProduct.position.set(0, 0, 0);
    }

    setAnimation() {
        if(this.product.animations.length>0){
            this.mixer = new THREE.AnimationMixer(this.actualProduct);
            this.swim = this.mixer.clipAction(this.product.animations[0]);
            this.swim.play();
        }
    }

    onMouseMove() {
        window.addEventListener("mousemove", (e) => {
            this.rotation =
                ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
            this.lerp.target = this.rotation * 0.5;
            this.pauseRotate = true;
        });
    }

    resize() {}

    update() {
        this.lerp.current = GSAP.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        );

        if(this.pauseRotate == false){
            this.actualProduct.rotation.y = this.lerp.current;
            this.previousDelta += this.time.delta * 0.0003;
            this.previousLerp = this.previousDelta;
            this.lerp.target = this.previousLerp;
        }else{
            var delayInMilliseconds = 50; //1 second

            setTimeout(()=> {
                this.pauseRotate = false;
            } , delayInMilliseconds);
            this.actualProduct.rotation.y = this.lerp.current;
            this.previousDelta = this.lerp.current;
            this.previousLerp = this.previousDelta;
            this.lerp.target = this.previousLerp;
        }
        if(this.mixer){
            this.mixer.update(this.time.delta * 0.0009);
        }
    }
}

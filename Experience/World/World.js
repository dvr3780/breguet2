import * as THREE from "three";
import Experience from "../Experience.js";

import Product from "./Product.js";
import Wall from "./Wall.js";
import SkyDome from "./SkyDome.js";
import Wave from "./Wave.js";
import Controls from "./Controls.js";
import Environment from "./Environment.js";
import { EventEmitter } from "events";

export default class World extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;
        
        this.resources.on("ready", () => {
            this.environment = new Environment();
            this.wall = new Wall();
            //this.SkyDome = new SkyDome();
            //this.product = new Product();
            //this.stars = new Stars();
            //this.wave = new Wave();
            //this.controls = new Controls();
            this.emit("worldready");
        });

        
        // this.sizes.on("switchdevice", (device) => {
        //     this.switchDevice(device);
        // });
    }
    // switchDevice(device) {
    //     if (this.controls) {
    //         this.controls.switchDevice(device);
    //     }
    // }

    resize() {}

    update() {
        /*if (this.product) {
            this.product.update();
        }
        if(this.SkyDome){
            this.SkyDome.update();
        }
        if(this.wave){
            this.wave.update();
        }*/
        if(this.wall){
            this.wall.update();
        }
        if (this.controls) {
            this.controls.update();
        }
    }
}

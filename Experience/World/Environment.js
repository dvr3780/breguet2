import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import GUI from "lil-gui";

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        // this.gui = new GUI({ container: document.querySelector(".hero-main") });
        /*this.obj = {
            colorObj: { r: 0, g: 0, b: 0 },
            intensity: 3,
        };*/
        this.obj = {
            colorObj: { r: 0, g: 0, b: 0 },
            intensity: 1,
        };
        this.setSunlight();
        // this.setGUI();
    }

    setGUI() {
        this.gui.addColor(this.obj, "colorObj").onChange(() => {
            this.sunLight.color.copy(this.obj.colorObj);
            this.ambientLight.color.copy(this.obj.colorObj);
            console.log(this.obj.colorObj);
        });
        this.gui.add(this.obj, "intensity", 0, 10).onChange(() => {
            this.sunLight.intensity = this.obj.intensity;
            this.sunLight.ambientLight = this.obj.intensity;
        });
    }

    setSunlight() {
        var instensity = 3;
        //this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
        this.sunLight = new THREE.DirectionalLight("#e3d8cd", instensity);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(2048, 2048);
        this.sunLight.shadow.normalBias = 0.05;
        // const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
        // this.scene.add(helper);

        //this.sunLight.position.set(-1.5, 7, 3);
        var instensity = 7;
        this.sunLight.position.set(-1.5, 7, instensity);
        this.scene.add(this.sunLight);

        var instensity = 7;
        //this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
        this.ambientLight = new THREE.AmbientLight("#e3d8cd", instensity);
        this.scene.add(this.ambientLight);
    }

    resize() {}

    update() {}
}

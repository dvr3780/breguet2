import * as THREE from "three";
import Experience from "../Experience.js";

export default class Stars {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.starFieldBG();
    }

    getRandomParticelPos(particleCount) {
        const arr = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
          arr[i] = (Math.random() - 0.5) * 10;
        }
        return arr;
    }

    starFieldBG() {
        // Geometry
        this.geometrys = [new THREE.BufferGeometry(), new THREE.BufferGeometry()];
      
        this.geometrys[0].setAttribute(
          "position",
          new THREE.BufferAttribute(this.getRandomParticelPos(2500), 3)
        );
        this.geometrys[1].setAttribute(
          "position",
          new THREE.BufferAttribute(this.getRandomParticelPos(2500), 3)
        );
      
        this.loader = new THREE.TextureLoader();
      
        // material
        this.materials = [
          new THREE.PointsMaterial({
            size: .4,
            /*map: this.loader.load(
                this.resources.stars['star1']
                //"https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp1.png"
            ),*/
            //transparent: true,
            color: "#0000ff",
          }),
          new THREE.PointsMaterial({
            size: .000754,
            /*map: this.loader.load(
                this.resources.stars['star2']
                //"https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp2.png"
            ),*/
            //transparent: true,
            color: "#ffffff",
          })
        ];
      
        this.starsT1 = new THREE.Points(this.geometrys[0], this.materials[0]);
        this.starsT2 = new THREE.Points(this.geometrys[1], this.materials[1]);
        this.scene.add(this.starsT1);
        this.scene.add(this.starsT2);
        this.starsT1.position.z = 0;
        this.starsT2.position.z = 0;

      }
    

    resize() {}

    update() {
                
    }
}

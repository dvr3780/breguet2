import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";

export default class SkyDome {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        //this.skyGeo = new THREE.SphereGeometry(100000, 25, 25);
        this.time = this.experience.time;        
        //SKY
        this.lerp = {
            current: 0,
            target: 0,
            ease: 0.1,
        };
        this.previousLerp = 0;
        this.previousDelta = 0;
        
        this.loader = new THREE.TextureLoader();
        var texture = this.loader.load( '/assets/img/tile2.jpg',
                                    this.onLoad,
                                    this.onProgress,
                                    this.onError, 
                                    function ( texture ) {
                                        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                                        texture.offset.set( 0, 0 );
                                        texture.repeat.set( 2, 2 );
                                    
                                        // your code
                                    
                                    });
        /*this.loader = new THREE.TextureLoader();
        this.loader.load(
            "/assets/img/tile.jpg",
            this.onLoad,
            this.onProgress,
            this.onError,
        );*/

       // this.createSkyDome();
    }

    onLoad = texture => {

        var objGeometry = new THREE.SphereBufferGeometry(6, 35, 35);
        var objMaterial = new THREE.MeshPhongMaterial({
            map: texture,
            flatShading: true
        });
        objMaterial.side = THREE.BackSide;
        //objMaterial.side = THREE.DoubleSide;
        this.earthMesh = new THREE.Mesh(objGeometry, objMaterial);
        this.earthMesh.position.set(0, -5, -8);
        this.earthMesh.rotation.set(0, -10, 0);
        this.scene.add(this.earthMesh);
        //start animation
        //this.start();
    };

    onProgress = xhr => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    };

    // Function called when download errors
    onError = error => {
        console.log("An error happened" + error);
    };

    /*createSkyDome() {
        this.loader  = new THREE.TextureLoader();
        this.texture = this.loader.load( "/assets/img/bg.jpg" );
        this.uniforms = {
            texture: { type: 't', value: this.texture }
          };

        this.material = new THREE.ShaderMaterial({ 
            //map: texture,
            //color: 0xff0000,
            uniforms: this.uniforms,
            vertexShader:   document.getElementById('sky-vertex').textContent,
            fragmentShader: document.getElementById('sky-fragment').textContent
        });

        this.sky = new THREE.Mesh(this.skyGeo, this.material);
        this.sky.material.side = THREE.BackSide;
        //this.sky.scale.set(-1, 1, 1);
        //this.sky.eulerOrder = 'XZY';
        //this.sky.renderDepth = 1000.0;
        this.sky.position.set(10, -10, -2);
        //this.sky.scale.set(2, 2, 2);
        //sky.scale.y = 2;
        //sky.scale.z = 2;
        this.scene.add(this.sky);
    }
*/
    resize() {}

    update() {
        this.lerp.current = GSAP.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        );
        if(this.earthMesh)
            this.earthMesh.rotation.y = this.lerp.current;
        this.lerp.target -= this.time.delta * 0.00009;    
    }
}

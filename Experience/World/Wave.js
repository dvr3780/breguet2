import * as THREE from "three";
import Experience from "../Experience.js";
import dat from 'dat.gui';

export default class Wave {

    constructor() {
        //this.gui = new dat.GUI({ closed: true, width: 340 });
        //this.bigWavesFolder = this.gui.addFolder("Large Waves");
        //this.smallWavesFolder = this.gui.addFolder("Small Waves");
        //this.colorFolder = this.gui.addFolder("Colors");
        this.debugObject = {
            waveDepthColor: "#102e8e", //"#1e4d40",
            waveSurfaceColor: "#00aed1", //"#4d9aaa",
            fogNear: 1,
            fogFar: 3,
            fogColor: "#8e99a2"
        };
        this.experience = new Experience();
        this.canvas = this.experience.canvas;
        this.scene = this.experience.scene;

        //this.axesHelper = new THREE.AxesHelper( 5 );
        //this.scene.add( this.axesHelper );

        //this.scene.fog = new THREE.Fog(
        //    this.debugObject.fogColor,
        //    this.debugObject.fogNear,
        //    this.debugObject.fogFar
        //  );
        //this.scene.background = new THREE.Color(this.debugObject.fogColor);
        this.waterGeometry = new THREE.PlaneGeometry(12, 12, 100, 100);

        // Material
        this.waterMaterial = new THREE.ShaderMaterial({
            vertexShader: document.getElementById("vertexShader").textContent,
            fragmentShader: document.getElementById("fragmentShader").textContent,
            transparent: true,
            fog: true,
            uniforms: {
                uTime: { value: 0 },
                uMouse: { value: new THREE.Vector2() },
                uBigWavesElevation: { value: 0.2 },
                uBigWavesFrequency: { value: new THREE.Vector2(4, 2) },
                uBigWaveSpeed: { value: 0.75 },
                // Small Waves
                uSmallWavesElevation: { value: 0.15 },
                uSmallWavesFrequency: { value: 3 },
                uSmallWavesSpeed: { value: 0.2 },
                uSmallWavesIterations: { value: 4 },
                // Color
                uDepthColor: { value: new THREE.Color(this.debugObject.waveDepthColor) },
                uSurfaceColor: { value: new THREE.Color(this.debugObject.waveSurfaceColor) },
                uColorOffset: { value: 0.08 },
                uColorMultiplier: { value: 5 },

                // Fog, contains fogColor, fogDensity, fogFar and fogNear
                ...THREE.UniformsLib["fog"]
            }
        });

        this.sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        //this.camera = this.experience.camera.camera;

        //this.controls = new OrbitControls(this.camera, this.canvas);
        //this.controls.enableDamping = true;
        
        // Big Waves
        /*this.bigWavesFolder
        .add(this.waterMaterial.uniforms.uBigWavesElevation, "value")
        .min(0)
        .max(1)
        .step(0.001)
        .name("Elevation");
        this.bigWavesFolder
        .add(this.waterMaterial.uniforms.uBigWavesFrequency.value, "x")
        .min(0)
        .max(10)
        .step(0.001)
        .name("Frequency X");
        this.bigWavesFolder
        .add(this.waterMaterial.uniforms.uBigWavesFrequency.value, "y")
        .min(0)
        .max(10)
        .step(0.001)
        .name("Frequency Y");
        this.bigWavesFolder
        .add(this.waterMaterial.uniforms.uBigWaveSpeed, "value")
        .min(0.25)
        .max(5)
        .step(0.001)
        .name("Speed");

        // Small Waves
        this.smallWavesFolder
        .add(this.waterMaterial.uniforms.uSmallWavesElevation, "value")
        .min(0.0)
        .max(0.3)
        .step(0.001)
        .name("Elevation");
        this.smallWavesFolder
        .add(this.waterMaterial.uniforms.uSmallWavesFrequency, "value")
        .min(0)
        .max(30)
        .step(0.001)
        .name("Frequency");
        this.smallWavesFolder
        .add(this.waterMaterial.uniforms.uSmallWavesSpeed, "value")
        .min(0.0)
        .max(1)
        .step(0.001)
        .name("Speed");
        this.smallWavesFolder
        .add(this.waterMaterial.uniforms.uSmallWavesIterations, "value")
        .min(0)
        .max(10)
        .step(1)
        .name("Iterations");

        // Colors
        this.colorFolder
        .add(this.waterMaterial.uniforms.uColorOffset, "value")
        .min(0)
        .max(0.15)
        .step(0.0001)
        .name("Color Offset");
        this.colorFolder
        .add(this.waterMaterial.uniforms.uColorMultiplier, "value")
        .min(0.0)
        .max(10.0)
        .step(0.001)
        .name("Color multiplier");
        this.colorFolder
        .addColor(this.debugObject, "waveDepthColor")
        .name("Wave depth color")
        .onChange(() => {
        this.waterMaterial.uniforms.uDepthColor.value.set(this.debugObject.waveDepthColor);
        });
        this.colorFolder
        .addColor(this.debugObject, "waveSurfaceColor")
        .name("Wave surface color")
        .onChange(() => {
        this.waterMaterial.uniforms.uSurfaceColor.value.set(
            this.debugObject.waveSurfaceColor
        );
        });
        this.colorFolder
        .addColor(this.debugObject, "fogColor")
        .name("Fog Color")
        .onChange(() => {
        this.waterMaterial.uniforms.fogColor.value.set(this.debugObject.fogColor);
        this.scene.background.set(this.debugObject.fogColor);
        this.scene.fog = new THREE.Fog(
            this.debugObject.fogColor,
            this.debugObject.fogNear,
            this.debugObject.fogFar
        );
        });
        */
    }

    update(){
        // Update time
        if(this.experience.theme.theme == "light")
            this.water.position.y =-2;
        else
         this.water.position.y = -5;
        
        this.waterMaterial.uniforms.uTime.value = this.experience.time.elapsedTime;
    }
}
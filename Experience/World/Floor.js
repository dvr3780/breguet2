import * as THREE from "three";
import Experience from "../Experience.js";

export default class Floor {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.theme = this.experience.theme;

        this.theme.on("switch", (theme) => {
            this.switchTheme(theme);
        }); 
        this.setFloor();
        this.setCircles();
    }

    setFloor() {
        
        let clr = new THREE.Color();
        (this.theme.theme == "light")? clr.setHex(0xffe6a2) : clr.setHex(0x000000);
    
        if(this.theme.theme == "light"){
            if(!this.geometry){
                this.geometry = new THREE.PlaneGeometry(100, 100);
                this.material = new THREE.MeshStandardMaterial({
                    color: clr.getHex(),
                    //side: THREE.BackSide,
                 });
            }else{
                this.material.color.setHex(clr.getHex());
                //this.scene.plane.material.color.setHex(0xffe6a2);
            }
            if(!this.plane){
                this.plane = new THREE.Mesh(this.geometry, this.material);
                this.scene.add(this.plane);
            }
            else{
                //this.plane.geometry = this.geometry;
                this.plane.material.color.setHex(clr.getHex()); //= this.material;
            }
            this.plane.position.x = 0;
            this.plane.position.y = 0;
            this.plane.position.z = -2;
        }else{
            if(!this.geometry){
                this.geometry = new THREE.PlaneGeometry(100, 100);
                this.material = new THREE.MeshStandardMaterial({
                    color: clr.getHex(),
                    });
            }else{
                this.material.color.setHex(clr.getHex());
                //this.scene.plane.material.color.setHex(0x000000);
            }
            if(!this.plane){
                this.plane = new THREE.Mesh(this.geometry, this.material);                
            }
            else{
                //this.plane.geometry = this.geometry;
                this.plane.material.color.setHex(clr.getHex());// = this.material;
            }
            this.plane.position.x = 0;
            this.plane.position.y = 0;
            this.plane.position.z = -100000;    
        }
       
        
        //this.plane.rotation.x = Math.PI / 2;
        //this.plane.position.x = 0;
        //this.plane.position.y = -0.3;
        //sthis.plane.position.z = 0;
       // this.plane.receiveShadow = true;
    }

    switchTheme(theme){
        if(theme == "light"){
            //this.material = new THREE.MeshStandardMaterial({
            //    color: 0xffe6a2,
                //side: THREE.BackSide,
            //});
            //this.plane = new THREE.Mesh(this.geometry, this.material);
            //this.scene.add(this.plane);
            //this.geometry = new THREE.PlaneGeometry(100, 100);
            //this.material = new THREE.MeshStandardMaterial({
            //color: 0xffe6a2,
            //side: THREE.BackSide,
            //});
            //this.plane = new THREE.Mesh(this.geometry, this.material);
            this.setFloor();
            //this.plane.position.x = 0;
            //this.plane.position.y = 0;
            //this.plane.position.z = -2;
            //this.plane.material.color =  0xffe6a2;
            
            //this.plane.rotation.x = Math.PI/2;
            //this.plane.position.x = 0;
            //this.plane.position.y = -0.3;
            //this.plane.position.z = 0;
            //this.plane.receiveShadow = true;
            this.setCircles();
            /*if(this.circleFirst)
                this.circleFirst.material.color  = 0xe5a1aa;
            if(this.circleSecond)
                this.circleSecond.material.color  = 0x8395cd;
            if(this.circleThird)
                this.circleThird.material.color  = 0x7ad0ac;
            */
        }else if(theme == "dark"){
            //this.material = new THREE.MeshStandardMaterial({
             //   color: 0x000000, //0xffe6a2,
                //side: THREE.BackSide,
            //});
            //this.plane.material.color =  0x000000;
            //this.plane = new THREE.Mesh(this.geometry, this.material);
            //this.scene.add(this.plane);
            this.setFloor();
            //this.plane.position.x = 0;
            //this.plane.position.y = 0;
            //this.plane.position.z = -100000;
        
            //this.plane.rotation.x = Math.PI/2;
            //this.plane.position.x = 0;
            //this.plane.position.y = -0.3;
            //this.plane.position.z = 10;
            //this.plane.receiveShadow = true;
            this.setCircles();
            /*
            if(this.circleFirst)
                this.circleFirst.material.color  = 0x2d6a4f;
            if(this.circleSecond)
                this.circleSecond.material.color  = 0x2d6a4f;
            if(this.circleThird)
                this.circleThird.material.color  = 0x2d6a4f;
            */
        }
    }

    setCircles() {
        const geometry = new THREE.CircleGeometry(5, 64);
        let material;
        let material2;
        let material3 
        let clr = new THREE.Color();
        
        (this.theme.theme == "light")? clr.setHex(0x7ad0ac) : clr.setHex(0x001219);
        //if(this.theme.theme == "light"){
            if(!this.circleFirst){
                material = new THREE.MeshStandardMaterial({ color: clr.getHex() /*0xe5a1aa*/ });
                this.circleFirst = new THREE.Mesh(geometry, material);
                this.scene.add(this.circleFirst);
            }
            else{
                this.circleFirst.material.color.setHex(clr.getHex());
            }
            if(!this.circleSecond){
                material2 = new THREE.MeshStandardMaterial({ color: clr.getHex() /*0x8395cd*/ });
                this.circleSecond = new THREE.Mesh(geometry, material2);
                this.scene.add(this.circleSecond);
            }
            else{
                this.circleSecond.material.color.setHex(clr.getHex());
            }
            if(!this.circleThird){
                material3 = new THREE.MeshStandardMaterial({ color: clr.getHex() });
                this.circleThird = new THREE.Mesh(geometry, material3);
                this.scene.add(this.circleThird);
            }
            else{
                 this.circleThird.material.color.setHex(clr.getHex());
            }
        /*}else{
            material = new THREE.MeshStandardMaterial({ color: 0x2d6a4f });
            material2 = new THREE.MeshStandardMaterial({ color: 0x2d6a4f });
            material3 = new THREE.MeshStandardMaterial({ color: 0x2d6a4f });
        }*/

        
        //this.circleSecond = new THREE.Mesh(geometry, material2);
        //this.circleThird = new THREE.Mesh(geometry, material3);

        /*this.circleFirst.position.y = -0.29;

        this.circleSecond.position.y = -0.28;
        this.circleSecond.position.x = 2;

        this.circleThird.position.y = -0.27;

        this.circleFirst.position.z = 300;
        this.circleSecond.position.z = 300;
        this.circleThird.position.z = 300;
        */
        
        this.circleFirst.scale.set(0, 0, 0);
        this.circleSecond.scale.set(0, 0, 0);
        this.circleThird.scale.set(0, 0, 0);

        /*this.circleFirst.rotation.x =
            this.circleSecond.rotation.x =
            this.circleThird.rotation.x =
                -Math.PI / 2;
        */
        this.circleFirst.receiveShadow =
            this.circleSecond.receiveShadow =
            this.circleThird.receiveShadow =
                true;

        //this.scene.add(this.circleFirst);
        //this.scene.add(this.circleSecond);
        //this.scene.add(this.circleThird);
    }

    resize() {}

    update() {}
}

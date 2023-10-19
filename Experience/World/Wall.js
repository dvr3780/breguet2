import * as THREE from "three";
import Experience from "../Experience.js";

export default class Floor {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.setWall();
    }

    setWall() {
        
        let clr = new THREE.Color();
        
        //if(this.theme.theme == "light"){
            if(!this.geometry){
                this.texture = this.texture = new THREE.TextureLoader().load( '/assets/img/joux_map-2400-5c2025fb904969f2.webp');
                this.geometry = new THREE.PlaneGeometry(14, 10);
                this.material = new THREE.MeshBasicMaterial({map: this.texture, color: 0xbdae46});
                
                //this.material = new THREE.MeshStandardMaterial({
                //    color: clr.getHex(),
                    //side: THREE.BackSide,
                 //});
            //}else{
            //    this.material.color.setHex(clr.getHex());
                //this.scene.plane.material.color.setHex(0xffe6a2);
            }
            if(!this.plane){
                this.plane = new THREE.Mesh(this.geometry, this.material);
                this.scene.add(this.plane);
            }
            //else{
                //this.plane.geometry = this.geometry;
            //    this.plane.material.color.setHex(clr.getHex()); //= this.material;
           // }
            this.plane.position.x = 0;
            this.plane.position.y = 0;
            this.plane.position.z = 0;
        /*}else{
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
        }*/
       
        
        //this.plane.rotation.x = Math.PI / 2;
        //this.plane.position.x = 0;
        //this.plane.position.y = -0.3;
        //sthis.plane.position.z = 0;
       // this.plane.receiveShadow = true;
    }
    
    resize() {}

    update() {}
}

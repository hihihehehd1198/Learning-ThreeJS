import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  standalone: true,
  imports: [CommonModule]

})
export class CircleComponent implements OnInit, AfterViewInit {
  // private renderer = Injec
  @ViewChild('sceneBackground', { static: false }) sceneBackground!: ElementRef
  constructor(private renderer: Renderer2) { }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderrer = new THREE.WebGLRenderer();



    renderrer.setSize(300, 300)
    this.renderer.appendChild(this.sceneBackground.nativeElement, renderrer.domElement)
    this.createCircle(scene, camera, renderrer)
    // this.createLine(scene, camera, renderrer)
    // this.createLine()
  }

  onEvent(event: any): void {

    console.log(event)
  }


  createCircle(scene: any, camera: any, renderrer: any): void {
    const geometry = new THREE.CircleGeometry(1, 500);
    const material = new THREE.MeshBasicMaterial({ color: new THREE.Color('skyblue') })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    const animate = function () {
      requestAnimationFrame(animate);

      //logic when animate is here 
      cube.rotation.z -= 0;
      // cube.rotation.y += 0.2;


      //--------------------------

      renderrer.render(scene, camera)

    }
    camera.position.z = 3
    renderrer.render(scene, camera)
    animate()
  }

  createLine(scene: any, camera: any, renderrer: any): void {
    const geometry = new THREE.BufferGeometry();
    // create a simple square shape. We duplicate the top left and bottom right
    // vertices because each vertex needs to appear once per triangle.
    const vertices = new Float32Array([
      -1.0, -1.0, 1.0,
      1.0, -1.0, 1.0,
      1.0, 1.0, 1.0,
    ]);

    // itemSize = 3 because there are 3 values (components) per vertex
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 6));
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new THREE.Mesh(geometry, material);
    camera.position.z = 3
    renderrer.render(scene.camera)
  }
}

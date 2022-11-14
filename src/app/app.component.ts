import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class AppComponent implements AfterViewInit, OnInit {


  constructor(private renderer: Renderer2) {
  }
  @ViewChild('backgroundScene', { static: false }) backgroundScene!: ElementRef;
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 100)
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerHeight, window.innerHeight);
    this.renderer.appendChild(this.backgroundScene.nativeElement, renderer.domElement)
    const geometry = new THREE.BoxGeometry(0.3, 1, 0.5)
    // const triangle = new THREE.Triangle(new THREE.Vector3(1, 2, 3), new THREE.Vector3(1, 3, 2), new THREE.Vector3(1, 3, 1));
    // const geometry = new THREE.BoxGeometry(2, 2, 0.1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // const x = 0, y = 0;



    // const shape = new THREE.Shape()

    // shape.moveTo(x, y);
    // shape.bezierCurveTo(x + 0, y + 1, x + 4, y, x, y);
    // // shape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
    // // shape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
    // // shape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
    // // shape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
    // // shape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);
    // const geo2 = new THREE.ShapeGeometry(shape)
    // const sc2 = new THREE.Mesh(geo2, material)
    // scene.add(sc2)





    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.1;
      // cube.rotation.z +=0.1;
      renderer.render(scene, camera)

    }
    camera.position.z = 5
    renderer.render(scene, camera)
    animate()
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

}

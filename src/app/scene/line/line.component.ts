import { animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, Inject, OnInit, Renderer2, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LineComponent implements OnInit, AfterViewInit {

  @ViewChild('backgroundScene') backgroundScene!: ElementRef
  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: MouseEvent) {
    console.log(event)
  }
  private rendererDom = inject(Renderer2)
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.createLineScene()
  }




  /**
  * @step by step create scene with object 3d  three js :
  * @step1 create scene
  * @step2 create camera (using zoom in - zoom out scene)
  * @step3 constructor renderer when add object 3d inside scene view 
  * @step4 create object 3d  
  * @step5 add to inside scene
  * @step6 rerender view scene with new state of scene 
  */
  createLineScene(): void {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(100, 1, 0.1, 2000)
    const renderer = new THREE.WebGLRenderer()
    this.rendererDom.appendChild(this.backgroundScene.nativeElement, renderer.domElement)
    renderer.setSize(400, 400)

    camera.position.set(0, 0, 30);

    const material = new THREE.LineBasicMaterial({ color: 'yellow' });

    const pointsH = [];
    // pointsH.push(new THREE.Vector3(10, 0, 0));
    pointsH.push(new THREE.Vector3(0, 10, 0));
    pointsH.push(new THREE.Vector3(0, 0, 0));
    pointsH.push(new THREE.Vector3(0, 5, 0));
    pointsH.push(new THREE.Vector3(8, 5, 0));
    pointsH.push(new THREE.Vector3(8, 10, 0));
    pointsH.push(new THREE.Vector3(8, 0, 0));




    const geometry = new THREE.BufferGeometry().setFromPoints(pointsH);
    const line = new THREE.Line(geometry, material);
    line.scale.set(0.5, 0.5, 0.5)
    scene.add(line);
    renderer.render(scene, camera);

    const geo2 = new THREE.TorusGeometry(2.5, 0.2, 10, 100)
    const materialColor = new THREE.MeshBasicMaterial({ color: 'red' })
    const torus = new THREE.Mesh(geo2, materialColor)
    torus.position.x = 10
    torus.position.y = 2.5

    scene.add(torus);
    camera.position.x = 30
    renderer.render(scene, camera)


    //line A
    const pointA = []
    pointA.push(new THREE.Vector3(0, 0, 0))
    pointA.push(new THREE.Vector3(3, 5, 0))
    pointA.push(new THREE.Vector3(6, 0, 0))
    pointA.push(new THREE.Vector3(4.3, 3, 0))
    pointA.push(new THREE.Vector3(1.6, 3, 0))

    const lineGeo3Color = new THREE.LineBasicMaterial({ color: 'yellow' })
    const geometryA = new THREE.BufferGeometry().setFromPoints(pointA)
    const lineA = new THREE.Line(geometryA, lineGeo3Color)
    lineA.position.x = 15

    scene.add(lineA)
    renderer.render(scene, camera)



    //line `
    const pointDauHuyen = []
    pointDauHuyen.push(new THREE.Vector3(3, 0, 0))
    pointDauHuyen.push(new THREE.Vector3(1.5, 1.5, 0))


    const lineGeo4Color = new THREE.LineBasicMaterial({ color: 'yellow' })
    const geometry4 = new THREE.BufferGeometry().setFromPoints(pointDauHuyen)
    const line4 = new THREE.Line(geometry4, lineGeo4Color)
    line4.position.x = 15
    line4.position.y = 7

    scene.add(line4)
    renderer.render(scene, camera)


    //line N
    const pointN = []
    pointN.push(new THREE.Vector3(0, 0, 0))
    pointN.push(new THREE.Vector3(0, 5, 0))
    pointN.push(new THREE.Vector3(5, 0, 0))
    pointN.push(new THREE.Vector3(5, 5, 0))

    const lineGeo5Color = new THREE.LineBasicMaterial({ color: 'red' })
    const geometry5 = new THREE.BufferGeometry().setFromPoints(pointN)
    const line5 = new THREE.Line(geometry5, lineGeo5Color)
    line5.position.x = 24


    scene.add(line5)
    renderer.render(scene, camera)


    //line N
    const pointG = []
    pointG.push(new THREE.Vector3(5, 0, 0))
    pointG.push(new THREE.Vector3(4.8, 0.5, 0))
    pointG.push(new THREE.Vector3(4.5, 1, 0))
    pointG.push(new THREE.Vector3(3, 1.5, 0))
    pointG.push(new THREE.Vector3(2, 1.5, 0))
    pointG.push(new THREE.Vector3(1.25, 1.4, 0))
    pointG.push(new THREE.Vector3(0.5, 1, 0))
    pointG.push(new THREE.Vector3(0, 0.25, 0))
    pointG.push(new THREE.Vector3(0, 0, 0))
    pointG.push(new THREE.Vector3(-1, -1, 0))
    // pointG.push(new THREE.Vector3(1.25, 1, 0))
    // pointG.push(new THREE.Vector3(2, 1., 0))
    // pointG.push(new THREE.Vector3(3, 5, 0))

    

    const lineGeo6Color = new THREE.LineBasicMaterial({ color: 'yellow' })
    const geometry6 = new THREE.BufferGeometry().setFromPoints(pointG)
    const line6 = new THREE.Line(geometry6, lineGeo6Color)
    line6.position.x = 32


    scene.add(line6)
    renderer.render(scene, camera)


  }

}

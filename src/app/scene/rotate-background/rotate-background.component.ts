import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, inject, Renderer2, HostListener } from '@angular/core';
import Stats from 'three/examples/jsm/libs/stats.module'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three';
import { BufferGeometry, Mesh, Vector3 } from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './rotate-background.component.html',
  styleUrls: ['./rotate-background.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class RotateBackgroundComponent implements OnInit, AfterViewInit {
  @HostListener('window:resize', ['$event'])
  handleResize(event: MouseEvent) {
    console.log(event)
  }
  @ViewChild('backgroundScene', { static: false }) backgroundScene!: ElementRef
  renderElement = inject(Renderer2)
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.creteThreeView()
  }
  creteThreeView() {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(100, 1, 0.1, 2000)
    scene.position.y = -5
    scene.position.x = -5
    const renderer = new THREE.WebGLRenderer()
    this.renderElement.appendChild(this.backgroundScene.nativeElement, renderer.domElement)
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change', render)
    renderer.setSize(500, 500)
    camera.position.set(0, 0, 30)

    // const object1 = new THREE.BoxGeometry(10, 10)
    // const mesh = new THREE.Mesh(object1, color)
    // scene.add(mesh)
    camera.position.x = 0

    //code block 
    const pointBlock = []
    pointBlock.push(new Vector3(0, 0, 0))

    pointBlock.push(new Vector3(0, 10, 0))

    pointBlock.push(new Vector3(0, 10, 10))

    pointBlock.push(new Vector3(0, 0, 10))

    pointBlock.push(new Vector3(0, 0, 0))

    pointBlock.push(new Vector3(10, 0, 0))




    pointBlock.push(new Vector3(10, 10, 0))

    pointBlock.push(new Vector3(10, 10, 10))

    pointBlock.push(new Vector3(10, 0, 10))

    pointBlock.push(new Vector3(10, 0, 0))

    pointBlock.push(new Vector3(10, 0, 10))

    pointBlock.push(new Vector3(0, 0, 10))






    pointBlock.push(new Vector3(0, 10, 10))

    pointBlock.push(new Vector3(10, 10, 10))

    pointBlock.push(new Vector3(10, 10, 0))

    pointBlock.push(new Vector3(0, 10, 0))

    // pointBlock.push(new Vector3(5,5,0))
    pointBlock.push(new Vector3(10, 0, 0))
    pointBlock.push(new Vector3(0, 0, 0))

    pointBlock.push(new Vector3(10, 10, 0))
    pointBlock.push(new Vector3(10, 0, 10))

    pointBlock.push(new Vector3(10, 10, 10))

    pointBlock.push(new Vector3(10, 0, 0))

    pointBlock.push(new Vector3(0, 0, 0))

    pointBlock.push(new Vector3(10, 0, 10))

    pointBlock.push(new Vector3(0, 0, 10))
    pointBlock.push(new Vector3(10, 0, 0))

    pointBlock.push(new Vector3(0, 0, 0))

    pointBlock.push(new Vector3(0, 10, 10))

    pointBlock.push(new Vector3(0, 10, 0))

    pointBlock.push(new Vector3(0, 0, 10))

    pointBlock.push(new Vector3(10, 10, 10))

    pointBlock.push(new Vector3(0, 10, 10))

    pointBlock.push(new Vector3(10, 0, 10))

    pointBlock.push(new Vector3(10, 10, 10))

    pointBlock.push(new Vector3(0, 10, 0))

    pointBlock.push(new Vector3(10, 10, 0))

    pointBlock.push(new Vector3(0, 10, 10))
    const geomtry2 = new BufferGeometry().setFromPoints(pointBlock)
    function render() {
      const randomColor = new THREE.Color(Math.random(), Math.random(), Math.random())
      const color = new THREE.LineBasicMaterial({ color: randomColor })
      const mesh2 = new THREE.Line(geomtry2, color)

      scene.add(mesh2)
      requestAnimationFrame(render)
      renderer.render(scene, camera)
      camera.rotation.z += 0.05
    }
    render()
  }
}

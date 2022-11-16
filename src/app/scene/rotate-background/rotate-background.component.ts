import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, inject, Renderer2, HostListener } from '@angular/core';
import Stats from 'three/examples/jsm/libs/stats.module'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three';

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
    scene.position.z = 4
    const renderer = new THREE.WebGLRenderer()
    this.renderElement.appendChild(this.backgroundScene.nativeElement, renderer.domElement)
    const controls = new OrbitControls(camera, renderer.domElement)
    renderer.setSize(500, 500)
    camera.position.set(0, 0, 30)
    const color = new THREE.MeshBasicMaterial({ color: 'red' })
    const object1 = new THREE.BoxGeometry(10, 10)
    const mesh = new THREE.Mesh(object1, color)
    scene.add(mesh)
    // camera.position.x = 0

    renderer.render(scene, camera)

  }
}

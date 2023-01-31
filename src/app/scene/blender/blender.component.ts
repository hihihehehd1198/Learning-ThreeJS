import { Component, OnInit, AfterViewInit, inject, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// import 'three-gltf-loader'
// import {} from 'three/examples/jsm/loaders/'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blender.component.html',
  styleUrls: ['./blender.component.scss']
})
export class BlenderComponent implements OnInit, AfterViewInit {

  @ViewChild('backgroundScene') backgroundSecene?: ElementRef;
  renderer = inject(Renderer2)
  constructor() { }

  ngOnInit(): void {
    this.initScene()
  }

  ngAfterViewInit(): void {

  }

  initScene(): void {


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change', animate)
    renderer.setSize(1000, 1000);
    document.body.appendChild(renderer.domElement);
    // this.backgroundSecene?.nativeElement.appendChild(renderer.domElement)

    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);


    const loader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderConfig({ type: 'js' });
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    loader.setDRACOLoader(dracoLoader)
    loader.load('../../assets/bugatti.gltf', function (img) {
      scene.add(img.scene)
      img.animations;
      img.scene;
      img.cameras;
      img.asset;
      const light = new THREE.DirectionalLight(0xffffff, 1)
      light.position.set(25, 25, 25)
      scene.add(light)
    }, (xhr) => {

      console.log(`${(xhr.loaded / xhr.total * 100)}% loaded`);
    }, (er) => {
      console.log(er)
    })

    // camera.position.z = 10;

    function animate() {
      requestAnimationFrame(animate);

      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;

      // camera.position.set(0, 1, 0)
      renderer.render(scene, camera);
    };

    animate();
  }

}

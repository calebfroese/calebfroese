import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements AfterViewInit {
  scene: THREE.Scene;

  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  cube: THREE.Mesh;

  @ViewChild('canvas') private canvasRef: ElementRef;

  @HostListener('window:resize', ['$event'])
  public onResize(event: Event) {
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.camera.aspect = this.getRatio();
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.render();
  }

  constructor() {
    this.render = this.render.bind(this);
  }

  ngAfterViewInit() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xeeeeee);

    this.camera = new THREE.PerspectiveCamera(60, this.getRatio(), 0.1, 1000);
    this.camera.position.z = 5;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const rgba = new THREE.Color(0x226666);
    const material = new THREE.MeshBasicMaterial({ color: rgba });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.startRendering();
  }

  get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  getRatio() {
    const height = this.canvas.clientHeight;
    if (height === 0) return 0;

    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  startRendering() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    let component: LandingComponent = this;

    (function render() {
      requestAnimationFrame(render);
      component.render();
    })();
  }

  render() {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.cube.rotation.z += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}

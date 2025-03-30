import React, { Component } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class Scene {
    canvas?: HTMLCanvasElement;
    scene: THREE.Scene = new THREE.Scene();
    renderer?: THREE.WebGLRenderer;
    camera?: THREE.PerspectiveCamera;
    width: number = 1;
    height: number = 1;
    destroyed: boolean = false;
    prevTime: number = 0;
    delta: number = 0;
    controls?: OrbitControls;

    constructor() {
    }

    get aspect() {
        return this.width / this.height;
    }

    init({ canvas, width, height }: Pick<Scene, 'canvas' | 'width' | 'height'>) {
        this.width = width;
        this.height = height;
        this.camera = new THREE.PerspectiveCamera(70, this.aspect, 0.1, 1000);
        this.camera.position.set(5, 5, 5);
        this.scene.add(this.camera);

        this.scene.add(new THREE.AxesHelper(3));

        this.renderer = new THREE.WebGLRenderer({ canvas });
        this.resize(width, height);
        this.renderer?.setAnimationLoop(this.onLoop);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }

    resize(width: number, height: number) {
        if (!this.camera || !this.renderer) return;
        this.camera.aspect = this.aspect;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
    }

    onLoop: XRFrameRequestCallback = (time) => {
        if (!this.camera || !this.renderer) return;
        if (this.prevTime !== 0) this.delta = time - this.prevTime;
        /* do something with your delta and time */
        this.renderer.render(this.scene, this.camera);
        this.prevTime = time;
    };

    destroy() {
        this.renderer?.dispose();
        this.camera = undefined;
        this.destroyed = true;
    }
}

export default Scene;

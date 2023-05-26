import './style.css'

import * as THREE from 'three'


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 1000);

const renderer = new THREE.WebGLRenderer({
canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render ( scene, camera);

const geometry = new THREE.CylinderGeometry(0.3,0.3,0.09);
const material = new THREE.MeshStandardMaterial({ color:'#006994', wireframe: true});
const cylinder = new THREE.Mesh( geometry, material );
scene.add(cylinder)
cylinder.position.set( 0.5, -1, 28);

const pointLight = new THREE.PointLight(0XFFFFFF)
pointLight.position.set(20,20,20)

const ambientLight = new THREE.AmbientLight(0XFFFFFF)
scene.add(pointLight, ambientLight);



function animate() {

    requestAnimationFrame( animate);

     cylinder.rotation.y += 0.01;
     
    renderer.render( scene, camera);


}

animate()
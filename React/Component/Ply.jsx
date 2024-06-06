import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';

			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
			camera.position.set(-180,45,0);

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth/2, window.innerHeight/2, false);
			renderer.setClearColor(0xefefef);
			renderer.outputEncoding = THREE.sRGBEncoding;
			document.body.appendChild( renderer.domElement );

			const material = new THREE.PointsMaterial({size: 0.01});
			material.vertexColors = true;

			const controls = new OrbitControls( camera, renderer.domElement );

			const loader = new PLYLoader();
			loader.load('src/assets/area001.ply',(geometry) => {		
				geometry.computeBoundingBox();
				const points = new THREE.Points(geometry,material); // Compute the box around the PCD and rotate the whole PCD horizontally.
				points.rotateX(-Math.PI /2);
				scene.add(points);
				},
				(xhr) => {
					console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
				},
				(error) => {
					console.log(error)
				}
				)

		function Ply(){
		requestAnimationFrame(Ply);
		renderer.render( scene, camera );
		controls.update();
		}
Ply();

export default Ply;
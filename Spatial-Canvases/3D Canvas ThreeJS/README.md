# Spatial Canvases 
## 3D Canvas in Three.js
---

## HTML file code snippets for beginners
### 0  HTML Setup

In order to add your Three.js sketch to your website, you need to load the Three.js library: 

**Essential Lines You Must Add:** 

**In the `<head>` section:** 
```html
<!-- REQUIRED: Load Three.js library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```

Add your latest sketch to a new javascript file called '3d-spatial-canvas.js' and link it to you html file. 

**In the `<body>` section (before closing `</body>` tag):**
```html
<!-- REQUIRED: Load your sketch file -->
<script src="3d-spatial-canvas.js"></script>
```


## JavaScript file code snippets for beginners


### 1  Setup vs Render Loop 

The foundation of every Three.js application consists of two essential functions: `init()` and `animate()`. These functions control when and how often your code runs, creating the basic structure for 3D graphics, scenes, and animations.

```js
// Global variables for Three.js components
let scene, camera, renderer;

// The setup code section runs once at launch
function init() {
  // create a scene to hold all 3D objects
  scene = new THREE.Scene();
  
  // create a camera to view the scene
  // parameters: field of view, aspect ratio, near plane, far plane
  const camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
  
  // create a renderer to display the scene
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(800, 400);
  document.body.appendChild(renderer.domElement);
  
  // position the camera
  camera.position.z = 5;
}

// The animation loop runs 60 frames per second 
function animate() {
  // request the next frame to create smooth animation
  requestAnimationFrame(animate);
  
  // render the scene from the camera's perspective
  renderer.render(scene, camera);
}

// start the application
init();
animate();
```

For more information on getting started with Three.js see this tutorial: https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

### 2  Primitives 

Basic 3D geometric shapes are the building blocks of visual programming in Three.js. These primitive shapes can be combined to create complex 3D designs and patterns.

```js
let scene, camera, renderer;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(800, 400);
  document.body.appendChild(renderer.domElement);
  
  // create a box geometry: width, height, depth
  let boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  let boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
  let box = new THREE.Mesh(boxGeometry, boxMaterial);
  box.position.set(-2, 0, 0);
  scene.add(box);
  
  // create a sphere geometry: radius, width segments, height segments
  let sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  let sphereMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
  let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(0, 0, 0);
  scene.add(sphere);
  
  // create a cylinder geometry: radius top, radius bottom, height
  let cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
  let cylinderMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff});
  let cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  cylinder.position.set(2, 0, 0);
  scene.add(cylinder);
  
  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

init();
animate();
```

### 3  Conditionals

Conditional statements allow your code to make decisions and respond to different situations in 3D space. They enable interactive and dynamic behaviors in your Three.js scenes.

```js
let scene, camera, renderer, cube;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(800, 400);
  document.body.appendChild(renderer.domElement);
  
  // create a cube that will change color based on position
  let geometry = new THREE.BoxGeometry(1, 1, 1);
  let material = new THREE.MeshBasicMaterial({color: 0x00ff00});
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  
  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);
  
  // check if cube is on the left side of the scene
  if (cube.position.x < 0) {
    // if true, make the cube blue
    cube.material.color.setHex(0x0000ff);
  } else {
    // if false, make the cube red
    cube.material.color.setHex(0xff0000);
  }
  
  // move cube based on mouse position
  cube.position.x = (mouseX / window.innerWidth) * 4 - 2;
  
  renderer.render(scene, camera);
}

// track mouse position
let mouseX = 0;
document.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
});

init();
animate();
```

### 4  For Loops

Loops allow you to repeat code multiple times, making it efficient to create patterns, arrays of objects, or repetitive visual elements in 3D space.

```js
let scene, camera, renderer;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(800, 400);
  document.body.appendChild(renderer.domElement);
  
  // create 10 spheres in a row
  for (let i = 0; i < 10; i++) {
    // calculate x position for each sphere
    let x = i * 1.2 - 5;
    
    // create sphere geometry and material
    let geometry = new THREE.SphereGeometry(0.3, 16, 16);
    let material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    let sphere = new THREE.Mesh(geometry, material);
    
    // position sphere at calculated location
    sphere.position.set(x, 0, 0);
    scene.add(sphere);
  }
  
  camera.position.z = 10;
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

init();
animate();
```

### 5  Functions

Functions allow you to organize code into reusable blocks in Three.js. They help keep your code clean and make it easier to create complex 3D behaviors.

```js
let scene, camera, renderer;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(800, 400);
  document.body.appendChild(renderer.domElement);
  
  // call our custom function to create stars
  createStar(0, 0, 0);
  createStar(2, 1, 0);
  createStar(-2, -1, 0);
  
  camera.position.z = 5;
}

// custom function to create a star object
function createStar(x, y, z) {
  // create a star geometry (small sphere)
  let geometry = new THREE.SphereGeometry(0.1, 8, 8);
  let material = new THREE.MeshBasicMaterial({color: 0xffff00});
  let star = new THREE.Mesh(geometry, material);
  
  // position the star at specified coordinates
  star.position.set(x, y, z);
  scene.add(star);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

init();
animate();
```

### 6  Arrays

Arrays allow you to store multiple values in a single variable in Three.js. They're useful for managing collections of 3D objects or creating dynamic systems.

```js
let scene, camera, renderer;
let cubes = []; // array to store multiple cube objects

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(800, 400);
  document.body.appendChild(renderer.domElement);
  
  // arrays to store positions for cubes
  let xPositions = [-2, 0, 2];
  let yPositions = [0, 0, 0];
  let zPositions = [0, 0, 0];
  
  // create cubes at each stored position
  for (let i = 0; i < xPositions.length; i++) {
    let geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    let material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    let cube = new THREE.Mesh(geometry, material);
    
    // position cube using array values
    cube.position.set(xPositions[i], yPositions[i], zPositions[i]);
    scene.add(cube);
    cubes.push(cube); // add to our array
  }
  
  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);
  
  // animate all cubes in the array
  for (let i = 0; i < cubes.length; i++) {
    cubes[i].rotation.x += 0.01;
    cubes[i].rotation.y += 0.01;
  }
  
  renderer.render(scene, camera);
}

init();
animate();
```

### 7  Classes

Classes are templates for creating objects with properties and methods in Three.js. They help organize complex code and create reusable 3D object types.

```js
let scene, camera, renderer;

// define a class for creating animated cube objects
class AnimatedCube {
  constructor(x, y, z, size) {
    // initialize cube properties
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.speed = 0.02;
    
    // create the 3D mesh
    let geometry = new THREE.BoxGeometry(size, size, size);
    let material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(x, y, z);
  }
  
  // method to add cube to scene
  addToScene(scene) {
    scene.add(this.mesh);
  }
  
  // method to animate the cube
  animate() {
    // rotate the cube mesh
    this.mesh.rotation.x += this.speed;
    this.mesh.rotation.y += this.speed;
  }
}

// create an instance of the AnimatedCube class
let myCube;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(800, 400);
  document.body.appendChild(renderer.domElement);
  
  // initialize cube object
  myCube = new AnimatedCube(0, 0, 0, 1);
  myCube.addToScene(scene);
  
  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);
  
  // call animate method on the cube object
  myCube.animate();
  
  renderer.render(scene, camera);
}

init();
animate();
```
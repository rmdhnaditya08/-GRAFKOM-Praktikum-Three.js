import * as THREE
  from "three";

import "./style.css";

const app =
  document.getElementById(
    "app"
  );

const info =
  document.getElementById(
    "info"
  );

// --------------------
// Scene
// --------------------

const scene =
  new THREE.Scene();

scene.background =
  new THREE.Color(
    0x0b1020
  );

// --------------------
// Sizes
// --------------------

const sizes = {
  width:
    window.innerWidth,

  height:
    window.innerHeight
};

// --------------------
// Camera
// --------------------

const camera =
  new THREE.PerspectiveCamera(
    60, //FOV
    sizes.width / sizes.height, //aspect ratio 
    0.1, //near plane
    100 //far plane
  );

camera.position.set(
  -5,
  6,
  7
);

camera.lookAt(
  0,
  0.5,
  0
);

scene.add(
  camera
);

// --------------------
// Camera 2
// --------------------

const frustumSize = 12;
const aspect = sizes.width / sizes.height;

const camera2 = new THREE.OrthographicCamera(
  (-frustumSize * aspect) / 2, // left (negatif)
  (frustumSize * aspect) / 2,  // right (positif)
  frustumSize / 2,             // top (positif)
  -frustumSize / 2,            // bottom (negatif)
  0.1,                         // near
  100                          // far
);

camera2.position.set(
  5,
  9,
  9
);

camera2.lookAt(
  0,
  0.5,
  0
);

scene.add(
  camera2
);

// Active Camera Tracker
let activeCamera = camera;

// --------------------
// Camera Toggle Key (P)
// --------------------

window.addEventListener(
  "keydown",
  (event) => {
    if (
      event.key === "p" ||
      event.key === "P"
    ) {
      activeCamera =
        activeCamera === camera
          ? camera2
          : camera;
    }
  }
);

const currentAspect = sizes.width / sizes.height;

// Update Perspective
camera.aspect = currentAspect;
camera.updateProjectionMatrix();

// Update Orthographic
camera2.left = (-frustumSize * currentAspect) / 2;
camera2.right = (frustumSize * currentAspect) / 2;
camera2.top = frustumSize / 2;
camera2.bottom = -frustumSize / 2;
camera2.updateProjectionMatrix();

// Penghitung FPS sederhana
let frames = 0;
let prevTime = performance.now();
let fps = 0;


// --------------------
// Renderer
// --------------------

const renderer =
  new THREE.WebGLRenderer({
    antialias: true
  });

renderer.setSize(
  sizes.width,
  sizes.height
);

renderer.setPixelRatio(
  Math.min(
    window.devicePixelRatio,
    2
  )
);

renderer.shadowMap.enabled =
  true;

app.appendChild(
  renderer.domElement
);

// --------------------
// Cube
// --------------------

const cubeGeometry =
  new THREE.BoxGeometry(
    1, //width
    1, //height
    1 //depth
  );

console.log(
  cubeGeometry
);

console.log(
  cubeGeometry.attributes
);

const cubeMaterial =
  new THREE.MeshLambertMaterial({
    color: 0x22d3ee
  });

const cube =
  new THREE.Mesh(
    cubeGeometry,
    cubeMaterial
  );

cube.position.set(
  -1.2, //position
  0.6, //rotation
  0 //scale
);

cube.castShadow =
  true;

scene.add(
  cube
);

// --------------------
// Sphere
// --------------------

const sphereGeometry =
  new THREE.SphereGeometry(
    0.7,
    32,
    16
  );

const sphereMaterial =
  new THREE.MeshPhongMaterial({
    color: 0x4488ff,
    shininess: 60
  });

const sphere =
  new THREE.Mesh(
    sphereGeometry,
    sphereMaterial
  );

sphere.position.set(
  1.4,
  0.75,
  0
);

sphere.castShadow =
  true;

scene.add(
  sphere
);

// --------------------
// Sphere 2
// --------------------

const sphere2Geometry =
  new THREE.SphereGeometry(
    0.7,
    32,
    16
  );

const sphere2Material =
  new THREE.MeshBasicMaterial({
    color: 0xff0000
  });

const sphere2 =
  new THREE.Mesh(
    sphere2Geometry,
    sphere2Material
  );

sphere2.position.set(
  1.4,
  0.75,
  2
);

sphere2.castShadow =
  true;

scene.add(
  sphere2
);

// --------------------
// Sphere 3
// --------------------

const sphere3Geometry =
  new THREE.SphereGeometry(
    0.7,
    32,
    16
  );

const sphere3Material =
  new THREE.MeshNormalMaterial({
    color: 0xffff00,
    shininess: 30
  });

const sphere3 =
  new THREE.Mesh(
    sphere3Geometry,
    sphere3Material
  );

sphere3.position.set(
  1.4,
  0.75,
  -2
);

sphere3.castShadow =
  true;

scene.add(
  sphere3
);

// --------------------
// Cylinder
// --------------------

const cylinderGeometry =
  new THREE.CylinderGeometry(
    0.5,
    0.5,
    2
  );

const cylinderMaterial =
  new THREE.MeshPhongMaterial({
    color: 0x4488ff,
    shininess: 60
  });

const cylinder =
  new THREE.Mesh(
    cylinderGeometry,
    cylinderMaterial
  );

cylinder.position.set(
  3.2,
  0.4,
  0
);

cylinder.castShadow =
  true;

scene.add(
  cylinder
);

// --------------------
// Cone
// --------------------

const coneGeometry =
  new THREE.ConeGeometry(
    0.8,
    1,
    3
  );

const coneMaterial =
  new THREE.MeshPhongMaterial({
    color: 0xff0000,
    shininess: 60
  });

const cone =
  new THREE.Mesh(
    coneGeometry,
    coneMaterial
  );

cone.position.set(
  3.2,
  0.8,
  2.5
);

cone.castShadow =
  true;

scene.add(
  cone
);

// --------------------
// Ground
// --------------------

const groundGeometry =
  new THREE.PlaneGeometry(
    10,
    10
  );

groundGeometry.rotateX(
  -Math.PI / 2
);

const groundMaterial =
  new THREE.MeshLambertMaterial({
    color: 0x334155
  });

const ground =
  new THREE.Mesh(
    groundGeometry,
    groundMaterial
  );

ground.receiveShadow =
  true;

scene.add(
  ground
);

// --------------------
// Lights
// --------------------

const ambientLight =
  new THREE.AmbientLight(
    0xffffff,
    0.35
  );

scene.add(
  ambientLight
);

// // White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

// const directionalLight =
//   new THREE.DirectionalLight(
//     0xffffff,
//     2.0
//   );

// directionalLight
//   .position
//   .set(
//     3,
//     5,
//     2
//   );

// directionalLight.castShadow =
//   true;

// directionalLight
//   .shadow
//   .mapSize
//   .set(
//     1024,
//     1024
//   );

// directionalLight
//   .shadow
//   .camera
//   .left = -5;

// directionalLight
//   .shadow
//   .camera
//   .right = 5;

// directionalLight
//   .shadow
//   .camera
//   .top = 5;

// directionalLight
//   .shadow
//   .camera
//   .bottom = -5;

// directionalLight
//   .shadow
//   .camera
//   .near = 0.5;

// directionalLight
//   .shadow
//   .camera
//   .far = 20;

directionalLight.shadow.mapSize.set(
  512, // width
  512  // height
);


scene.add(
  directionalLight
);

// --------------------
// Resize
// --------------------

window.addEventListener(
  "resize",
  () => {
    sizes.width =
      window.innerWidth;

    sizes.height =
      window.innerHeight;

    camera.aspect =
      sizes.width /
      sizes.height;

    camera
      .updateProjectionMatrix();

    renderer.setSize(
      sizes.width,
      sizes.height
    );

    renderer.setPixelRatio(
      Math.min(
        window.devicePixelRatio,
        2
      )
    );
  }
);

// --------------------
// Animation
// --------------------

const clock =
  new THREE.Clock();

let elapsed =
  0;


function animate() {
  requestAnimationFrame(
    animate
  );

  const delta =
    Math.min(
      clock.getDelta(),
      0.05
    );

  elapsed +=
    delta;

  cube.rotation.x +=
    0.35 * delta;

  cube.rotation.y +=
    0.8 * delta;

  sphere.rotation.y +=
    0.5 * delta;

  sphere.position.y =
    0.75
    +
    Math.sin(
      elapsed * 2
    ) * 0.15;

  // Hitung FPS
  frames++;
  const currentTime = performance.now();
  if (currentTime >= prevTime + 1000) {
    fps = Math.round((frames * 1000) / (currentTime - prevTime));
    frames = 0;
    prevTime = currentTime;
  }

  const cameraType =
    activeCamera === camera
      ? "Perspective"
      : "Orthographic";

  info.textContent =
    `Objects: ${scene.children.length} | ` +
    `[P] Camera: ${cameraType} (` +
    `${activeCamera.position.x.toFixed(1)}, ` +
    `${activeCamera.position.y.toFixed(1)}, ` +
    `${activeCamera.position.z.toFixed(1)})` +
    `FPS: ${fps || "--"}`;

  renderer.render(
    scene,
    activeCamera
  );
}

animate();
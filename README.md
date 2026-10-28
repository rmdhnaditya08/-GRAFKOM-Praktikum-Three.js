# GRAFKOM Praktikum Three.js

Mochamad Ramadhan Aditya Rachman / 5025241129

### 83. Challenge A — Tambah Geometry
Tambahkan minimal dua geometry:

```
CylinderGeometry
ConeGeometry
TorusGeometry
```

Setiap geometry harus memiliki:

material;
transform;
posisi yang tidak saling bertabrakan.

```
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
```

<img width="1282" height="841" alt="image" src="https://github.com/user-attachments/assets/8f3c5e4c-e369-4917-a618-5c915aa3e25e" />

### 84. Challenge B — Material Gallery
Buat beberapa object dengan geometry sama tetapi material berbeda:

```
MeshBasicMaterial
MeshNormalMaterial
MeshLambertMaterial
MeshPhongMaterial
```
Susun berjajar agar perbedaannya mudah dibandingkan.

```
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
```

<img width="923" height="700" alt="image" src="https://github.com/user-attachments/assets/1993da93-6a5b-4401-a82a-7a1b81340629" />

### 85. Challenge C — OrthographicCamera
Buat mode camera kedua menggunakan:
~~~
THREE.OrthographicCamera
~~~
Tambahkan tombol:
```
P
```
untuk berpindah:
```
Perspective
↔
Orthographic
```
Pastikan projection tetap responsif ketika window resize.

Menggunakan kuboid / kotak proyeksi paralel agar objek tidak terlihat pipih/gepeng saat rasio jendela bukan 1:1, kita gunakan variabel frustumSize yang dikalikan dengan aspect rasio jendela:
```
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
```
window.addEventListener("resize", ...): Kedua kamera harus memperbarui matriks proyeksinya saat jendela di-resize agar proyeksi tetap responsif dan tidak terdistorsi:
```
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
```
```
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

```

<img width="1917" height="1090" alt="image" src="https://github.com/user-attachments/assets/99018bea-d8b5-4ff6-9ab2-c45305153ca4" />

# GRAFKOM Praktikum Three.js

Mochamad Ramadhan Aditya Rachman / 5025241129

83. Challenge A — Tambah Geometry
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


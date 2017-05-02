var myCamera, scene, light, renderer, controls;
var geometry, material, mesh;

var container = document.getElementById('symbol');

function init() {
  scene = new THREE.Scene();

  var width = window.innerWidth;
  var height = window.innerHeight;

  myCamera = new THREE.PerspectiveCamera(45, width/height, 100, 25000);
  myCamera.position.set(300, 500, 300);
  scene.add(myCamera);

  light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene.add(light);

  
  material = new  THREE.MeshBasicMaterial({color:0x66ffff, wireframe: true});

  var loader = new THREE.BufferGeometryLoader();

  loader.load('space-ship.json', function(geometry) {
    mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(200, 200, 200);
    mesh.position.y = -80;
    scene.add(mesh);
  });

  renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
  renderer.setSize(width, height);
  controls = new THREE.OrbitControls(myCamera, renderer.domElement);

  container.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  if (mesh) {
    mesh.rotation.y += 0.01;
  }


  renderer.render(scene, myCamera);
  controls.update();
}

function windowResize(){
  myCamera.aspect = (window.innerWidth/window.innerHeight);
  myCamera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth,window.innerHeight);
}


init();
animate();

window.addEventListener('resize',windowResize);
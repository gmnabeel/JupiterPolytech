let scene, camera, renderer, sphere;
const container = document.getElementById('canvas-container');

// Create the 3D scene
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Create a sphere geometry for Jupiter
  const geometry = new THREE.SphereGeometry(5, 64, 64);
  const textureLoader = new THREE.TextureLoader();
  const jupiterTexture = textureLoader.load('https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg');
  const material = new THREE.MeshBasicMaterial({ map: jupiterTexture });
  
  // Create mesh and add to scene
  sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
  
  camera.position.z = 15;

  // Animation loop
  animate();
}

// Animate the planet (rotation)
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.005; // Rotate the planet
  renderer.render(scene, camera);
}

// Show text after 5 seconds
window.onload = function() {
  setTimeout(function() {
    document.getElementById('text').classList.add('show');
  }, 5000);
};

// Make the scene responsive
window.addEventListener('resize', function() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Initialize the 3D scene
init();

// 1. SETUP DUNIA 3D
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050505); // Latar belakang hitam gelap

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('game-container').appendChild(renderer.domElement);

// 2. LAMPU (Biar suasana remang-remang)
const ambientLight = new THREE.AmbientLight(0x404040, 2); 
scene.add(ambientLight);
const spotLight = new THREE.PointLight(0xffffff, 1);
spotLight.position.set(0, 5, 0); // Lampu tepat di atas meja
scene.add(spotLight);

// 3. MEJA JUDI (Box 3D Sederhana)
const tableGeo = new THREE.BoxGeometry(4, 0.2, 4);
const tableMat = new THREE.MeshStandardMaterial({ color: 0x1a472a }); // Hijau Kasino
const table = new THREE.Mesh(tableGeo, tableMat);
scene.add(table);

camera.position.set(0, 1.5, 3); // Posisi mata pemain
camera.lookAt(0, 0, 0);

// 4. KONTROL TENGOK KANAN-KIRI (Untuk Layar HP)
let isTouching = false;
let prevX = 0;

document.addEventListener('touchstart', (e) => {
    isTouching = true;
    prevX = e.touches[0].clientX;
});

document.addEventListener('touchend', () => isTouching = false);

document.addEventListener('touchmove', (e) => {
    if (!isTouching) return;
    let deltaX = e.touches[0].clientX - prevX;
    camera.rotation.y -= deltaX * 0.005; // Menggerakkan kamera
    prevX = e.touches[0].clientX;
});

// 5. LOOP ANIMASI
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Respon jika layar HP diputar/resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

console.log("Game 3D Siap!");
  

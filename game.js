// Fungsi untuk pindah-pindah menu
function showHostMenu() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('host-menu').style.display = 'flex';
    
    // Bikin kode acak 4 angka untuk Room
    let randomCode = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generatedCode').innerText = randomCode;
}

function showJoinMenu() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('join-menu').style.display = 'flex';
}

function backToMenu() {
    document.getElementById('main-menu').style.display = 'flex';
    document.getElementById('host-menu').style.display = 'none';
    document.getElementById('join-menu').style.display = 'none';
}

function playSolo() {
    alert("Masuk ke mode Offline melawan AI...");
    document.getElementById('ui-layer').style.display = 'none'; // Sembunyikan menu, masuk ke 3D
}

function startHost() {
    let code = document.getElementById('generatedCode').innerText;
    alert("Ruangan " + code + " dibuat. Menunggu lawan...");
    document.getElementById('ui-layer').style.display = 'none';
}

function joinGame() {
    let code = document.getElementById('roomInput').value;
    if(code === "") {
        alert("Masukkan kode dulu!");
    } else {
        alert("Mencoba masuk ke room: " + code);
        document.getElementById('ui-layer').style.display = 'none';
    }
}

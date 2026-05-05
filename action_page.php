<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['yourname']) && !empty(trim($_POST['yourname']))) {
    $nama = trim(htmlspecialchars($_POST['yourname']));
    $perusahaan = trim(htmlspecialchars($_POST['company'] ?? ''));
    $posisi = trim(htmlspecialchars($_POST['position'] ?? ''));
    $pesan = trim(htmlspecialchars($_POST['pesan'] ?? ''));

    $timestamp = date('Y-m-d H:i:s');
    $data_simpan = "[$timestamp] Nama: $nama | Perusahaan: $perusahaan | Posisi: $posisi | Pesan: $pesan" . PHP_EOL;
    
    $bytes_written = file_put_contents('simpan_data.txt', $data_simpan, FILE_APPEND | LOCK_EX);

    if ($bytes_written !== false) {
        header('Content-Type: application/json');
        echo json_encode(['success' => true, 'message' => 'Data berhasil terkirim']);
    } else {
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'message' => 'Gagal menyimpan data. Tunggu beberapa saat dan coba lagi.']);
    }
} else {
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Data tidak lengkap atau method salah']);
}
?>



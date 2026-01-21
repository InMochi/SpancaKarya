const Spanca = require("../models/SpancaModel");

// Mengambil Semua Karya yang ada
const ambilSemuaKarya = async (req, res) => {
    
}

// Mengambil karya tertentu

// Fungsi Buat Nambah Karya Baru
const buatKarya = async (req, res) => {
  const { judul, jurusan, kelas } = req.body;

    // query untuk nambah karya baru
    try {
        const spanca = await Spanca.create({ judul, jurusan, kelas });
        res.status(200);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


// Hapus sebuah karya

// Update sebuah karya


module.exports = {
    buatKarya
}
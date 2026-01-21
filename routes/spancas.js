const express = require("express");
const {
  buatKarya,
  
} = require("../controllers/spancaController")

const router = express.Router();

// Mengambil Semua Karya yang ada
router.get("/", async (req, res) => {
  const { judul, jurusan, kelas } = req.query;

  try {
    const filter = {};
    if (judul) filter.judul = judul;
    if (jurusan) filter.jurusan = jurusan;
    if (kelas) filter.kelas = kelas;

    const spanca = await Spanca.find(filter);
    res.status(200).json(spanca);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Mengambil karya tertentu
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const spanca = await Spanca.findById(id);

    if (!spanca) {
      return res.status(404).json({ error: "Karya tidak ditemukan" });
    }

    res.status(200).json(spanca);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});











// Fungsi Buat Nambah Karya Baru
router.post("/", buatKarya);















// delete sebuah karya
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const spanca = await Spanca.findByIdAndDelete(id);

    if (!spanca) {
      return res.status(404).json({ error: "Karya Tidak Ditemukan" });
    }

    res.status(200).json(spanca);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ubah data pada postingan
router.patch("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const spanca = await Spanca.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidators: true },
    );

    if (!spanca) {
      return res.status(404).json({ error: "Karya Tidak Ditemukan" });
    }

    res.status(200).json(spanca);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

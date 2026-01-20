const express = require("express");
const Spanca = require("../models/SpancaModel");

const router = express.Router();

// Mengambil Semua Karya yang ada
router.get("/", async (req, res) => {
  const { judul, jurusan, kelas } = req.query;

  try {
    const filter = {};
    if (judul) filter.judul = judul;
    if (jurusan) filter.jurusan = jurusan;
    if (kelas)  filter.kelas = kelas;

    const spanca = await Spanca.find(filter);
    res.status(200).json(spanca);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

// Mengambil karya tertentu
router.get("/:id", async (req, res) => {
    const { id } = req.params;

    try{
        const spanca = await Spanca.findById(id);

        if (!spanca) {
            return res.status(404).json({error: "Karya tidak ditemukan"});
        }

        res.status(200).json(spanca);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

// Fungsi Buat Nambah Karya Baru
router.post("/", async (req, res) => {
  const { judul, jurusan, kelas } = req.body;
  try {
    const spanca = await Spanca.create({ judul, jurusan, kelas });
    res.status(200);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// delete dan update masih on progaress

// delete
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete  training" });
});

// update nih
router.patch("/:id", (req, res) => {
  res.json({ mssg: "update a new training" });
});

module.exports = router;

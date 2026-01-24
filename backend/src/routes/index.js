const router = require("express").Router();

router.get("/health", (req, res) => res.json({ ok: true }));

// Auth (géré par l’autre responsable)
// router.use("/auth", require("./auth.routes"));

// Admin & Stats (ton module)
router.use("/admin", require("./admin.routes"));
router.use("/admin/stats", require("./stats.routes"));

module.exports = router;

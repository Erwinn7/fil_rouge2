const router = require("express").Router();

router.get("/health", (req, res) => res.json({ ok: true }));

router.use("/auth", require("./auth.routes"));

module.exports = router;

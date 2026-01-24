const router = require("express").Router();
const statsController = require("../controllers/stats.controller");

const { requireAuth, requireAdmin } = require("../middlewares/auth.middleware");

router.use(requireAuth, requireAdmin);
router.get("/", statsController.getStats);

module.exports = router;

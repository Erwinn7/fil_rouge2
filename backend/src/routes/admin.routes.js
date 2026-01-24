const router = require("express").Router();
const adminController = require("../controllers/admin.controller");

const { requireAuth, requireAdmin } = require("../middlewares/auth.middleware");

router.use(requireAuth, requireAdmin);

// Users
router.get("/users", adminController.listUsers);
router.patch("/users/:id/role", adminController.changeUserRole);
router.patch("/users/:id/block", adminController.setUserBlocked);

// Orders
router.get("/orders", adminController.listOrders);
router.patch("/orders/:id/status", adminController.changeOrderStatus);

module.exports = router;

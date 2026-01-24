const adminService = require("../services/admin.service");

exports.listUsers = async (req, res, next) => {
    try {
        const users = await adminService.listUsers();
        res.json(users);
    } catch (e) {
        next(e);
    }
};

exports.changeUserRole = async (req, res, next) => {
    try {
        const userId = Number(req.params.id);
        const { role } = req.body;

        const updated = await adminService.changeUserRole(userId, role);
        res.json(updated);
    } catch (e) {
        next(e);
    }
};

exports.setUserBlocked = async (req, res, next) => {
    try {
        const userId = Number(req.params.id);
        const { isBlocked } = req.body;

        const updated = await adminService.setUserBlocked(userId, isBlocked);
        res.json(updated);
    } catch (e) {
        next(e);
    }
};

exports.listOrders = async (req, res, next) => {
    try {
        const orders = await adminService.listOrders();
        res.json(orders);
    } catch (e) {
        next(e);
    }
};

exports.changeOrderStatus = async (req, res, next) => {
    try {
        const orderId = Number(req.params.id);
        const { status } = req.body;

        const updated = await adminService.changeOrderStatus(orderId, status);
        res.json(updated);
    } catch (e) {
        next(e);
    }
};

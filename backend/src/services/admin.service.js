const adminModel = require("../models/admin.model");
const ApiError = require("../utils/ApiError");

const ALLOWED_ROLES = ["USER", "ADMIN"];
const ALLOWED_ORDER_STATUS = ["created", "validated", "shipped", "delivered", "cancelled"];

exports.listUsers = () => adminModel.listUsers();

exports.changeUserRole = async (userId, role) => {
    if (!Number.isInteger(userId) || userId <= 0) {
        throw new ApiError(400, "Invalid user id");
    }
    if (!ALLOWED_ROLES.includes(role)) {
        throw new ApiError(400, "Invalid role");
    }
    return adminModel.changeUserRole(userId, role);
};

exports.setUserBlocked = async (userId, isBlocked) => {
    if (!Number.isInteger(userId) || userId <= 0) {
        throw new ApiError(400, "Invalid user id");
    }
    if (typeof isBlocked !== "boolean") {
        throw new ApiError(400, "isBlocked must be boolean");
    }
    return adminModel.setUserBlocked(userId, isBlocked);
};

exports.listOrders = () => adminModel.listOrders();

exports.changeOrderStatus = async (orderId, status) => {
    if (!Number.isInteger(orderId) || orderId <= 0) {
        throw new ApiError(400, "Invalid order id");
    }
    if (!ALLOWED_ORDER_STATUS.includes(status)) {
        throw new ApiError(400, "Invalid order status");
    }
    return adminModel.changeOrderStatus(orderId, status);
};

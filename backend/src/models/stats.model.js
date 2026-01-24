const prisma = require("../config/prisma");

exports.getStats = async () => {
    const [usersCount, productsCount, ordersCount, revenueAgg] = await Promise.all([
        prisma.user.count(),
        prisma.product.count(),
        prisma.order.count(),
        prisma.order.aggregate({ _sum: { total: true } }),
    ]);

    return {
        usersCount,
        productsCount,
        ordersCount,
        revenueTotal: revenueAgg._sum.total || 0,
    };
};

const statsService = require("../services/stats.service");

exports.getStats = async (req, res, next) => {
    try {
        const stats = await statsService.getStats();
        res.json(stats);
    } catch (e) {
        next(e);
    }
};

exports.register = async (req, res, next) => {
    try {
        res.status(201).json({ message: "register ok", body: req.body });
    } catch (e) {
        next(e);
    }
};

exports.login = async (req, res, next) => {
    try {
        res.json({ message: "login ok", body: req.body });
    } catch (e) {
        next(e);
    }
};

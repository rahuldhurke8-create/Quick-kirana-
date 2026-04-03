'use strict';

const jwt = require('jsonwebtoken');

const authMiddleware = (roles = []) => {
    // roles param can be a single role string (e.g. Role.User)
    // or an array of roles (e.g. [Role.Admin, Role.User])
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return (req, res, next) => {
        // check for token
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) return res.status(403).send('A token is required for authentication');

        try {
            // verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
        } catch (err) {
            return res.status(401).send('Invalid Token');
        }

        // if roles specified, check if the user's role is allowed
        if (roles.length && !roles.includes(req.user.role)) {
            return res.status(401).send('Not authorized');
        }

        return next();
    };
};

module.exports = authMiddleware;

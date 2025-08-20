const { User } = require('../models');

module.exports = async function authorize(req, res, next) {
  try {
    // Assumes req.user is set by authentication middleware (e.g., after JWT verification)
    const { id, role } = req.user || {};
    if (!id) {
      throw { name: 'Unauthorized'};
    }
    next();
  } catch (error) {
    next(error);
  }
};

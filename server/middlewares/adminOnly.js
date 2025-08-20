module.exports = function adminOnly(req, res, next) {
  try {
    // Assumes req.user is set by authentication middleware
    if (!req.user || req.user.role !== 'owner') {
      throw { name: 'Forbidden' };
    }
    next();
  } catch (error) {
    next(error);
  }
};

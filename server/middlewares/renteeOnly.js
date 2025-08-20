module.exports = function ownerOnly(req, res, next) {
  try {
    // Assumes req.user is set by authentication middleware
    if (!req.user || req.user.role !== 'rentee') {
      throw { name: 'Forbidden'};
    }
    next();
  } catch (error) {
    next(error);
  }
};

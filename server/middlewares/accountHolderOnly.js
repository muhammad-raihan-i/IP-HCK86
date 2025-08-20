module.exports = function accountHolderOnly(req, res, next) {
  try {
    if (!req.user || parseInt(req.params.id) !== req.user.id) {
      throw { name: 'Forbidden'};
    }
    next();
  } catch (error) {
    next(error);
  }
};

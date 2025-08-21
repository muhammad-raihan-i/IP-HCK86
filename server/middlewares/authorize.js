

module.exports = async function authorize(req, res, next) {
  try {
    const { id, role } = req.user || {};
    if (!id) {
      throw { name: 'Unauthorized'};
    }
    next();
  } catch (error) {
    next(error);
  }
};

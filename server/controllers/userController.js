const { User } = require('../models');

module.exports = {
  async findAll(req, res, next) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      next(err);
    }
  },
  async findOne(req, res, next) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (err) {
      next(err);
    }
  },
  async create(req, res, next) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  },
  async update(req, res, next) {
    try {
      const [updated] = await User.update(req.body, { where: { id: req.params.id } });
      if (!updated) return res.status(404).json({ message: 'User not found' });
      const user = await User.findByPk(req.params.id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  },
  async delete(req, res, next) {
    try {
      const deleted = await User.destroy({ where: { id: req.params.id } });
      if (!deleted) return res.status(404).json({ message: 'User not found' });
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
};

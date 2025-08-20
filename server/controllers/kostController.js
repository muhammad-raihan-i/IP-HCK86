const { Kost } = require('../models');

module.exports = {
  async findAll(req, res, next) {
    try {
      const kosts = await Kost.findAll();
      res.json(kosts);
    } catch (err) {
      next(err);
    }
  },
  async findOne(req, res, next) {
    try {
      const kost = await Kost.findByPk(req.params.id);
      if (!kost) return res.status(404).json({ message: 'Kost not found' });
      res.json(kost);
    } catch (err) {
      next(err);
    }
  },
  async create(req, res, next) {
    try {
      const kost = await Kost.create(req.body);
      res.status(201).json(kost);
    } catch (err) {
      next(err);
    }
  },
  async update(req, res, next) {
    try {
      const [updated] = await Kost.update(req.body, { where: { id: req.params.id } });
      if (!updated) return res.status(404).json({ message: 'Kost not found' });
      const kost = await Kost.findByPk(req.params.id);
      res.json(kost);
    } catch (err) {
      next(err);
    }
  },
  async delete(req, res, next) {
    try {
      const deleted = await Kost.destroy({ where: { id: req.params.id } });
      if (!deleted) return res.status(404).json({ message: 'Kost not found' });
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
};

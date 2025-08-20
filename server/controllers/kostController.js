const { Kost } = require('../models');

class KostController {
  static async findAll(req, res, next) {
    try {
      const kosts = await Kost.findAll();
      res.json(kosts);
    } catch (err) {
      next(err);
    }
  }

  static async findOne(req, res, next) {
    try {
      const kost = await Kost.findByPk(req.params.id);
      if (!kost) throw { name: 'NotFound', message: 'Kost not found' };
      res.json(kost);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const kost = await Kost.create(req.body);
      res.status(201).json(kost);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const [updated] = await Kost.update(req.body, { where: { id: req.params.id } });
      if (!updated) throw { name: 'NotFound', message: 'Kost not found' };
      const kost = await Kost.findByPk(req.params.id);
      res.json(kost);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const deleted = await Kost.destroy({ where: { id: req.params.id } });
      if (!deleted) throw { name: 'NotFound', message: 'Kost not found' };
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = KostController;

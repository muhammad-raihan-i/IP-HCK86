const { Transaction } = require('../models');

module.exports = {
  async findAll(req, res, next) {
    try {
      const transactions = await Transaction.findAll();
      res.json(transactions);
    } catch (err) {
      next(err);
    }
  },
  async findOne(req, res, next) {
    try {
      const transaction = await Transaction.findByPk(req.params.id);
      if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
      res.json(transaction);
    } catch (err) {
      next(err);
    }
  },
  async create(req, res, next) {
    try {
      const transaction = await Transaction.create(req.body);
      res.status(201).json(transaction);
    } catch (err) {
      next(err);
    }
  },
  async update(req, res, next) {
    try {
      const [updated] = await Transaction.update(req.body, { where: { id: req.params.id } });
      if (!updated) return res.status(404).json({ message: 'Transaction not found' });
      const transaction = await Transaction.findByPk(req.params.id);
      res.json(transaction);
    } catch (err) {
      next(err);
    }
  },
  async delete(req, res, next) {
    try {
      const deleted = await Transaction.destroy({ where: { id: req.params.id } });
      if (!deleted) return res.status(404).json({ message: 'Transaction not found' });
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
};

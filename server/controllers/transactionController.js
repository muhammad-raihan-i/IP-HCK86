const { Transaction } = require('../models');

class TransactionController {
  static async findAll(req, res, next) {
    try {
      const transactions = await Transaction.findAll();
      res.json(transactions);
    } catch (err) {
      next(err);
    }
  }

  static async findOne(req, res, next) {
    try {
      const transaction = await Transaction.findByPk(req.params.id);
      if (!transaction) throw { name: 'NotFound', message: 'Transaction not found' };
      res.json(transaction);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const transaction = await Transaction.create(req.body);
      res.status(201).json(transaction);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const [updated] = await Transaction.update(req.body, { where: { id: req.params.id } });
      if (!updated) throw { name: 'NotFound', message: 'Transaction not found' };
      const transaction = await Transaction.findByPk(req.params.id);
      res.json(transaction);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const deleted = await Transaction.destroy({ where: { id: req.params.id } });
      if (!deleted) throw { name: 'NotFound', message: 'Transaction not found' };
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = TransactionController;

const { Room } = require('../models');

class RoomController {
  static async findAll(req, res, next) {
    try {
      const rooms = await Room.findAll();
      res.json(rooms);
    } catch (err) {
      next(err);
    }
  }

  static async findOne(req, res, next) {
    try {
      const room = await Room.findByPk(req.params.id);
      if (!room) throw { name: 'NotFound', message: 'Room not found' };
      res.json(room);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const room = await Room.create(req.body);
      res.status(201).json(room);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const [updated] = await Room.update(req.body, { where: { id: req.params.id } });
      if (!updated) throw { name: 'NotFound', message: 'Room not found' };
      const room = await Room.findByPk(req.params.id);
      res.json(room);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const deleted = await Room.destroy({ where: { id: req.params.id } });
      if (!deleted) throw { name: 'NotFound', message: 'Room not found' };
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = RoomController;

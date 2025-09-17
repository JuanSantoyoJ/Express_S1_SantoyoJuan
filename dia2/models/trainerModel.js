const { getDB } = require('../config/db');

class TrainerModel {
  static async getAll() {
    const db = getDB();
    return await db.collection('trainers').find().toArray();
  }

  static async getById(id) {
    const db = getDB();
    const { ObjectId } = require('mongodb');
    return await db.collection('trainers').findOne({ _id: new ObjectId(id) });
  }

  static async create(data) {
    const db = getDB();
    const result = await db.collection('trainers').insertOne(data);
    return result;
  }

  static async update(id, data) {
    const db = getDB();
    const { ObjectId } = require('mongodb');
    return await db.collection('trainers').updateOne(
      { _id: new ObjectId(id) },
      { $set: data }
    );
  }

  static async delete(id) {
    const db = getDB();
    const { ObjectId } = require('mongodb');
    return await db.collection('trainers').deleteOne({ _id: new ObjectId(id) });
  }
}

module.exports = TrainerModel;
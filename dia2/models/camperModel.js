const { getDB } = require('../config/db');

class CamperModel {
  static async getAll() {
    const db = getDB();
    return await db.collection('campers').find().toArray();
  }

  static async getById(id) {
    const db = getDB();
    const { ObjectId } = require('mongodb');
    return await db.collection('campers').findOne({ _id: new ObjectId(id) });
  }

  static async create(data) {
    const db = getDB();
    const result = await db.collection('campers').insertOne(data);
    return result;
  }

  static async update(id, data) {
    const db = getDB();
    const { ObjectId } = require('mongodb');
    return await db.collection('campers').updateOne(
      { _id: new ObjectId(id) },
      { $set: data }
    );
  }

  static async delete(id) {
    const db = getDB();
    const { ObjectId } = require('mongodb');
    return await db.collection('campers').deleteOne({ _id: new ObjectId(id) });
  }
}

module.exports = CamperModel;

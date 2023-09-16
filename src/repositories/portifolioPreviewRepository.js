import dbConnect from "../lib/dbConnect";
import Portfiolio from "../models/portifolio";

export default class PortifolioRepository {
  static async create(data) {
    try {
      await dbConnect();

      const record = new Portfiolio(data);

      return await record.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async findAll() {}

  static async findById(id) {}

  static async update(id, data) {}

  static async delete(id) {}
}

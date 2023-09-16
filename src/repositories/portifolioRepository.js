import dbConnect from "../lib/dbConnect";
import Portfiolio from "../models/portifolio";
import crypto from "crypto";

export default class PortifolioRepository {
  static async create(data) {
    try {
      await dbConnect();

      const secret = crypto.randomBytes(32).toString("hex");
      data.userSecret = secret;

      const record = new Portfiolio(data);

      return await record.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async find(id) {
    try {
      await dbConnect();
      const portfolio = await PortfiolioPreview.findById(id);

      return portfolio;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async update(id, data) {
    try {
      await dbConnect();
      const updatedPortfolio = await PortfiolioPreview.findByIdAndUpdate(
        id,
        data,
        {
          new: true,
        }
      );

      return updatedPortfolio;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async delete(id) {
    try {
      await dbConnect();
      const deletedPortfolio = await PortfiolioPreview.findByIdAndRemove(id);

      return deletedPortfolio;
    } catch (error) {
      throw new Error(error);
    }
  }
}

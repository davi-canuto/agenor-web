import dbConnect from "../lib/dbConnect";
import PortfiolioPreview from "../models/portfolioPreview";

export default class PortfolioPreviewRepository {
  static async create(data) {
    try {
      await dbConnect();

      const portfolio = new PortfiolioPreview(data);

      return await portfolio.save();
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

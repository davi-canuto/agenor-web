import PortfolioRepository from "../repositories/portfolioRepository";
import PortfolioPreviewRepository from "../repositories/portfolioPreviewRepository";

export default class PortfolioService {
  async create(portfolioData) {
    try {
      const dbRes = await PortfolioRepository.create(portfolioData);
      return dbRes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createPreview(portfolioData) {
    try {
      const dbRes = await PortfolioPreviewRepository.create(portfolioData);
      console.log(dbRes);
      return dbRes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(portfolioId, updatedData) {
    try {
      const dbRes = await PortfolioRepository.update(portfolioId, updatedData);

      return dbRes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updatePreview(portfolioId, updatedData) {
    try {
      const dbRes = await PortfolioPreviewRepository.update(
        portfolioId,
        updatedData
      );

      return dbRes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async get(portfolioId) {
    try {
      const dbRes = await PortfolioRepository.find(portfolioId);

      return dbRes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getBySecret(secret) {
    try {
      const dbRes = await PortfolioRepository.findBySecret(secret);

      return dbRes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getPreview(portfolioId) {
    try {
      const dbRes = await PortfolioPreviewRepository.find(portfolioId);

      return dbRes;
    } catch (error) {
      throw new Error(error);
    }
  }
}

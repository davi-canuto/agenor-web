import PortifolioRepository from "../repositories/portifolioRepository";
import PortifolioPreviewRepository from "../repositories/portifolioPreviewRepository";

export default class PortfolioService {
  async create(portfolioData) {
    try {
      const dbRes = await PortifolioRepository.create(portfolioData);
      return dbRes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createPreview(portifolioData) {
    try {
      const dbRes = await PortifolioPreviewRepository.create(portifolioData);
      return dbRes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(portfolioId, updatedData) {
    try {
      const dbRes = await PortifolioRepository.update(portfolioId, updatedData);

      return dbRes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updatePreview(portfolioId, updatedData) {
    try {
      const dbRes = await PortifolioPreviewRepository.update(
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
      const dbRes = await PortifolioRepository.find(portfolioId);

      return dbRes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getBySecret(secret) {
    try {
      const dbRes = await PortifolioRepository.findBySecret(secret);

      return dbRes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getPreview(portfolioId) {
    try {
      const dbRes = await PortifolioPreviewRepository.find(portfolioId);

      return dbRes;
    } catch (error) {
      throw new Error(error);
    }
  }
}

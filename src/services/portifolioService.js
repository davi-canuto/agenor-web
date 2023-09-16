import PortifolioRepository from "../repositories/portifolioRepository";
import PortifolioPreviewRepository from "../repositories/portifolioPreviewRepository";

export default class PortfolioService {
  constructor(secret) {
    this.secret = secret;
  }

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

  async update(portfolioId, updatedData) {}
  async updatePreview(portfolioId, updatedData) {}
  async get(portfolioId) {}
}

import PortifolioRepository from "../repositories/portifolioRepository";

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
  async createAndPush(portfolioData) {}
  async update(portfolioId, updatedData) {}
  async updateAndPush(portfolioId, updatedData) {}
  async get(portfolioId) {}
}

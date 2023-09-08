import dbConnect from "../lib/dbConnect";
import * as models from "../models";

class PortfolioService {
  constructor(secret) {
    this.secret = secret;
  }

  async initialize() {
    await dbConnect();
  }

  async create(portfolioData) {}
  async createAndPush(portfolioData) {}
  async update(portfolioId, updatedData) {}
  async updateAndPush(portfolioId, updatedData) {}
  async get(portfolioId) {}
}

module.exports = PortfolioService;

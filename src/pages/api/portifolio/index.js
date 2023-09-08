const PortfolioService = require("./PortfolioService");

export default async function handler(req, res) {
  const { method } = req;
  const { push } = req.headers;

  try {
    const service = new PortfolioService();
    let response;

    if (method != "POST") {
      throw new Error("invalid request");
    }

    if (push) {
      response = await service.createAndPush(req.body);
    } else {
      response = await service.create(req.body);
    }

    res.status(201).json({ success: true, data: response });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

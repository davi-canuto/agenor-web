import PortifolioService from "../../../services/portifolioService";

export default async function handler(req, res) {
  const { method } = req;
  const { preview } = req.headers;

  try {
    const service = new PortifolioService();
    let response;

    if (method != "POST") {
      throw new Error("invalid request");
    }

    if (preview) {
      response = await service.createPreview(req.body);
    } else {
      response = await service.create(req.body);
    }

    res.status(201).json({ success: true, data: response });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

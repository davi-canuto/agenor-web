import PortifolioService from "../../../services/portifolioService";

export default async function handler(req, res) {
  const { method } = req;
  const { id, preview } = req.query;

  const realPreview = preview == "true" ? true : false;

  try {
    const service = new PortifolioService();
    let response;

    if (method == "PUT") {
      if (realPreview) {
        response = await service.updatePreview(id, req.body);
      } else {
        response = await service.update(id, req.body);
      }
    } else if (method == "GET") {
      if (realPreview) {
        response = await service.getPreview(id);
      } else {
        response = await service.get(id);
      }
    } else {
      throw new Error("invalid request");
    }

    res.status(200).json({ success: true, data: response });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

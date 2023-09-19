import PortifolioService from "../../../services/portifolioService";

export default async function handler(req, res) {
  const { method } = req;
  const { preview, secret } = req.query;

  const realPreview = preview == "false" ? false : true;

  try {
    const service = new PortifolioService();
    let response;

    if (method == "POST")
      if (realPreview) {
        response = await service.createPreview(req.body);
      } else {
        response = await service.create(req.body);
      }

    if (method == "GET")
      if (secret) {
        response = await service.getBySecret(secret);
      } else {
        throw new Error("You must be pass your SECRET to get portifolio");
      }

    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
}

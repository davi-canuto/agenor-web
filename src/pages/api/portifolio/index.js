import PortifolioService from "../../../services/portifolioService";

export default async function handler(req, res) {
  const { method } = req;
  const { preview, secret } = req.headers;

  const realPreview = preview == "false" ? false : true;

  console.log(secret);
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
        console.log(secret);

        response = await service.getBySecret(secret);
      } else {
        // response = await service.get(req.body);
      }

    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
}

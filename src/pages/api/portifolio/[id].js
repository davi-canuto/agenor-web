export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;
  const { preview, secret } = req.headers;

  try {
    const service = new PortfolioService(secret);
    let response;

    if (method == "PUT") {
      if (preview) {
        response = service.updatePreview(id, req.body);
      } else {
        response = service.update(id, req.body);
      }
    } else if (method == "GET") {
      if (preview) {
        response = service.getPreview(id);
      } else {
        response = service.get(id);
      }
    } else {
      throw new Error("invalid request");
    }

    res.status(200).json({ success: true, data: response });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

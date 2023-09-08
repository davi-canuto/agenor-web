export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;
  const { push, secret } = req.headers;

  try {
    const service = new PortfolioService(secret);
    let response;

    if (method == "PUT") {
      if (push) {
        response = service.update(id, req.body);
      } else {
        response = service.updateAndPush(id, req.body);
      }
    } else if (method == "GET") {
      response = service.get(id);
    } else {
      throw new Error("invalid request");
    }

    res.status(200).json({ success: true, data: response });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

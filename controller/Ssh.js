module.exports = (app) => {
  app.get("/teste", (req, res) => {
    res.send("voce esta na rota ssh");
  });

  app.post("/teste", async (req, res) => {
    const corpo = req.body;
    res.json(corpo);
  });

  app.get("/ssh", (req, res) => {
    res.send("voce esta na rota ssh");
  });

  app.post("/ssh", async (req, res) => {
    const corpo = req.body;
    res.json(corpo);
  });
};

module.exports = (app) => {
    app.get("/olt", (req, res) => {
      res.send("voce esta na rota OLT");
    });
  
    app.post("/olt", async (req, res) => {
      const corpo = req.body;
      res.json(corpo);
    });
  };
  

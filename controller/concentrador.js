const ssh = require('../src/modules/SshExec');


module.exports = (app) => {
    app.get("/concentrador", (req, res) => {
     const resp = ssh();
     console.log(`${resp}`);
     
     res.send(`${resp}`);
      
    });
  
    app.post("/concentrador", async (req, res) => {
      const corpo = req.body;
      res.json(corpo);
    });
  };
  
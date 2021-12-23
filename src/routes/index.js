const { Router } = require("express");
const router = Router();
//Rutas
router.get("/", (req, res) => {
  res.json({ Titulo: "Hola" });
});

router.get("/test", (req, res) => {
  const data = {
    Nombre: "Angel",
    Apellido: "Vega",
  };
  res.json(data);
});

module.exports = router;

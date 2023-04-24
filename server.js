require("dotenv").config();
const cors = require("cors");
const path = require("path");
const express = require("express");

const routes = require("./routes");

const APP_PORT = process.env.APP_PORT || 4000;
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});

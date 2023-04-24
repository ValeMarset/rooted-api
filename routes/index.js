/**
 * No hay una única forma de organizar las rutas de un sitio web.
 * Una alternativa podría ser organizar las rutas por entidad:
 */

// const userRoutes = require("./userRoutes");
// const articleRoutes = require("./articleRoutes");
// const commentRoutes = require("./commentRoutes");

/**
 * Otra alternativa podría ser organizar las rutas según su nivel de
 * privacidad (ej: si son rutas públicas o privadas).
 *
 * En `publicRoutes` podrían estar las rutas relacionadas con páginas como
 * Home, Contacto y Sobre Nosotros. En `privateRoutes` podrían estar las rutas
 * relacionados al Panel de Control (Admin). Notar que si se está construyendo
 * una API esta alternativa no tendría sentido.
 */
const publicRoutes = require("./publicRoutes");
const userTokenRoutes = require("./userTokenRoutes");
const adminTokenRoutes = require("./adminTokenRoutes");
const orderRoutes = require("./orderRoutes");
const userOrderRoutes = require("./userOrderRoutes");
const authRoutes = require("./authRoutes");
const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const categoryProductRoutes = require("./categoryProductRoutes");
const trendingRoutes = require("./trendingRoutes");
const categoryRoutes = require("./categoryRoutes");
const wishListRoutes = require("./wishListRoutes");
const dbRoutes = require("./dbRoutes");

module.exports = (app) => {
  /**
   * Notar que si el sitio está en español, tiene sentido que las URLs que se
   * ven en la barra de direcciiones del navegador también lo estén. No así los
   * nombres de variables, funciones, etc, que siempre se recomienda que estén
   * en inglés.
   */

  // app.use("/usuarios", userRoutes);
  app.use("/", publicRoutes);
  app.use("/user-token", userTokenRoutes);
  app.use("/admin-token", adminTokenRoutes);
  app.use("/orders", orderRoutes);
  app.use("/user-orders", userOrderRoutes);
  app.use("/auth", authRoutes);
  app.use("/admins", adminRoutes);
  app.use("/users", userRoutes);
  app.use("/products", productRoutes);
  app.use("/categories-products", categoryProductRoutes);
  app.use("/trending", trendingRoutes);
  app.use("/categories", categoryRoutes);
  app.use("/wish-list", wishListRoutes);
  app.use("/database", dbRoutes);
};

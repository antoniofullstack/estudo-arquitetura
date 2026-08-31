const express = require("express");
const { notFoundHandler, errorHandler } = require("./adapters/in/http/middlewares/errorHandler");

/**
 * @param {import("express").Router} router
 */
function createApp(router) {
  const app = express();

  app.use(express.json());
  app.use(router);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}

module.exports = createApp;

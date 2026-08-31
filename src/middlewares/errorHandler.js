function notFoundHandler(req, res) {
  res.status(404).json({ error: "Rota não encontrada" });
}

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ error: "Erro interno do servidor" });
}

module.exports = { notFoundHandler, errorHandler };

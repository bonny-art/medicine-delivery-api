function getOrders(req, res, next) {
  res.send("getOrders");
}

function getOrder(req, res, next) {
  res.send("getOrder");
}

function createOrder(req, res, next) {
  res.send("createOrder");
}

export default { getOrders, getOrder, createOrder };

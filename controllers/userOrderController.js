const { Order } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const orders = await Order.findAll({ where: { userId: req.auth.sub } });

    return res.status(200).json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

// Display the specified resource.
async function show(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Update stock of ordered products.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};

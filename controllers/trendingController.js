const { set } = require("lodash");
const { Product } = require("../models");
const { Category } = require("../models");
const { Order } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const orders = await Order.findAll();

    const allOrderedQuantities = orders.map((order) =>
      order.products.map((product) => ({
        productId: product.productId,
        quantity: product.quantity,
      })),
    );

    const singleArrayOrderedQuantities = allOrderedQuantities.flat();

    totalQuantity = 0;
    for (const singleArrayOrderedQuantity of singleArrayOrderedQuantities) {
      totalQuantity += singleArrayOrderedQuantity.quantity;
    }

    const OrderedProducts = orders.map((order) =>
      order.products.map((product) => product.productId),
    );

    const singleArrayUniqueOrderedProductsId = OrderedProducts.flat();

    const uniqueOrderedProductsId = [...new Set(singleArrayUniqueOrderedProductsId)];

    const uniqueOrderedProductsWithQuantityOverTotal = uniqueOrderedProductsId.map(
      (uniqueOrderedProductId) => ({
        productId: uniqueOrderedProductId,
        quantityOverTotal: 0,
      }),
    );

    for (const uniqueOrderedProductWithQuantityOverTotal of uniqueOrderedProductsWithQuantityOverTotal) {
      for (const singleArrayOrderedQuantity of singleArrayOrderedQuantities) {
        if (
          singleArrayOrderedQuantity.productId ===
          uniqueOrderedProductWithQuantityOverTotal.productId
        ) {
          uniqueOrderedProductWithQuantityOverTotal.quantityOverTotal +=
            (singleArrayOrderedQuantity.quantity / totalQuantity) * 100;
        }
      }
    }

    const sortedTrendingProducts = uniqueOrderedProductsWithQuantityOverTotal.sort(
      (a, b) => b.quantityOverTotal - a.quantityOverTotal,
    );

    const products = await Product.findAll({
      include: Category,
    });

    trendingProducts = sortedTrendingProducts.flatMap((sortedTrendingProduct) =>
      products.filter(
        (product) => product.id === sortedTrendingProduct.productId && product.stock !== 0,
      ),
    );

    const top4Trending = trendingProducts.slice(0, 6);

    return res.status(200).json(top4Trending);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

// Display the specified resource.
async function show(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Update the specified resource in storage.
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

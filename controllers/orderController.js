const { Order } = require("../models");
const { Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const orders = await Order.findAll();
    return res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error del servidor");
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const order = await Order.findByPk(req.params.id);

    return res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const cartProducts = req.body.products.map((cartProduct) => {
      return {
        productId: cartProduct.id,
        productName: cartProduct.name,
        productImage: cartProduct.img,
        price: cartProduct.price,
        quantity: cartProduct.quantity,
      };
    });

    // const allProducts = await Product.findAll();

    // for (const cartProduct of cartProducts) {
    //   for (const product of allProducts) {
    //     if (product.id === cartProduct.productId && product.stock < cartProduct.quantity) {
    //       return res.status(200).json({ message: "Stock sold out" });
    //     }
    //   }
    // }

    const order = await Order.create({
      products: cartProducts,
      userId: req.auth.sub,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
    });

    await order.save();

    return res.status(200).json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

// Update stock of ordered products.
async function update(req, res) {
  try {
    const products = await Product.findAll();
    const order = await Order.findByPk(req.body.id);
    const productsOrder = order.products;

    for (const product of products) {
      for (const productInOrder of productsOrder) {
        if (productInOrder.productId === product.id) {
          await Product.update(
            {
              stock: product.stock - productInOrder.quantity,
            },
            {
              where: {
                id: productInOrder.productId,
              },
            },
          );
        }
      }
    }
    return res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

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

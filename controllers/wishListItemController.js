const { User } = require("../models");
const { Product } = require("../models");
const { Category } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const user = await User.findByPk(req.auth.sub);
    const products = await Product.findAll({
      include: Category,
    });

    wishListProducts = user.wishList.flatMap((item) =>
      products.filter((product) => product.id === item),
    );

    // console.log(wishListProducts);

    return res.status(200).json(wishListProducts);
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
async function update(req, res) {
  try {
    const user = await User.findByPk(req.auth.sub);
    const productId = req.body.id;

    if (user.wishList.includes(productId)) {
      user.wishList = user.wishList.filter((item) => item !== productId);
    } else {
      user.wishList = [...user.wishList, productId];
    }

    user.update({ wishList: user.wishList });

    return res.status(200).json(user.wishList);
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

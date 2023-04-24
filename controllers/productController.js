const { Product } = require("../models");
const { Category } = require("../models");
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Display a listing of the resource.
async function index(req, res) {
  try {
    const products = await Product.findAll({
      include: Category,
    });

    return res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const product = await Product.findOne({
      where: { id: req.params.id },
      include: Category,
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const form = formidable({
      multiples: false,
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      const { name, description, summary, upkeep, price, stock, trending, categoryId } = fields;
      const ext = path.extname(files.img.filepath);
      const newFileName = `img${Date.now()}${ext}`;

      const { data, error } = await supabase.storage
        .from("img")
        .upload(newFileName, fs.createReadStream(files.img.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.img.mimetype,
          duplex: "half",
        });

      const product = await Product.create({
        name: name,
        description: description,
        summary: summary,
        upkeep: upkeep,
        price: price,
        stock: stock,
        img: data.path || "default-image.jpg",
        trending: trending,
        categoryId: categoryId,
      });

      await product.save();

      return res.status(200).json(product);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.log(err);
        res.status(500).send("Server Error");
        return;
      }
      if (files.img) {
        const ext = path.extname(files.img.filepath);
        const newFileName = `img${Date.now()}${ext}`;

        const { data, error } = await supabase.storage
          .from("img")
          .upload(newFileName, fs.createReadStream(files.img.filepath), {
            cacheControl: "3600",
            upsert: false,
            contentType: files.img.mimetype,
            duplex: "half",
          });
        if (error) {
          console.log(error);
          res.status(500).send("Server Error");
          return;
        }
        fields.img = data.path;
      }

      const { name, description, summary, upkeep, price, stock, trending, categoryId } = fields;
      await Product.update(
        {
          name: name,
          description: description,
          summary: summary,
          upkeep: upkeep,
          price: price,
          stock: stock,
          img: fields.img,
          trending: trending,
          categoryId: categoryId,
        },
        {
          where: {
            id: req.params.id,
          },
        },
      );

      res.status(200).json(product);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await Product.destroy({ where: { id: req.body.id } });
    return res.status(200).json("Product deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};

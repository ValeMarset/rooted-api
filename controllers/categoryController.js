const { Category } = require("../models");
const { Product } = require("../models");
const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Display a listing of the resource.
async function index(req, res) {
  try {
    const categories = await Category.findAll();

    return res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const category = await Category.findByPk(req.params.id);

    return res.status(200).json(category);
  } catch (error) {
    console.log(error);
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
      const { name, description } = fields;
      const ext = path.extname(files.img.filepath);
      const newFilename = `img${Date.now()}${ext}`;
      const { data, error } = await supabase.storage
        .from("img")
        .upload(files.img.newFilename, fs.createReadStream(files.img.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.img.mimetype,
          duplex: "half",
        });
      const category = await Category.create({
        name: name,
        description: description,
        img: data.path || "default-image.jpg",
      });

      await category.save();

      return res.status(200).json(category);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const category = await Category.findByPk(req.params.id);

    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });
    form.parse(req, async (err, fields, files) => {
      const { name, description } = fields;
      if (!files.img) {
        await Category.update({
          name: name,
          description: description,
        });
        return res.status(200).json(category);
      } else {
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
        await category.update({
          name: name,
          description: description,
          img: data - path,
        });
        return res.status(200).json(category);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await Category.destroy({ where: { id: req.body.id } });
    return res.status(200).json("Category deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
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

const { User } = require("../models");
const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Display a listing of the resource.
async function index(req, res) {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
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
      const { firstname, lastname, address, phone, email, password } = fields;
      const ext = path.extname(files.image.filepath);
      const newFilename = `img${Date.now()}${ext}`;
      const { data, error } = await supabase.storage
        .from("img")
        .upload(files.image.newFilename, fs.createReadStream(files.image.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.image.mimetype,
          duplex: "half",
        });

      const user = await User.create({
        firstname: firstname,
        lastname: lastname,
        address: address,
        phone: phone,
        email: email,
        image: data.path || "default-image.jpg",
        password: password,
      });

      await user.save();
      return res.status(200).json(user);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      const { firstname, lastname, email, address, phone } = fields;

      if (!files.image) {
        await user.update({
          firstname: firstname,
          lastname: lastname,
          email: email,
          address: address,
          phone: phone,
        });
        return res.status(200).json(user);
      } else {
        const ext = path.extname(files.image.filepath);
        const newFileName = `img${Date.now()}${ext}`;

        const { data, error } = await supabase.storage
          .from("img")
          .upload(newFileName, fs.createReadStream(files.image.filepath), {
            cacheControl: "3600",
            upsert: false,
            contentType: files.image.mimetype,
            duplex: "half",
          });
        await user.update({
          firstname: firstname,
          lastname: lastname,
          email: email,
          address: address,
          phone: phone,
          image: data.path,
        });

        return res.status(200).json(user);
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await User.destroy({ where: { id: req.params.id } });
    return res.status(200).json("User deleted successfully");
  } catch (err) {
    console.log(err);
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

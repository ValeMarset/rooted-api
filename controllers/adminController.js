const { Admin } = require("../models");
const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Display a listing of the resource.
async function index(req, res) {
  try {
    const admins = await Admin.findAll();

    return res.status(200).json(admins);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const admin = await Admin.findByPk(req.params.id);

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    return res.status(200).json(admin);
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
      const { firstname, lastname, address, phone, email, password } = fields;
      console.log(fields);
      console.log(files);
      const ext = path.extname(files.avatar.filepath);
      const newFilename = `img${Date.now()}${ext}`;
      const { data, error } = await supabase.storage
        .from("img")
        .upload(files.avatar.newFilename, fs.createReadStream(files.avatar.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.avatar.mimetype,
          duplex: "half",
        });

      const admin = await Admin.create({
        firstname: firstname,
        lastname: lastname,
        address: address,
        phone: phone,
        email: email,
        avatar: data.path || "default-image.jpg",
        password: password,
      });

      await admin.save();
      return res.status(200).json(admin);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const admin = await Admin.findByPk(req.params.id);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      const { firstname, lastname, email, address, phone } = fields;

      if (!files.image) {
        await admin.update({
          firstname: firstname,
          lastname: lastname,
          email: email,
          address: address,
          phone: phone,
        });
        return res.status(200).json(admin);
      } else {
        const ext = path.extname(files.avatar.filepath);
        const newFileName = `img${Date.now()}${ext}`;

        const { data, error } = await supabase.storage
          .from("img")
          .upload(newFileName, fs.createReadStream(files.avatar.filepath), {
            cacheControl: "3600",
            upsert: false,
            contentType: files.avatar.mimetype,
            duplex: "half",
          });
        await user.update({
          firstname: firstname,
          lastname: lastname,
          email: email,
          address: address,
          phone: phone,
          avatar: data.path,
        });

        return res.status(200).json(admin);
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
    await Admin.destroy({ where: { id: req.body.id } });
    return res.status(200).json("Admin deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
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

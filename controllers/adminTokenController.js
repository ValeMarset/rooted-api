const { Admin } = require("../models");
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const adminIncludesPassword = await Admin.findOne({
      //   $or: [{ email: req.body.username }, { username: req.body.username }],
      where: { email: req.body.email },
    });

    if (!adminIncludesPassword) {
      return res.status(404).json({ error: "Admin not found" });
    }

    const match = await bcrypt.compare(req.body.password, adminIncludesPassword.password);
    if (!match) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const admin = _.omit(adminIncludesPassword.toJSON(), ["password"]);
    const token = jwt.sign({ sub: adminIncludesPassword.id }, process.env.SESSION_SECRET);
    return res.json({ token, admin });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};

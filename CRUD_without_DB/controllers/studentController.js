const { redirect } = require("express/lib/response");
const path = require("path");

exports.index = (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
};

exports.show = (req, res) => {
  res.send(`Showing data for ID: ${req.params.id}\n`);
};

exports.welcome = (req, res) => {
  res.send(`Hello welcome${req.params.name}`);
};


exports.store = (req, res) => {
  res.send(`Data received: ${req.body.name}, ${req.body.city}\n`);
};

exports.update = (req, res) => {
  res.send(
    `Data updated for ID: ${req.params.id}, Name: ${req.body.name}, City: ${req.body.city}\n`
  );
};

exports.delete = (req, res) => {
  res.send(`Data deleted for ID: ${req.params.id}\n`);
};
 
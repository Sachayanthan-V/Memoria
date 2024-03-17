const express = require("express");

module.exports.home = async function (req, res) {
  console.log("Entered into homeController.home");
  // res.send("home page");

  res.render("home", {
    title : "Memoria",
  });

  return;

  try {
  } catch {}
};

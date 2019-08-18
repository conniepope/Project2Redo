var db = require("../models");

module.exports = function(app) {
  // Load INDEX page with logins
  app.get("/", function(req, res) {
    db.logins.findAll({}).then(function() {
      res.render("index");
    });
  });

  // Load CREATE page
  app.get("/create", function(req, res) {
    db.logins.findAll({}).then(function() {
      res.render("create");
    });
  });

  // Load ADMIN page with employees & tiers info
  app.get("/admin", function(req, res) {
    db.employees.findAll({}).then(function(result) {
      db.tiers.findAll({}).then(function() {
      });
      res.render("admin", { employees: result });
      console.log(result);
    });
  });

   // Load NEW MEMBER page
   app.get("/newMember", function(req, res) {
    db.employees.findAll({}).then(function() {
      res.render("newMember");
    });
  }); 


  // Load page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

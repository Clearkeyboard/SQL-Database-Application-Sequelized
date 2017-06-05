var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(result) {
            res.render("index", {burger: result});
        });
    });

    app.post("/", function(req, res) {
        db.Burger.create({
            burger_name: req.body.burger,
            devoured: 0}).then(function(results) {
               return res.redirect("/")
            });
        });

    app.put("/:id", function(req, res) {
        db.Burger.update({
            devoured: req.body.eat
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            return res.redirect("/")
        });
    });

    app.delete("/:id", function (req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            return res.redirect("/");
        })
    });
}

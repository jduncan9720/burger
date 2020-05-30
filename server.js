var express = require("express");
var orm = require("./config/orm.js");


orm.selectAll("burgers");

orm.insertOne("example");

orm.updateOne("1", "devoured")

// Find a pet in the pets table by an animal_name of Rachel.
// orm.selectWhere("pets", "animal_name", "Rachel");

// // Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");
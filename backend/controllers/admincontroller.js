const Stockpurchaser = require("../models/Stockpurchaser");
const stockadmin = require("../models/Admin")

const viewstockmembers = async (request, response) => {
  try {
    const stockmembers = await Stockpurchaser.find();
    if (stockmembers.length == 0) {
      response.send("DATA NOT FOUND");
    } else {
      response.json(stockmembers);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const deletestockpurchaser = async (request, response) => {
  try {
    const email = request.params.email;
    const stockpurchaser = await Stockpurchaser.findOne({ "email": email });
    if (stockpurchaser != null) {
      await Stockpurchaser.deleteOne({ "email": email });
      response.send("Deleted Successfully");
    } else {
      response.send("Email ID Not Found");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const checkadminlogin = async (request, response) => {
  try {
    const input = request.body;
    console.log(input);
    const admin = await stockadmin.findOne(input);
    response.json(admin);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

module.exports = { viewstockmembers, deletestockpurchaser, checkadminlogin };

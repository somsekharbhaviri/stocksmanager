const Stockpurchaser = require("../models/Stockpurchaser")

const insertstockpurchaser = async (request, response) => {
    try 
    {
      const input = request.body;
      const stockpurchaser= new Stockpurchaser(input);
      await stockpurchaser.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };
  const checkstockpurchaserlogin = async (request, response) => {
    try {
      const input = request.body;
      console.log(input);
      const stockpurchaser= await Stockpurchaser.findOne(input);
      response.json(stockpurchaser);
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  module.exports = {insertstockpurchaser,checkstockpurchaserlogin}

const { setWorldConstructor } = require("cucumber");

class World {

  constructor() {
    this.url= null;
    this.response = null;
    this.query = null;
  }
};

setWorldConstructor(World);

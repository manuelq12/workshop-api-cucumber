const { setWorldConstructor } = require('cucumber');

class World {
  constructor() {
    this.url = null;
    this.response = null;
    this.previous_response = null;
    this.query = null;
    this.body = null;
    this.username = null;
  }
}

setWorldConstructor(World);

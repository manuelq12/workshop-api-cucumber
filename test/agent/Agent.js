const agent = require('superagent');

class Agent {
  static async getRequest(url) {
    const response = await agent.get(url)
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'agent');

    return response;
  }

  static async getRequestQuery(url, query) {
    const response = await agent.get(url).query(query)
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'agent');

    return response;
  }

  static async headRequest(url) {
    const response = await agent.head(url)
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'agent');

    return response;
  }

  static async patchRequest(url) {
    const response = await agent.patch(url)
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'agent');

    return response;
  }

  static async putRequest(url) {
    const response = await agent.put(url)
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'agent');
    return response;
  }

  static async putRequestQuery(url, query) {
    const response = await agent.put(url).query(query)
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'agent');

    return response;
  }

  static async deleteRequest(url) {
    const response = await agent.delete(url)
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'agent');
    return response;
  }

  static async deleteRequestQuery(url, query) {
    const response = await agent.delete(url).query(query)
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'agent');

    return response;
  }
}

module.exports = Agent;

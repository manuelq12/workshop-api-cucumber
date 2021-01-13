function setAuthorizationHeaders(agent) {
  agent.auth('token', process.env.ACCESS_TOKEN)
    .set('User-Agent', 'agent');
}

module.exports = { setAuthorizationHeaders };

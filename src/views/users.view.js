function renderUser(user) {
  return { id: user.id, name: user.name, email: user.email };
}

function renderMany(users) {
  return users.map(renderUser);
}

function renderError(message) {
  return { error: message };
}

module.exports = { renderUser, renderMany, renderError };

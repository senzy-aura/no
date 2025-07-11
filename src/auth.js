// Simple authentication helpers for localStorage-based auth
export function getLoggedInUser() {
  return JSON.parse(localStorage.getItem('loggedInUser'));
}

export function loginUser(username, password) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify({ username: user.username }));
    return { username: user.username };
  }
  return null;
}

export function logoutUser() {
  localStorage.removeItem('loggedInUser');
}

export function registerUser(username, password) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.find(u => u.username === username)) {
    return false;
  }
  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
  return true;
}

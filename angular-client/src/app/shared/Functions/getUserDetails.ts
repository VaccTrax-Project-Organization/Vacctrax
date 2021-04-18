export function getUserDetails() {
  const keys = JSON.parse(sessionStorage.getItem('signedInUser'));
  delete keys?.token;
  return keys;
}

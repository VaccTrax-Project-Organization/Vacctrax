export function getToken() {
  const keys = JSON.parse(sessionStorage.getItem('signedInUser'));
  return keys.token;
}

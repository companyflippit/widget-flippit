export const getCookie = (cookieName) => {
  const name = `${cookieName}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
export const setCookies = (tokenObject) => {
  const accessToken = `FLIPPIT_accessToken=${tokenObject.accessToken};expires=${new Date(tokenObject.accessTokenExpiresAt).toUTCString()}`;
  const refreshToken = `FLIPPIT_refreshToken=${tokenObject.refreshToken};expires=${new Date(tokenObject.refreshTokenExpiresAt).toUTCString()}`;
  document.cookie = accessToken;
  document.cookie = refreshToken;
}

export const removeCookies = () => {
  const accessToken = `FLIPPIT_accessToken=remove;expires=${new Date().toUTCString()}`;
  const refreshToken = `FLIPPIT_refreshToken=remove;expires=${new Date().toUTCString()}`;
  document.cookie = accessToken;
  document.cookie = refreshToken;
}
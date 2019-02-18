export const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');

export const httpGet = async (url, token) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  return response;
}
export const httpPost = async (url, body) => {
  const form = toUrlEncoded(body);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic MThlNjQ2OGU4MWNiMmRmNTYwMzNiOTU0MjkxODJjODI6YTY5MTYxMmZmODA5OTdhNWE3NjU4MDVlOTlkYzI3OTY2NGI2MTNjNjIyZGJiNzI3ZDRkNzM4ODkxZWNiOTk0Nw==',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: form
  });
  return response;
}
export const httpPatch = async (url, body, token) => {
  const form = toUrlEncoded(body);
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: form
  });
  return response;
}

export const httpPostAuth = async (url, body, token) => {
  const form = toUrlEncoded(body);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: form
  });
  return response;
}
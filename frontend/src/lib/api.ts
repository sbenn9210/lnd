const API_URL = "http://localhost:4000/api";
const WS_URL = "ws://localhost:4000/api/events";
const TOKEN_KEY = "token";

export const getToken = () => sessionStorage.getItem(TOKEN_KEY) || "";
export const setToken = (value: string) =>
  sessionStorage.setItem(TOKEN_KEY, value);
export const clearToken = () => sessionStorage.removeItem(TOKEN_KEY);

export const connect = async (host: string, cert: string, macaroon: string) => {
  const request = { host, cert, macaroon };
  const { token } = await httpPost("connect", request);
  // save the token into the browser's storage
  setToken(token);
};

const httpPost = async (path: string, data: Record<string, any> = {}) => {
  const url = `${API_URL}/${path}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // add the token from localStorage into every request
      "X-Token": getToken(),
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  if (json.error) {
    throw new Error(json.error);
  }
  return json;
};

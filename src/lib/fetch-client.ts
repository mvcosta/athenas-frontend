import { getCookie } from "cookies-next";
import { authFetch } from "./fetch";

export async function authAPIPaginatedClientFetch(
  endpoint: string,
  page: number = 0,
  limit: number = 10,
  init?: RequestInit
): Promise<Response> {
  const offset = (page - 1) * limit;
  const query = `limit=${limit}&offset=${offset}`;

  const separator = endpoint.includes("?") ? "&" : "?";
  const url = `${endpoint}${separator}${query}`;

  return authAPIClientFetch(url, init);
}

export async function authAPIClientFetch(
  endpoint: string,
  init?: RequestInit
): Promise<Response> {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const url = `${api}${endpoint}`;
  const token = getToken();
  return authFetch(url, token, init);
}

function getToken() {
  let token;

  if (process.env.NODE_ENV === "development") {
    token = process.env.NEXT_PUBLIC_AUTH_TOKEN;
  } else {
    token = getCookie("api_token");
  }

  if (!token) throw Error("Token not found");

  return token;
}

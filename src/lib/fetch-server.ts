import { cookies } from "next/headers";
import { authFetch } from "./fetch";
import { EnumFieldResponse } from "@/interfaces/enum-field";

export async function fetchEnum(endpoint: string) {
  const response = await authAPIPaginatedFetch(endpoint);
  const regimesResponse: EnumFieldResponse = await response.json();
  return regimesResponse.results;
}

export async function authAPIPaginatedFetch(
  endpoint: string,
  page: number = 0,
  limit: number = 10,
  init?: RequestInit
): Promise<Response> {
  const offset = (page - 1) * limit;
  const query = `limit=${limit}&offset=${offset}`;

  const separator = endpoint.includes("?") ? "&" : "?";
  const url = `${endpoint}${separator}${query}`;

  return authAPIFetch(url, init);
}

export async function authAPIFetch(
  endpoint: string,
  init?: RequestInit
): Promise<Response> {
  const ngnix = process.env.SERVER_API_URL;
  const url = `${ngnix}${endpoint}`;
  const token = getToken();
  return authFetch(url, token, init);
}

function getToken() {
  let token;
  if (process.env.NODE_ENV === "development") {
    token = process.env.NEXT_PUBLIC_AUTH_TOKEN;
  } else {
    token = cookies().get("api_token")?.value;
  }

  if (!token) throw Error("Token not found");

  return token;
}

import { ResponseObject } from "@/interfaces/response";

export const fetchAPIGetRequest = async (path: string) => {
  const cookieString = document.cookie;
  const cookies = cookieString.split(";");

  let token = null;
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("polyclinic=")) {
      token = cookie.substring(12);
    }
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${path}`, {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });

  const data: ResponseObject = await res.json();

  return data;
};

export const fetchAPIPOSTRequest = async (
  path: string,
  body: any
): Promise<ResponseObject> => {
  const cookieString = document.cookie;
  const cookies = cookieString.split(";");

  let token = null;
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("polyclinic=")) {
      token = cookie.substring(11);
    }
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${path}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
    body: JSON.stringify(body),
  });

  const data: ResponseObject = await res.json();

  return data;
};

export const fetchAPIPUTRequest = async (
  path: string,
  body: any
): Promise<ResponseObject> => {
  const cookieString = document.cookie;
  const cookies = cookieString.split(";");

  let token = null;
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("polyclinic=")) {
      token = cookie.substring(12);
    }
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${path}`, {
    cache: "no-store",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
    body: JSON.stringify(body),
  });

  const data: ResponseObject = await res.json();

  return data;
};

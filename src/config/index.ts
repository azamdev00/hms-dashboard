import { ResponseObject } from "@/interfaces/response";

export const fetchAPIGetRequest = async (path: string) => {
  // const store = localStorage.getItem("flashfix-store");
  // const parseData = store ? JSON.parse(store) : "";
  // const { token } = parseData?.state;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${path}`, {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // authorization: "Bearer " + token,
    },
  });

  const data: ResponseObject = await res.json();

  return data;
};

export const fetchAPIPOSTRequest = async (
  path: string,
  body: any
): Promise<ResponseObject> => {
  // const store = localStorage.getItem("flashfix-store");
  // const parseData = store ? JSON.parse(store) : "";
  // const { token } = parseData?.state;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${path}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // authorization: "Bearer " + token,
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
  // const store = localStorage.getItem("flashfix-store");
  // const parseData = store ? JSON.parse(store) : "";
  // const { token } = parseData?.state;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${path}`, {
    cache: "no-store",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // authorization: "Bearer " + token,
    },
    body: JSON.stringify(body),
  });

  const data: ResponseObject = await res.json();

  return data;
};

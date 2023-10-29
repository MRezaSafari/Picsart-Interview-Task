import { stringify } from "querystring";

interface Options {
  headers?: Record<string, string>;
  params?: Record<string, any>;
  body?: any;
  noCache?: boolean;
}

interface FetchError {
  status: number;
  message: string;
  code: number;
}

type method = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";

const fetcher = async (
  fetchKey: string,
  method?: method,
  options?: Options
) => {
  // Default headers list
  const headersList = {
    ...(options?.body && { "Content-Type": "application/json" }),
    ...(options?.noCache && { "Cache-Control": "no-cache" }),
    Accept: "application/json",
    ...(options && options.headers && options.headers),
  };

  const requestInit: RequestInit = {
    method: method,
    headers: headersList,
    ...(options && options.body && { body: JSON.stringify(options.body) }),
  };

  try {
    // initial url structure
    const formedUrl = [process.env["API_URL"], fetchKey];

    // add query params to url
    if (options && options.params) {
      formedUrl.push("?" + stringify(options.params));
    }

    // send a request
    const response = await fetch(formedUrl.join(""), requestInit);

    // TODO: if we have some sort of authentication we should check for 401 errors here

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!response.ok) {
      // Attach extra info to the error object.

      const responseMessage = await response.json();

      const error: FetchError = {
        status: responseMessage?.status || 500,
        message: responseMessage?.message || "something went wrong",
        code: responseMessage?.code,
      };

      return error;
    }

    return response.json();
  } catch (error: any) {
    const errorMessage = error;

    // TODO: Log the error in some log management system like Sentry
    
    const fetchError: FetchError = {
      status: errorMessage?.status || 500,
      message: errorMessage?.message || "something went wrong",
      code: errorMessage?.code,
    };
    return fetchError;
  }
};

export default fetcher;

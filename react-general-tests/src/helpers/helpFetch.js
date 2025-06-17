export const helpFetch = async (url, options = {}) => {
  try {
    const finalOptions = {
      method: options.method || "GET",
      headers: {
        accept: "application/json",
        ...options.headers,
      },
      ...options,
    };

    const res = await fetch(url, finalOptions);

    if (!res.ok) {
      throw {
        status: res.status,
        statusText: res.statusText || "Error fetching data",
      };
    }

    const json = await res.json();
    return json;
  } catch (err) {
    return {
      data: null,
      error: {
        status: err.status || "00",
        statusText: err.statusText || "Error fetching data",
        message: err.message || "Error fetching data",
      },
    };
  }
};

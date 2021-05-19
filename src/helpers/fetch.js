//const baseUrl = process.env.REACT_APP_API_URL;
const baseUrl = "http://localhost:63083/api";

const fetchNoToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export { fetchNoToken };

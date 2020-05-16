import { api } from "./config";

export const client = async (endpoint, customConfig) => {
  const config = {
    method: "GET",
    ...customConfig,
  };
  const url = `${api.url}/${endpoint}`;
  console.log({ url });
  const response = await window.fetch(url, config);
  const json = await response.json();

  return json;
};

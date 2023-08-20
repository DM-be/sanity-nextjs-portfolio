import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "wv7us4c0",
  dataset: "production",
  apiVersion: "2023-08-19",
  useCdn: false,
};

const client = createClient(config);

export default client;4
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "lh2rcxej",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // must have write permissions
});

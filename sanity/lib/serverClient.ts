import { createClient } from "next-sanity";

export const serverClient = createClient({
  projectId: "lh2rcxej",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: false,
  token: "skOOx4MYM7vhrwEInPVWo9cMqMH0ze2ZEaNtMpi013Nq1njlHM7eI73O6kznd1PkI33N5x8spvt8NXUYyIIfIfGF1ZA7S8AvUSqTKhjVYB0WBNExIR0rl6tyIjxrF4kjoVQjrjArrg4IwlPw9RRHuNoXkJvWp0TmYcJbpm1H9LnXrvB8Dxhk", // ✅ server-side write token
});

import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.CMS_SERVICE_DOMAIN,
  apiKey: process.env.CMS_API_KEY,
});

export const eventClient = createClient({
  serviceDomain: process.env.EVENT_SERVICE_DOMAIN,
  apiKey: process.env.EVENT_API_KEY,
});

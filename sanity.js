import { createClient } from "@sanity/client";
import imageBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "wln2s3jd",
  // projectId: "6j5z2z9i",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;

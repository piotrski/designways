import { createClient } from "contentful";

const formatData = (data) => {
  if (data.fields) {
    return formatData(data.fields);
  } else if (Array.isArray(data)) {
    return data.map(formatData);
  } else if (typeof data === "object") {
    return Object.entries(data).reduce(
      (acc, [key, val]) => ({ ...acc, [key]: formatData(val) }),
      {}
    );
  }
  return data;
};
export class ContentfulApi {
  client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  async getEvents() {
    return await this.client
      .getEntries({
        content_type: "event",
        order: "fields.startDate"
      }).then(({ items }) => items)
      .then(formatData)
      .catch((err) => {
        return []
      })
  }

  async getTags() {
    return await this.client
      .getEntries({
        content_type: "tag",
      }).then(({ items }) => items)
      .then(formatData)
      .catch((err) => {
        return []
      })
  }

  async getLevels() {
    return await this.client
      .getEntries({
        content_type: "level",
      }).then(({ items }) => items)
      .then(formatData)
      .catch((err) => {
        return []
      })
  }
}
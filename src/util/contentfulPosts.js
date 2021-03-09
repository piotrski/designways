const space = process.env.CONTENTFUL_SPACE;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

export async function getEvents() {
  const entries = await client.getEntries({
    content_type: "event",
    order: "fields.startDate",
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}
export async function getTags() {
  const entries = await client.getEntries({
    content_type: "tag",
    order: "fields.name",
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}
export async function getLevel() {
  const entries = await client.getEntries({
    content_type: "level",
    order: "fields.name",
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export default { getEvents, getTags, getLevel };

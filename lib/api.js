import client from "./sanity";

export const getAllPosts = async () => {
  const posts = await client.fetch(`*[_type=="post"]`);

  return posts;
};

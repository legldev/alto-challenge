export function readFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);

    // If the data is not found or is null, return an empty object or any default value
    if (data === null) {
      return [];
    }

    // If the data is found, parse it from JSON and return it
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data from local storage:", error);
    return [];
  }
}

export function saveToLocalStorage(key, data) {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (error) {
    console.error("Error saving data to local storage:", error);
  }
}

export function getPostById(id) {
  const postsKey = "blogPosts";
  const posts = readFromLocalStorage(postsKey);

  // Find the post with the matching ID
  const post = posts.find((post) => post.id == id);

  // If the post is found, return it; otherwise, return null
  return post || null;
}
